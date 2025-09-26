// watch-and-convert.js
const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');
import {TsToLuaConverter,BasicTypeMethods} from './converter'
import ts from 'typescript';
const IGNORED_FILES = /(^|[\/\\])\../; // 忽略隐藏文件


interface tConfig{
    inputDir:string,outputDir:string,
    reserved_methods:BasicTypeMethods,use_ts_basic_methods:Boolean
}

function loadConfig(): tConfig {
  try {
    // 获取配置文件路径
    const configPath = path.join(process.cwd(), './config.json');
    
    // 读取文件内容
    const rawData = fs.readFileSync(configPath, 'utf-8');
    
    // 解析JSON
    const config: tConfig = JSON.parse(rawData);
    
    return config;
  } catch (error) {
    console.error('Error loading config file:', error);
    process.exit(1);
  }
}

function resolvePath(userPath: string, baseDir?: string): string {
  if (path.isAbsolute(userPath)) {
    return userPath;
  }
  // 如果没有提供基准目录，使用当前工作目录
  const base = baseDir || process.cwd();
  return path.resolve(base, userPath);
}


const tconfig=loadConfig()


const outDir=resolvePath(tconfig.outputDir)
const inDir=resolvePath(tconfig.inputDir)


// 确保输出目录存在
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}
// 创建转换器实例
const converter = new TsToLuaConverter(tconfig.use_ts_basic_methods?tconfig.reserved_methods:{});

// 初始化转换所有文件
function convertAllFiles() {
    console.log('⭐️ 开始初始转换...');
    
    const files = fs.readdirSync(inDir);
    let convertedCount = 0;
    
    
    files.forEach((file: string) => {
        if (path.extname(file) === '.ts' && !IGNORED_FILES.test(file)) {
            convertFile(path.join(inDir, file));
            convertedCount++;
        }
    });
    
    console.log(`✅ 初始转换完成。已转换 ${convertedCount} 个文件。`);
}

// 转换单个文件
function convertFile(filePath: string) {
    const fileName = path.basename(filePath);
    const luaFileName = fileName.replace('.ts', '.lua');
    const outputPath = path.join(outDir, luaFileName);
    
    try {
        const sourceCode = fs.readFileSync(filePath, 'utf-8');
        const sourceFile = ts.createSourceFile(
            fileName,
            sourceCode,
            ts.ScriptTarget.Latest,
            true
        );
        
        const luaCode = converter.convert(sourceFile);
        fs.writeFileSync(outputPath, luaCode);
        
        console.log(`➡️  已转换 ${fileName} 为 ${luaFileName}`);
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        console.error(`转换 ${fileName} 时出错:`, errorMessage);
    }
}

// 设置文件监听器
const watcher = chokidar.watch(inDir, {
    ignored: IGNORED_FILES,
    persistent: true,
    ignoreInitial: true, // 忽略初始扫描，因为我们已经处理了
});

// 监听文件变化事件
watcher
    .on('add', (filePath: string) => {
        if (path.extname(filePath) === '.ts') {
            console.log(`❕ 检测到新文件: ${path.basename(filePath)}`);
            convertFile(filePath);
        }
    })
    .on('change', (filePath: string) => {
        if (path.extname(filePath) === '.ts') {
            console.log(`💻 文件已修改: ${path.basename(filePath)}`);
            convertFile(filePath);
        }
    })
    .on('unlink', (filePath: string) => {
        if (path.extname(filePath) === '.ts') {
            const luaFileName = path.basename(filePath).replace('.ts', '.lua');
            const outputPath = path.join(outDir, luaFileName);
            
            if (fs.existsSync(outputPath)) {
                fs.unlinkSync(outputPath);
                console.log(`❌已删除 ${luaFileName} (源文件已移除)`);
            }
        }
    })
    .on('error', (error: Error) => {
        console.error('❌错误:', error.message);
    });

// 初始转换
convertAllFiles();

console.log(`⚙️  开发环境启动，为 ${inDir} 目录...`);
console.log('➡️  按 Ctrl+C 停止。');


const workDir = process.cwd(); // 当前工作目录
const srcFile = path.join(workDir, 'src', 'tslib', 'tsbasic.lua');
const destFile = path.join(outDir, 'tsbasic.lua');
function ensureTsBasicLuaExists() {
    try {
        // 检查目标文件是否存在
        if (!fs.existsSync(destFile)) {
            
            // 检查源文件是否存在
            if (!fs.existsSync(srcFile)) {
                throw new Error(`源文件 ${srcFile} 不存在`);
            }
            
            // 确保输出目录存在
            if (!fs.existsSync(outDir)) {
                console.log(`创建目录: ${outDir}`);
                fs.mkdirSync(outDir, { recursive: true });
            }
            
            // 复制文件
            console.log(`复制ts支持文件: ${srcFile} -> ${destFile}`);
            fs.copyFileSync(srcFile, destFile);
            
        } 
    } catch (error) {
        console.error('ts支持文件移动失败')
    }
}

// 执行检查
if (tconfig.use_ts_basic_methods){

    ensureTsBasicLuaExists();
}


// 优雅退出处理
process.on('SIGINT', () => {
    console.log('\n⚙️  正在停止...');
    watcher.close().then(() => {
        console.log('结束。');
        process.exit(0);
    });
});

process.on('SIGTERM', () => {
    console.log('\n收到终止信号...');
    watcher.close().then(() => {
        console.log('再见！');
        process.exit(0);
    });
});