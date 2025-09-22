"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const typescript_1 = __importDefault(require("typescript"));
// TypeScript 到 Lua 转换器（支持数组）
class TsToLuaConverter {
    constructor() {
        this.indentLevel = 0;
        this.currentFunction = null;
        this.luaCode = '';
    }
    convert(sourceFile) {
        this.luaCode = '';
        this.processNode(sourceFile);
        return this.luaCode;
    }
    processNode(node) {
        switch (node.kind) {
            case typescript_1.default.SyntaxKind.SourceFile:
                this.visitSourceFile(node);
                break;
            case typescript_1.default.SyntaxKind.VariableStatement:
                this.visitVariableStatement(node);
                break;
            case typescript_1.default.SyntaxKind.FunctionDeclaration:
                this.visitFunctionDeclaration(node);
                break;
            case typescript_1.default.SyntaxKind.IfStatement:
                this.visitIfStatement(node);
                break;
            case typescript_1.default.SyntaxKind.ForStatement:
                this.visitForStatement(node);
                break;
            case typescript_1.default.SyntaxKind.ForOfStatement:
                this.visitForOfStatement(node);
                break;
            case typescript_1.default.SyntaxKind.WhileStatement:
                this.visitWhileStatement(node);
                break;
            case typescript_1.default.SyntaxKind.ExpressionStatement:
                this.visitExpressionStatement(node);
                break;
            case typescript_1.default.SyntaxKind.ReturnStatement:
                this.visitReturnStatement(node);
                break;
            case typescript_1.default.SyntaxKind.BinaryExpression:
                return this.visitBinaryExpression(node);
            case typescript_1.default.SyntaxKind.CallExpression:
                return this.visitCallExpression(node);
            case typescript_1.default.SyntaxKind.Identifier:
                return this.visitIdentifier(node);
            case typescript_1.default.SyntaxKind.NumericLiteral:
            case typescript_1.default.SyntaxKind.StringLiteral:
                return this.visitLiteral(node);
            case typescript_1.default.SyntaxKind.ObjectLiteralExpression:
                return this.visitObjectLiteral(node);
            case typescript_1.default.SyntaxKind.PropertyAccessExpression:
                return this.visitPropertyAccess(node);
            case typescript_1.default.SyntaxKind.ArrayLiteralExpression:
                return this.visitArrayLiteral(node);
            case typescript_1.default.SyntaxKind.ElementAccessExpression:
                return this.visitElementAccess(node);
            default:
                typescript_1.default.forEachChild(node, child => this.processNode(child));
        }
    }
    visitSourceFile(node) {
        typescript_1.default.forEachChild(node, child => this.processNode(child));
    }
    visitVariableStatement(node) {
        const declaration = node.declarationList.declarations[0];
        if (declaration) {
            const name = declaration.name.text;
            const initializer = declaration.initializer
                ? this.visitExpression(declaration.initializer)
                : 'nil';
            this.addLine(`local ${name} = ${initializer}`);
        }
    }
    visitFunctionDeclaration(node) {
        const name = node.name?.text || 'anonymous';
        const params = node.parameters.map(p => p.name.text).join(', ');
        this.currentFunction = name;
        this.addLine(`function ${name}(${params})`);
        this.indentLevel++;
        typescript_1.default.forEachChild(node.body, child => this.processNode(child));
        this.indentLevel--;
        this.addLine('end');
        this.currentFunction = null;
    }
    visitIfStatement(node) {
        const condition = this.visitExpression(node.expression);
        this.addLine(`if ${condition} then`);
        this.indentLevel++;
        this.processNode(node.thenStatement);
        if (node.elseStatement) {
            this.indentLevel--;
            this.addLine('else');
            this.indentLevel++;
            this.processNode(node.elseStatement);
        }
        this.indentLevel--;
        this.addLine('end');
    }
    visitForStatement(node) {
        const initializer = node.initializer;
        const name = initializer.declarations[0].name.text;
        const condition = this.visitExpression(node.condition);
        const incrementor = this.visitExpression(node.incrementor);
        this.addLine(`for ${name} = ${condition}, ${incrementor} do`);
        this.indentLevel++;
        this.processNode(node.statement);
        this.indentLevel--;
        this.addLine('end');
    }
    visitForOfStatement(node) {
        const variable = node.initializer
            .declarations[0].name;
        const variableName = variable.text;
        const expression = this.visitExpression(node.expression);
        this.addLine(`for _, ${variableName} in ipairs(${expression}) do`);
        this.indentLevel++;
        this.processNode(node.statement);
        this.indentLevel--;
        this.addLine('end');
    }
    visitWhileStatement(node) {
        const condition = this.visitExpression(node.expression);
        this.addLine(`while ${condition} do`);
        this.indentLevel++;
        this.processNode(node.statement);
        this.indentLevel--;
        this.addLine('end');
    }
    visitExpressionStatement(node) {
        const expr = this.visitExpression(node.expression);
        this.addLine(expr);
    }
    visitReturnStatement(node) {
        const expr = node.expression ? this.visitExpression(node.expression) : '';
        this.addLine(`return ${expr}`);
    }
    visitExpression(node) {
        switch (node.kind) {
            case typescript_1.default.SyntaxKind.BinaryExpression:
                return this.visitBinaryExpression(node);
            case typescript_1.default.SyntaxKind.CallExpression:
                return this.visitCallExpression(node);
            case typescript_1.default.SyntaxKind.Identifier:
                return this.visitIdentifier(node);
            case typescript_1.default.SyntaxKind.NumericLiteral:
            case typescript_1.default.SyntaxKind.StringLiteral:
                return this.visitLiteral(node);
            case typescript_1.default.SyntaxKind.ObjectLiteralExpression:
                return this.visitObjectLiteral(node);
            case typescript_1.default.SyntaxKind.PropertyAccessExpression:
                return this.visitPropertyAccess(node);
            case typescript_1.default.SyntaxKind.ArrayLiteralExpression:
                return this.visitArrayLiteral(node);
            case typescript_1.default.SyntaxKind.ElementAccessExpression:
                return this.visitElementAccess(node);
            default:
                return 'nil';
        }
    }
    visitBinaryExpression(node) {
        const left = this.visitExpression(node.left);
        const right = this.visitExpression(node.right);
        const operator = this.getLuaOperator(node.operatorToken.kind);
        return `${left} ${operator} ${right}`;
    }
    // private visitCallExpression(node: ts.CallExpression): string {
    //     const func = this.visitExpression(node.expression);
    //     const args = node.arguments.map(arg => this.visitExpression(arg)).join(', ');
    //     return `${func}(${args})`;
    // }
    visitCallExpression(node) {
        const expression = node.expression;
        // 处理方法调用 (obj.method())
        if (typescript_1.default.isPropertyAccessExpression(expression)) {
            const obj = this.visitExpression(expression.expression);
            const method = expression.name.text;
            const args = node.arguments.map(arg => this.visitExpression(arg)).join(', ');
            return `${obj}.${method}(${args})`;
        }
        // 处理普通函数调用
        const func = this.visitExpression(node.expression);
        const args = node.arguments.map(arg => this.visitExpression(arg)).join(', ');
        return `${func}(${args})`;
    }
    visitIdentifier(node) {
        return node.text;
    }
    visitLiteral(node) {
        if (node.kind === typescript_1.default.SyntaxKind.StringLiteral) {
            return `"${node.text}"`;
        }
        return node.text;
    }
    visitObjectLiteral(node) {
        const properties = node.properties.map(prop => {
            if (typescript_1.default.isPropertyAssignment(prop)) {
                const name = prop.name.text;
                const value = this.visitExpression(prop.initializer);
                return `${name} = ${value}`;
            }
            return '';
        }).filter(Boolean).join(', ');
        return `{ ${properties} }`;
    }
    visitArrayLiteral(node) {
        const elements = node.elements.map(element => this.visitExpression(element)).join(', ');
        return `{ ${elements} }`;
    }
    visitElementAccess(node) {
        const expression = this.visitExpression(node.expression);
        const argument = this.visitExpression(node.argumentExpression);
        // Lua 数组索引从 1 开始，所以需要 +1
        return `${expression}[${argument} + 1]`;
    }
    visitPropertyAccess(node) {
        const expression = this.visitExpression(node.expression);
        const name = node.name.text;
        // 特殊处理数组的 length 属性
        if (name === 'length') {
            return `#${expression}`;
        }
        return `${expression}.${name}`;
    }
    getLuaOperator(kind) {
        switch (kind) {
            case typescript_1.default.SyntaxKind.PlusToken: return '+';
            case typescript_1.default.SyntaxKind.MinusToken: return '-';
            case typescript_1.default.SyntaxKind.AsteriskToken: return '*';
            case typescript_1.default.SyntaxKind.SlashToken: return '/';
            case typescript_1.default.SyntaxKind.EqualsEqualsToken: return '==';
            case typescript_1.default.SyntaxKind.ExclamationEqualsToken: return '~=';
            case typescript_1.default.SyntaxKind.LessThanToken: return '<';
            case typescript_1.default.SyntaxKind.GreaterThanToken: return '>';
            case typescript_1.default.SyntaxKind.LessThanEqualsToken: return '<=';
            case typescript_1.default.SyntaxKind.GreaterThanEqualsToken: return '>=';
            case typescript_1.default.SyntaxKind.PlusEqualsToken: return '=';
            case typescript_1.default.SyntaxKind.MinusEqualsToken: return '=';
            default: return 'unknown';
        }
    }
    addLine(text) {
        this.luaCode += '    '.repeat(this.indentLevel) + text + '\n';
    }
}
// 主程序：读取当前目录下的 TS 文件并转换为 Lua
function convertTsFilesToLua() {
    const currentDir = process.cwd();
    const srcDir = path_1.default.join(currentDir, 'src');
    // 确保 src 目录存在
    if (!fs_1.default.existsSync(srcDir)) {
        console.error('Error: src directory not found');
        return;
    }
    const files = fs_1.default.readdirSync(srcDir);
    const tsFiles = files.filter(file => file.endsWith('.ts') &&
        file !== 'converter.ts' &&
        !file.endsWith('.d.ts'));
    if (tsFiles.length === 0) {
        console.log('No TypeScript files found in the src directory.');
        return;
    }
    for (const tsFile of tsFiles) {
        const filePath = path_1.default.join(srcDir, tsFile);
        const sourceCode = fs_1.default.readFileSync(filePath, 'utf-8');
        // 创建 TypeScript 源文件
        const sourceFile = typescript_1.default.createSourceFile(tsFile, sourceCode, typescript_1.default.ScriptTarget.Latest, true);
        // 转换为 Lua
        const converter = new TsToLuaConverter();
        const luaCode = converter.convert(sourceFile);
        // 写入 Lua 文件到 dist 目录
        const distDir = path_1.default.join(currentDir, 'dist');
        if (!fs_1.default.existsSync(distDir)) {
            fs_1.default.mkdirSync(distDir);
        }
        const luaFileName = tsFile.replace('.ts', '.lua');
        const luaFilePath = path_1.default.join(distDir, luaFileName);
        fs_1.default.writeFileSync(luaFilePath, luaCode);
        console.log(`Converted ${tsFile} to ${luaFileName}`);
    }
}
// 执行转换
convertTsFilesToLua();
