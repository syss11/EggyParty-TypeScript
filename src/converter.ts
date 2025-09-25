import fs from 'fs';
import path from 'path';
import ts from 'typescript';

//导出目录，相对nodejs项目工作目录
const noutDir:string ='dist'

//导出目录，绝对目录，默认不使用，覆盖相对目录设置
const outDir:string=''









class TsToLuaConverter {
    private indentLevel = 0;
    private currentFunction: { name: string, isArrow: boolean } | null = null;
    private currentClass: string | null = null;
    private thisCaptureVar: string | null = null;
    private thisCaptureStack: string[] = [];
    private luaCode = '';
    private importMap: Map<string, string> = new Map();
    private interfaceMap: Map<string, string> = new Map();

    constructor() {
        this.indentLevel = 0;
        this.currentFunction = null;
        this.luaCode = '';
    }

    convert(sourceFile: ts.SourceFile): string {
        this.luaCode = '';
        this.processNode(sourceFile);
        return this.luaCode;
    }

    processNode(node: ts.Node) {
        switch (node.kind) {
            case ts.SyntaxKind.SourceFile:
                this.visitSourceFile(node as ts.SourceFile);
                break;
            case ts.SyntaxKind.ImportDeclaration:
                this.visitImportDeclaration(node as ts.ImportDeclaration);
                break;
            case ts.SyntaxKind.InterfaceDeclaration:
                this.visitInterfaceDeclaration(node as ts.InterfaceDeclaration);
                break;
            case ts.SyntaxKind.ClassDeclaration:
                this.visitClassDeclaration(node as ts.ClassDeclaration);
                break;
            case ts.SyntaxKind.VariableStatement:
                this.visitVariableStatement(node as ts.VariableStatement);
                break;
            case ts.SyntaxKind.FunctionDeclaration:
                this.visitFunctionDeclaration(node as ts.FunctionDeclaration);
                break;
            case ts.SyntaxKind.ArrowFunction:
                return this.visitArrowFunction(node as ts.ArrowFunction);
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
            case ts.SyntaxKind.ThisKeyword:
                return this.visitThisExpression(node);
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

    // ====================== 接口支持 ======================
    visitInterfaceDeclaration(node: ts.InterfaceDeclaration) {
        const interfaceName = node.name.text;
        const properties: string[] = [];
        
        // 收集接口属性
        node.members.forEach(member => {
            if (ts.isPropertySignature(member)) {
                const name = member.name.getText();
                properties.push(name);
            }
        });
        
        // 将接口信息存储在映射中（不生成实际代码）
        this.interfaceMap.set(interfaceName, properties.join(','));
        this.addLine(`-- Interface: ${interfaceName}`);
    }

    // ====================== 类支持 ======================
    visitClassDeclaration(node: ts.ClassDeclaration) {
        const className = node.name?.text || 'AnonymousClass';
        this.currentClass = className;
        
        // 处理继承
        const heritageClauses = node.heritageClauses;
        let parentClass = '';
        
        if (heritageClauses) {
            for (const clause of heritageClauses) {
                if (clause.token === ts.SyntaxKind.ExtendsKeyword) {
                    // 只取第一个父类
                    parentClass = clause.types[0].expression.getText();
                }
            }
        }
        
        // 创建类表
        this.addLine(`${className} = {}`);
        
        // 设置继承
        if (parentClass) {
            this.addLine(`setmetatable(${className}, {__index = ${parentClass}})`);
        }
        
        this.addLine(`${className}.__index = ${className}`);
        this.addLine('');
        
        // 处理类成员
        node.members.forEach(member => {
            if (ts.isPropertyDeclaration(member)) {
                this.visitClassProperty(member, className);
            } else if (ts.isMethodDeclaration(member)) {
                this.visitMethodDeclaration(member, className);
            } else if (ts.isConstructorDeclaration(member)) {
                this.visitConstructorDeclaration(member, className, parentClass);
            }
        });
        
        this.currentClass = null;
    }

    visitConstructorDeclaration(node: ts.ConstructorDeclaration, className: string, parentClass: string) {
        const params = node.parameters.map(p => p.name.getText()).join(', ');
        
        // 创建构造函数
        this.addLine(`function ${className}.new(${params})`);
        this.indentLevel++;
        
        // 创建实例
        this.addLine(`local self = setmetatable({}, ${className})`);
        
        // 处理父类构造函数调用
        if (node.body) {
            const superCall = this.findSuperCall(node.body);
            if (superCall) {
                const args = superCall.arguments.map(arg => this.visitExpression(arg)).join(', ');
                this.addLine(`${parentClass}.new(${args})`);
            }
        }
        
        // 处理属性初始化
        this.addLine('-- 初始化属性');
        
        // 处理构造函数体
        if (node.body) {
            this.processNode(node.body);
        }
        
        this.addLine('return self');
        this.indentLevel--;
        this.addLine('end');
        this.addLine('');
    }

    visitClassProperty(node: ts.PropertyDeclaration, className: string) {
        const propName = node.name.getText();
        const initializer = node.initializer 
            ? this.visitExpression(node.initializer) 
            : 'nil';
        
        // 在构造函数中初始化属性
        this.addLine(`-- 属性: ${propName}`);
    }

    visitMethodDeclaration(node: ts.MethodDeclaration, className: string) {
        const methodName = node.name.getText();
        const params = node.parameters.map(p => p.name.getText()).join(', ');
        
        // 类方法使用冒号语法，隐式传递self
        this.addLine(`function ${className}:${methodName}(${params})`);
        this.indentLevel++;
        
        // 处理函数体
        if (node.body) {
            this.processNode(node.body);
        }
        
        this.indentLevel--;
        this.addLine('end');
        this.addLine('');
    }

    // ====================== 辅助方法 ======================
    private findSuperCall(node: ts.Block): ts.CallExpression | null {
        for (const statement of node.statements) {
            if (ts.isExpressionStatement(statement)) {
                const expr = statement.expression;
                if (ts.isCallExpression(expr) && expr.expression.kind === ts.SyntaxKind.SuperKeyword) {
                    return expr;
                }
            }
        }
        return null;
    }

    // ====================== 箭头函数支持 ======================
    visitArrowFunction(node: ts.ArrowFunction): string {
        const oldFunctionContext = this.currentFunction;
        this.currentFunction = { name: 'arrow', isArrow: true };
        
        // 处理 this 捕获
        let captureCode = '';
        if (this.currentClass || this.thisCaptureVar) {
            const outerThisVar = this.thisCaptureVar || 'self';
            const newThisVar = `_this_${this.indentLevel}`;
            this.thisCaptureStack.push(this.thisCaptureVar || '');
            this.thisCaptureVar = newThisVar;
            captureCode = `local ${newThisVar} = ${outerThisVar}\n`;
        }
        
        // 处理参数
        const params = node.parameters.map(p => p.name.getText()).join(', ');
        
        // 处理函数体
        let body: string;
        if (ts.isBlock(node.body)) {
            // 多行函数体
            const oldCode = this.luaCode;
            this.luaCode = '';
            this.indentLevel++;
            this.processNode(node.body);
            this.indentLevel--;
            body = this.luaCode;
            this.luaCode = oldCode;
        } else {
            // 单行表达式
            body = `return ${this.visitExpression(node.body)}`;
        }
        
        // 生成函数代码
        const funcCode = `function(${params})\n${captureCode}${body}\nend`;
        
        // 恢复上下文
        this.currentFunction = oldFunctionContext;
        if (this.thisCaptureStack.length > 0) {
            this.thisCaptureVar = this.thisCaptureStack.pop() || null;
        }
        
        return funcCode;
    }

    // ====================== this 支持 ======================
    visitThisExpression(node: ts.Node): string {
        // 在箭头函数中使用捕获的 this 变量
        if (this.currentFunction?.isArrow && this.thisCaptureVar) {
            return this.thisCaptureVar;
        }
        
        // 在类方法中使用 self
        if (this.currentClass) {
            return 'self';
        }
        
        // 全局 this 转换为 _G (Lua 全局表)
        return '_G';
    }

    // ====================== 函数声明支持 this ======================
    visitFunctionDeclaration(node: ts.FunctionDeclaration) {
        const name = node.name?.text || 'anonymous';
        const params = node.parameters.map(p => p.name.getText()).join(', ');
        
        // 标记当前函数为普通函数
        this.currentFunction = { name, isArrow: false };
        
        this.addLine(`function ${name}(${params})`);
        this.indentLevel++;
        
        // 处理函数体
        if (node.body) {
            this.processNode(node.body);
        }
        
        this.indentLevel--;
        this.addLine('end');
        this.currentFunction = null;
    }

    // ====================== 调用表达式支持 this ======================
    visitCallExpression(node: ts.CallExpression): string {
        const expression = node.expression;
        
        // 处理方法调用 (obj.method())
        if (ts.isPropertyAccessExpression(expression)) {
            const obj = this.visitExpression(expression.expression);
            const method = expression.name.text;
            const args = node.arguments.map(arg => this.visitExpression(arg)).join(', ');
            
            // 检查是否是方法调用（对象为表或类）
            if (ts.isIdentifier(expression.expression) && 
                (this.importMap.has(expression.expression.text) || 
                 this.currentClass === expression.expression.text)) {
                return `${obj}:${method}(${args})`;
            }
            
            return `${obj}.${method}(${args})`;
        }
        
        // 处理普通函数调用
        const func = this.visitExpression(node.expression);
        const args = node.arguments.map(arg => this.visitExpression(arg)).join(', ');
        return `${func}(${args})`;
    }

    // ====================== import/require 支持 ======================
    visitImportDeclaration(node: ts.ImportDeclaration) {
        const moduleSpecifier = node.moduleSpecifier.getText().replace(/['"]/g, '');
        
        if (node.importClause) {
            // 默认导入 import React from 'react'
            if (node.importClause.name) {
                const defaultImport = node.importClause.name.text;
                this.importMap.set(defaultImport, moduleSpecifier);
                this.addLine(`local ${defaultImport} = require("${moduleSpecifier}")`);
            }
            
            // 命名空间导入 import * as React from 'react'
            if (node.importClause.namedBindings && ts.isNamespaceImport(node.importClause.namedBindings)) {
                const namespaceImport = node.importClause.namedBindings.name.text;
                this.importMap.set(namespaceImport, moduleSpecifier);
                this.addLine(`local ${namespaceImport} = require("${moduleSpecifier}")`);
            }
            
            // 命名导入 import { Component } from 'react'
            if (node.importClause.namedBindings && ts.isNamedImports(node.importClause.namedBindings)) {
                const imports = node.importClause.namedBindings.elements.map(element => {
                    const name = element.name.text;
                    const propertyName = element.propertyName ? element.propertyName.text : name;
                    return `${name} = ${propertyName}`;
                });
                
                this.addLine(`local ${imports.join(', ')} = require("${moduleSpecifier}")`);
            }
        }
    }

    // ====================== 其他方法 ======================
    visitSourceFile(node: ts.SourceFile) {
        ts.forEachChild(node, child => this.processNode(child));
    }

    visitVariableStatement(node: ts.VariableStatement) {
        const declaration = node.declarationList.declarations[0];
        if (declaration) {
            const name = declaration.name.getText();
            const initializer = declaration.initializer 
                ? this.visitExpression(declaration.initializer) 
                : 'nil';
            this.addLine(`local ${name} = ${initializer}`);
        }
    }

    visitIfStatement(node: ts.IfStatement) {
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

    visitForStatement(node: ts.ForStatement) {
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

    visitForOfStatement(node: ts.ForOfStatement) {
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

    visitWhileStatement(node: ts.WhileStatement) {
        const condition = this.visitExpression(node.expression);
        this.addLine(`while ${condition} do`);
        this.indentLevel++;
        
        this.processNode(node.statement);
        
        this.indentLevel--;
        this.addLine('end');
    }

    visitExpressionStatement(node: ts.ExpressionStatement) {
        const expr = this.visitExpression(node.expression);
        this.addLine(expr);
    }

    visitReturnStatement(node: ts.ReturnStatement) {
        const expr = node.expression ? this.visitExpression(node.expression) : '';
        this.addLine(`return ${expr}`);
    }

    visitExpression(node: ts.Expression): string {
        switch (node.kind) {
            case ts.SyntaxKind.BinaryExpression:
                return this.visitBinaryExpression(node as ts.BinaryExpression);
            case ts.SyntaxKind.CallExpression:
                return this.visitCallExpression(node as ts.CallExpression);
            case ts.SyntaxKind.ThisKeyword:
                return this.visitThisExpression(node);
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
            case ts.SyntaxKind.ArrowFunction:
                return this.visitArrowFunction(node as ts.ArrowFunction);
            default:
                return 'nil';
        }
    }

    visitBinaryExpression(node: ts.BinaryExpression): string {
        const left = this.visitExpression(node.left);
        const right = this.visitExpression(node.right);
        const operator = this.getLuaOperator(node.operatorToken.kind);
        return `${left} ${operator} ${right}`;
    }

    visitIdentifier(node: ts.Identifier): string {
        return node.text;
    }

    visitLiteral(node: ts.LiteralExpression): string {
        if (node.kind === ts.SyntaxKind.StringLiteral) {
            return `"${node.text}"`;
        }
        return node.text;
    }

    visitObjectLiteral(node: ts.ObjectLiteralExpression): string {
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

    visitArrayLiteral(node: ts.ArrayLiteralExpression): string {
        const elements = node.elements.map(element => this.visitExpression(element)).join(', ');
        return `{ ${elements} }`;
    }

    visitElementAccess(node: ts.ElementAccessExpression): string {
        const expression = this.visitExpression(node.expression);
        const argument = this.visitExpression(node.argumentExpression);
        // Lua 数组索引从 1 开始，所以需要 +1
        return `${expression}[${argument} + 1]`;
    }

    visitPropertyAccess(node: ts.PropertyAccessExpression): string {
        const expression = this.visitExpression(node.expression);
        const name = node.name.text;
        // 特殊处理数组的 length 属性
        if (name === 'length') {
            return `#${expression}`;
        }
        return `${expression}.${name}`;
    }

    getLuaOperator(kind: ts.SyntaxKind): string {
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

    addLine(text: string) {
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
        let distDir = path.join(currentDir, noutDir);
        if (outDir){
            distDir=outDir
        }
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