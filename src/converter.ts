import fs from 'fs';
import path from 'path';
import ts from 'typescript';



interface BasicTypeMethods {
    [type: string]: string[];
}

const LuaInitCode=`local basic_types = require "tsbasic"
local Array = basic_types.Array
local String = basic_types.String
local Number = basic_types.Number
local Object = basic_types.Object\n`

class TsToLuaConverter {
    private indentLevel = 0;
    private currentFunction: { name: string, isArrow: boolean } | null = null;
    private currentClass: string | null = null;
    private thisCaptureVar: string | null = null;
    private thisCaptureStack: string[] = [];
    private luaCode = '';
    private importMap: Map<string, string> = new Map();
    private interfaceMap: Map<string, string> = new Map();
    private basicTypeMethods: BasicTypeMethods;

    constructor(basicTypeMethods: BasicTypeMethods={}) {
        this.indentLevel = 0;
        this.currentFunction = null;
        this.luaCode = '';
        this.basicTypeMethods = basicTypeMethods;
    }



    convert(sourceFile: ts.SourceFile): string {
        this.luaCode = this.basicTypeMethods?LuaInitCode:'';
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
            case ts.SyntaxKind.FunctionExpression:
                return this.visitFunctionExpression(node as ts.FunctionExpression);
            case ts.SyntaxKind.NewExpression:
                return this.visitNewExpression(node as ts.NewExpression);
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

    visitNewExpression(node: ts.NewExpression): string {
        const expression = node.expression;
        const args = node.arguments?.map(arg => this.visitExpression(arg)).join(', ') || '';

        // 处理类实例化 (new MyClass())
        if (ts.isIdentifier(expression)) {
            const className = expression.text;
            
            // 检查是否是基础类型
            if (this.basicTypeMethods[className]) {
                return `${className}(${args})`;
            }
            
            // 检查是否是导入的模块
            if (this.importMap.has(className)) {
                return `${className}(${args})`;
            }
            
            // 普通类实例化
            return `${className}(${args})`;
        }
        
        // 处理表达式实例化 (new (getConstructor())())
        if (ts.isCallExpression(expression)) {
            const constructorFunc = this.visitExpression(expression);
            return `(${constructorFunc})(${args})`;
        }
        
        // 处理属性访问实例化 (new this.MyClass())
        if (ts.isPropertyAccessExpression(expression)) {
            const obj = this.visitExpression(expression.expression);
            const prop = expression.name.text;
            return `${obj}.${prop}.new(${args})`;
        }
        
        // 默认处理
        const constructor = this.visitExpression(expression);
        return `${constructor}(${args})`;
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
                this.addLine(`self.super = ${parentClass}.new(${args})`);
                this.addLine(`setmetatable(self, {__index = self.super})`);
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

    // 修改调用表达式处理
    visitCallExpression(node: ts.CallExpression): string {
        const expression = node.expression;
        
        // 处理方法调用 (obj.method())
        if (ts.isPropertyAccessExpression(expression)) {
            const obj = this.visitExpression(expression.expression);
            let method = expression.name.text;
            
            // 检查是否是基础类型方法
            const type = this.getBasicTypeForMethod(method);
            if (type) {
                if (type === 'String' && method === 'repeat') {
                    method = 'rep';//老六lua，居然把这玩意当保留字
                }
                const args = node.arguments.map(arg => this.visitExpression(arg)).join(', ');
                return `${type}.${method}(${obj}, ${args})`;
            }
            
            // 检查是否是方法调用（对象为表或类）
            if (ts.isIdentifier(expression.expression) && 
                (this.importMap.has(expression.expression.text) || 
                 this.currentClass === expression.expression.text)) {
                const args = node.arguments.map(arg => this.visitExpression(arg)).join(', ');
                return `${obj}:${method}(${args})`;
            }
            
            // 普通方法调用
            const args = node.arguments.map(arg => this.visitExpression(arg)).join(', ');
            return `${obj}.${method}(${args})`;
        }
        
        // 处理静态方法调用 (Type.method())
        if (ts.isIdentifier(expression) && this.basicTypeMethods[expression.text]) {
            const type = expression.text;
            const method = expression.text; // 静态方法调用没有属性访问
            const args = node.arguments.map(arg => this.visitExpression(arg)).join(', ');
            return `${type}.${method}(${args})`;
        }

        
        
        // 处理普通函数调用
        const func = this.visitExpression(node.expression);
        const args = node.arguments.map(arg => this.visitExpression(arg)).join(', ');
        return `${func}(${args})`;
    }
    
    // 获取方法所属的基础类型
    private getBasicTypeForMethod(method: string): string | null {
        for (const type in this.basicTypeMethods) {
            if (this.basicTypeMethods[type].includes(method)) {
                return type;
            }
        }
        return null;
    }

    // ====================== import/require 支持 ======================
    visitImportDeclaration(node: ts.ImportDeclaration) {
        const moduleSpecifier = node.moduleSpecifier.getText().replace(/['"]/g, '');
        if (moduleSpecifier.includes('../types/')){
            //这个无视
            return
        }
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

    visitFunctionExpression(node: ts.FunctionExpression): string {
        const oldFunctionContext = this.currentFunction;
        this.currentFunction = { name: 'anonymous', isArrow: false };
        
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
            case ts.SyntaxKind.FunctionExpression: 
                return this.visitFunctionExpression(node as ts.FunctionExpression);
             case ts.SyntaxKind.NewExpression:
                return this.visitNewExpression(node as ts.NewExpression);
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
            
        // 算术运算符
        case ts.SyntaxKind.PlusToken: return '+';
        case ts.SyntaxKind.MinusToken: return '-';
        case ts.SyntaxKind.AsteriskToken: return '*';
        case ts.SyntaxKind.SlashToken: return '/';
        case ts.SyntaxKind.PercentToken: return '%';
        case ts.SyntaxKind.AsteriskAsteriskToken: return '^'; // 幂运算 ** 在 Lua 中是 ^
        
        // 比较运算符
        case ts.SyntaxKind.EqualsEqualsToken: return '==';
        case ts.SyntaxKind.ExclamationEqualsToken: return '~=';
        case ts.SyntaxKind.LessThanToken: return '<';
        case ts.SyntaxKind.GreaterThanToken: return '>';
        case ts.SyntaxKind.LessThanEqualsToken: return '<=';
        case ts.SyntaxKind.GreaterThanEqualsToken: return '>=';
        
        // 逻辑运算符
        case ts.SyntaxKind.AmpersandAmpersandToken: return 'and';
        case ts.SyntaxKind.BarBarToken: return 'or';
        case ts.SyntaxKind.ExclamationToken: return 'not';
        
        // 位运算符（Lua 5.3+ 支持）
        case ts.SyntaxKind.AmpersandToken: return '&';
        case ts.SyntaxKind.BarToken: return '|';
        case ts.SyntaxKind.CaretToken: return '~'; // 按位异或
        case ts.SyntaxKind.TildeToken: return '~'; // 按位非
        
        // 赋值运算符
        case ts.SyntaxKind.EqualsToken: return '=';
        case ts.SyntaxKind.PlusEqualsToken: return '=';
        case ts.SyntaxKind.MinusEqualsToken: return '=';
        case ts.SyntaxKind.AsteriskEqualsToken: return '=';
        case ts.SyntaxKind.SlashEqualsToken: return '=';
        case ts.SyntaxKind.PercentEqualsToken: return '=';
        case ts.SyntaxKind.AsteriskAsteriskEqualsToken: return '='; // **=
        case ts.SyntaxKind.AmpersandEqualsToken: return '=';
        case ts.SyntaxKind.BarEqualsToken: return '=';
        case ts.SyntaxKind.CaretEqualsToken: return '=';
        case ts.SyntaxKind.LessThanLessThanEqualsToken: return '=';
        case ts.SyntaxKind.GreaterThanGreaterThanEqualsToken: return '=';
        case ts.SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken: return '=';
        
        // 其他运算符
        case ts.SyntaxKind.QuestionQuestionToken: return 'or'; // 空值合并 ??
        
        case ts.SyntaxKind.DotToken: return '.'; // 属性访问
        case ts.SyntaxKind.CommaToken: return ','; // 逗号分隔
        
        // 移位运算符（Lua 5.3+ 支持）
        case ts.SyntaxKind.LessThanLessThanToken: return '<<';
        case ts.SyntaxKind.GreaterThanGreaterThanToken: return '>>';
        case ts.SyntaxKind.GreaterThanGreaterThanGreaterThanToken: return '>>>';
        
        
        
            default: 
                console.log(kind)
                return 'unknown';
        }
    }

    addLine(text: string) {
        this.luaCode += '    '.repeat(this.indentLevel) + text + '\n';
    }
}



export {TsToLuaConverter,BasicTypeMethods} ;