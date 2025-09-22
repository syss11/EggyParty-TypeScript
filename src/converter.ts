import fs from 'fs';
import path from 'path';
import ts from 'typescript';

// TypeScript 到 Lua 转换器（yuanbao）
class TsToLuaConverter {
    private indentLevel = 0;
    private currentFunction: string | null = null;
    private luaCode = '';

    convert(sourceFile: ts.SourceFile): string {
        this.luaCode = '';
        this.processNode(sourceFile);
        return this.luaCode;
    }

    private processNode(node: ts.Node) {
        switch (node.kind) {
            case ts.SyntaxKind.SourceFile:
                this.visitSourceFile(node as ts.SourceFile);
                break;
            case ts.SyntaxKind.VariableStatement:
                this.visitVariableStatement(node as ts.VariableStatement);
                break;
            case ts.SyntaxKind.FunctionDeclaration:
                this.visitFunctionDeclaration(node as ts.FunctionDeclaration);
                break;
            case ts.SyntaxKind.IfStatement:
                this.visitIfStatement(node as ts.IfStatement);
                break;
            case ts.SyntaxKind.ForStatement:
                this.visitForStatement(node as ts.ForStatement);
                break;
            case ts.SyntaxKind.ForOfStatement:
                this.visitForOfStatement(node as ts.ForOfStatement);
                break;
            case ts.SyntaxKind.WhileStatement:
                this.visitWhileStatement(node as ts.WhileStatement);
                break;
            case ts.SyntaxKind.ExpressionStatement:
                this.visitExpressionStatement(node as ts.ExpressionStatement);
                break;
            case ts.SyntaxKind.ReturnStatement:
                this.visitReturnStatement(node as ts.ReturnStatement);
                break;
            case ts.SyntaxKind.BinaryExpression:
                return this.visitBinaryExpression(node as ts.BinaryExpression);
            case ts.SyntaxKind.CallExpression:
                return this.visitCallExpression(node as ts.CallExpression);
            case ts.SyntaxKind.Identifier:
                return this.visitIdentifier(node as ts.Identifier);
            case ts.SyntaxKind.NumericLiteral:
            case ts.SyntaxKind.StringLiteral:
                return this.visitLiteral(node as ts.LiteralExpression);
            case ts.SyntaxKind.ObjectLiteralExpression:
                return this.visitObjectLiteral(node as ts.ObjectLiteralExpression);
            case ts.SyntaxKind.PropertyAccessExpression:
                return this.visitPropertyAccess(node as ts.PropertyAccessExpression);
            case ts.SyntaxKind.ArrayLiteralExpression:
                return this.visitArrayLiteral(node as ts.ArrayLiteralExpression);
            case ts.SyntaxKind.ElementAccessExpression:
                return this.visitElementAccess(node as ts.ElementAccessExpression);
            default:
                ts.forEachChild(node, child => this.processNode(child));
        }
    }

    private visitSourceFile(node: ts.SourceFile) {
        ts.forEachChild(node, child => this.processNode(child));
    }

    private visitVariableStatement(node: ts.VariableStatement) {
        const declaration = node.declarationList.declarations[0];
        if (declaration) {
            const name = (declaration.name as ts.Identifier).text;
            const initializer = declaration.initializer 
                ? this.visitExpression(declaration.initializer) 
                : 'nil';
            
            this.addLine(`local ${name} = ${initializer}`);
        }
    }

    private visitFunctionDeclaration(node: ts.FunctionDeclaration) {
        const name = node.name?.text || 'anonymous';
        const params = node.parameters.map(p => (p.name as ts.Identifier).text).join(', ');
        
        this.currentFunction = name;
        this.addLine(`function ${name}(${params})`);
        this.indentLevel++;
        
        ts.forEachChild(node.body!, child => this.processNode(child));
        
        this.indentLevel--;
        this.addLine('end');
        this.currentFunction = null;
    }

