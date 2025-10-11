// watch-and-convert.js
import fs from 'fs'
import path from 'path'
import chokidar, { FSWatcher } from 'chokidar';
import {TsToLuaConverter,BasicTypeMethods} from './converter.js'
import ts from 'typescript';
import config from './config.js';

class Start {
    converter: TsToLuaConverter;
    workdir: string;
    outDir: string;
    inDir: string
    watcher: FSWatcher;
    destFile: string;
    IGNORED_FILES: RegExp;
    srcFile: string;
    constructor() {
        this.converter = new TsToLuaConverter(config.use_ts_basic_methods ? config.reserved_methods : {}); // 创建转换器实例
        this.workdir = process.cwd(); // 忽略隐藏文件
        this.outDir = this.resolvePath(config.outputDir);
        this.inDir = this.resolvePath(config.inputDir);
        this.srcFile = path.join(this.workdir, 'src', 'tslib', 'tsbasic.lua');
        this.IGNORED_FILES = /(^|[\/\\])\../;
        this.destFile = path.join(this.outDir, 'tsbasic.lua');
        this.watcher = chokidar.watch(this.inDir, {
            ignored: this.IGNORED_FILES,
            persistent: true,
            ignoreInitial: true, // 忽略初始扫描，因为已经处理了
        });
    }

    private convertAllFiles() {
    console.log('⭐️ 开始初始转换...');
    
    const files = fs.readdirSync(this.inDir);
    let convertedCount = 0;
    
    
    files.forEach((file: string) => {
        if (path.extname(file) === '.ts' && !this.IGNORED_FILES.test(file)) {
            this.convertFile(path.join(this.inDir, file));
            convertedCount++;
        }
    });
    
    console.log(`✅ 初始转换完成。已转换 ${convertedCount} 个文件。`);
    }

   private convertFile(filePath: string) {
    const fileName = path.basename(filePath);
    const luaFileName = fileName.replace('.ts', '.lua');
    const outputPath = path.join(this.outDir, luaFileName);
    
    try {
        const sourceCode = fs.readFileSync(filePath, 'utf-8');
        const sourceFile = ts.createSourceFile(
            fileName,
            sourceCode,
            ts.ScriptTarget.Latest,
            true
        );
        
        const luaCode = this.converter.convert(sourceFile);
        fs.writeFileSync(outputPath, luaCode);
        
        console.log(`➡️  已转换 ${fileName} 为 ${luaFileName}`);
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        console.error(`转换 ${fileName} 时出错:`, errorMessage);
    }
}

    private ensureTsBasicLuaExists() {
    try {
            if(fs.existsSync(this.destFile)){
            throw new Error("destfile tsbasic.lua is not exists!")
            }
            // 检查源文件是否存在
            if (!fs.existsSync(this.srcFile)) {
                throw new Error(`源文件 ${this.srcFile} 不存在`);
            }
            // 复制文件
            fs.copyFileSync(this.srcFile, this.destFile);
            console.log(`复制ts支持文件: ${this.srcFile} -> ${this.destFile}`);            
    } catch (error) {
        console.error('ts支持文件移动失败')
    }
}

    private watch() {
        this.watcher
            .on('add', (filePath: string) => {
                if (path.extname(filePath) === '.ts') {
                    console.log(`❕ 检测到新文件: ${path.basename(filePath)}`);
                    this.convertFile(filePath);
                }
            })
            .on('change', (filePath: string) => {
                if (path.extname(filePath) === '.ts') {
                    console.log(`💻 文件已修改: ${path.basename(filePath)}`);
                    this.convertFile(filePath);
                }
            })
            .on('unlink', (filePath: string) => {
                if (path.extname(filePath) === '.ts') {
                    const luaFileName = path.basename(filePath).replace('.ts', '.lua');
                    const outputPath = path.join(this.outDir, luaFileName);

                    if (fs.existsSync(outputPath)) {
                        fs.unlinkSync(outputPath);
                        console.log(`❌已删除 ${luaFileName} (源文件已移除)`);
                    }
                }
            })
            .on('error', (error) => {
                console.error('❌错误:', (error as Error).message);
            });
    }

    private resolvePath(usePath: string, baseDir?: string): string {
        if (path.isAbsolute(usePath)) {
            return usePath;
        }
        return path.resolve(baseDir || process.cwd(), usePath);
    }

    _init() {
        if (!fs.existsSync(this.outDir)) {
            fs.mkdirSync(this.outDir, { recursive: true });
        }
        console.log(`⚙️  开发环境启动，为 ${this.inDir} 目录...`);
        console.log('➡️  按 Ctrl+C 停止。');
        if (config.use_ts_basic_methods){
         this.ensureTsBasicLuaExists();
        }
        this.convertAllFiles(); // 初始转换
        this.watch(); // 监听文件变化
        const exitHandler = ()=>{
                this.watcher.close().then(() => {
                console.log('结束,再见！');
                process.exit(0);
            });
        }
        process.on('SIGTERM',exitHandler.bind(this)).on('SIGINT',exitHandler.bind(this))  // 优雅退出处理
    }
}

const start = new Start();
start._init()