    private visitIfStatement(node: ts.IfStatement) {
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

    private visitForStatement(node: ts.ForStatement) {
        const initializer = node.initializer as ts.VariableDeclarationList;
        const name = (initializer.declarations[0].name as ts.Identifier).text;
        const condition = this.visitExpression(node.condition!);
        const incrementor = this.visitExpression(node.incrementor!);
        
        this.addLine(`for ${name} = ${condition}, ${incrementor} do`);
        this.indentLevel++;
        
        this.processNode(node.statement);
        
        this.indentLevel--;
        this.addLine('end');
    }

    private visitForOfStatement(node: ts.ForOfStatement) {
        const variable = (node.initializer as ts.VariableDeclarationList)
            .declarations[0].name as ts.Identifier;
        const variableName = variable.text;
        const expression = this.visitExpression(node.expression);
        
        this.addLine(`for _, ${variableName} in ipairs(${expression}) do`);
        this.indentLevel++;
        
        this.processNode(node.statement);
        
        this.indentLevel--;
        this.addLine('end');
    }

    private visitWhileStatement(node: ts.WhileStatement) {
        const condition = this.visitExpression(node.expression);
        this.addLine(`while ${condition} do`);
        this.indentLevel++;
        
        this.processNode(node.statement);
        
        this.indentLevel--;
        this.addLine('end');
    }

    private visitExpressionStatement(node: ts.ExpressionStatement) {
        const expr = this.visitExpression(node.expression);
        this.addLine(expr);
    }

    private visitReturnStatement(node: ts.ReturnStatement) {
        const expr = node.expression ? this.visitExpression(node.expression) : '';
        this.addLine(`return ${expr}`);
    }

    private visitExpression(node: ts.Expression): string {
        switch (node.kind) {
            case ts.SyntaxKind.BinaryExpression:
                return this.visitBinaryExpression(node as ts.BinaryExpression);
            case ts.SyntaxKind.CallExpression:
                return this.visitCallExpression(node as ts.CallExpression);
            case ts.SyntaxKind.Identifier:
                return this.visitIdentifier(node as ts.Identifier);
            case ts.SyntaxKind.NumericLiteral:
            case ts.SyntaxKind.StringLiteral:
                return this.visitLiteral(node as ts.LiteralExpression);
            case ts.SyntaxKind.ObjectLiteralExpression:
                return this.visitObjectLiteral(node as ts.ObjectLiteralExpression);
            case ts.SyntaxKind.PropertyAccessExpression:
                return this.visitPropertyAccess(node as ts.PropertyAccessExpression);
            case ts.SyntaxKind.ArrayLiteralExpression:
                return this.visitArrayLiteral(node as ts.ArrayLiteralExpression);
            case ts.SyntaxKind.ElementAccessExpression:
                return this.visitElementAccess(node as ts.ElementAccessExpression);
            default:
                return 'nil';
        }
    }

    private visitBinaryExpression(node: ts.BinaryExpression): string {
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
    private visitCallExpression(node: ts.CallExpression): string {
    const expression = node.expression;
    
    // 处理方法调用 (obj.method())
    if (ts.isPropertyAccessExpression(expression)) {
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

    private visitIdentifier(node: ts.Identifier): string {
        return node.text;
    }

    private visitLiteral(node: ts.LiteralExpression): string {
        if (node.kind === ts.SyntaxKind.StringLiteral) {
            return `"${node.text}"`;
        }
        return node.text;
    }

    private visitObjectLiteral(node: ts.ObjectLiteralExpression): string {
        const properties = node.properties.map(prop => {
            if (ts.isPropertyAssignment(prop)) {
                const name = (prop.name as ts.Identifier).text;
                const value = this.visitExpression(prop.initializer);
                return `${name} = ${value}`;
            }
            return '';
        }).filter(Boolean).join(', ');
        
        return `{ ${properties} }`;
    }

    private visitArrayLiteral(node: ts.ArrayLiteralExpression): string {
        const elements = node.elements.map(element => 
            this.visitExpression(element)
        ).join(', ');
        
        return `{ ${elements} }`;
    }

    private visitElementAccess(node: ts.ElementAccessExpression): string {
        const expression = this.visitExpression(node.expression);
        const argument = this.visitExpression(node.argumentExpression);
        
        // Lua 数组索引从 1 开始，所以需要 +1
        return `${expression}[${argument} + 1]`;
    }

    private visitPropertyAccess(node: ts.PropertyAccessExpression): string {
        const expression = this.visitExpression(node.expression);
        const name = node.name.text;
        
        // 特殊处理数组的 length 属性
        if (name === 'length') {
            return `#${expression}`;
        }
        
        return `${expression}.${name}`;
    }
    

    private getLuaOperator(kind: ts.SyntaxKind): string {
        switch (kind) {
            case ts.SyntaxKind.PlusToken: return '+';
            case ts.SyntaxKind.MinusToken: return '-';
            case ts.SyntaxKind.AsteriskToken: return '*';
            case ts.SyntaxKind.SlashToken: return '/';
            case ts.SyntaxKind.EqualsEqualsToken: return '==';
            case ts.SyntaxKind.ExclamationEqualsToken: return '~=';
            case ts.SyntaxKind.LessThanToken: return '<';
            case ts.SyntaxKind.GreaterThanToken: return '>';
            case ts.SyntaxKind.LessThanEqualsToken: return '<=';
            case ts.SyntaxKind.GreaterThanEqualsToken: return '>=';
            case ts.SyntaxKind.PlusEqualsToken: return '=';
            case ts.SyntaxKind.MinusEqualsToken: return '=';
            default: return 'unknown';
        }
    }

    private addLine(text: string) {
        this.luaCode += '    '.repeat(this.indentLevel) + text + '\n';
    }
}

// 主程序：读取当前目录下的 TS 文件并转换为 Lua
function convertTsFilesToLua() {
    const currentDir = process.cwd();
    const srcDir = path.join(currentDir, 'src');
    
    // 确保 src 目录存在
    if (!fs.existsSync(srcDir)) {
        console.error('Error: src directory not found');
        return;
    }
    
    const files = fs.readdirSync(srcDir);
    const tsFiles = files.filter(file => 
        file.endsWith('.ts') && 
        file !== 'converter.ts' && 
        !file.endsWith('.d.ts')
    );
    
    if (tsFiles.length === 0) {
        console.log('No TypeScript files found in the src directory.');
        return;
    }
    
    for (const tsFile of tsFiles) {
        const filePath = path.join(srcDir, tsFile);
        const sourceCode = fs.readFileSync(filePath, 'utf-8');
        
        // 创建 TypeScript 源文件
        const sourceFile = ts.createSourceFile(
            tsFile,
            sourceCode,
            ts.ScriptTarget.Latest,
            true
        );
        
        // 转换为 Lua
        const converter = new TsToLuaConverter();
        const luaCode = converter.convert(sourceFile);
        
        // 写入 Lua 文件到 dist 目录
        const distDir = path.join(currentDir, 'dist');
        if (!fs.existsSync(distDir)) {
            fs.mkdirSync(distDir);
        }
        
        const luaFileName = tsFile.replace('.ts', '.lua');
        const luaFilePath = path.join(distDir, luaFileName);
        fs.writeFileSync(luaFilePath, luaCode);
        
        console.log(`Converted ${tsFile} to ${luaFileName}`);
    }
}

// 执行转换
convertTsFilesToLua();