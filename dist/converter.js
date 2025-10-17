"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsToLuaConverter = void 0;
const typescript_1 = __importDefault(require("typescript"));
const LuaInitCode = `local basic_types = require "tsbasic"
local Array = basic_types.Array
local String = basic_types.String
local Number = basic_types.Number
local Object = basic_types.Object\n`;
class TsToLuaConverter {
    constructor(basicTypeMethods = {}) {
        this.indentLevel = 0;
        this.currentFunction = null;
        this.currentClass = null;
        this.thisCaptureVar = null;
        this.thisCaptureStack = [];
        this.luaCode = '';
        this.importMap = new Map();
        this.interfaceMap = new Map();
        this.indentLevel = 0;
        this.currentFunction = null;
        this.luaCode = '';
        this.basicTypeMethods = basicTypeMethods;
    }
    convert(sourceFile) {
        this.luaCode = this.basicTypeMethods ? LuaInitCode : '';
        this.processNode(sourceFile);
        return this.luaCode;
    }
    processNode(node) {
        switch (node.kind) {
            case typescript_1.default.SyntaxKind.SourceFile:
                this.visitSourceFile(node);
                break;
            case typescript_1.default.SyntaxKind.ImportDeclaration:
                this.visitImportDeclaration(node);
                break;
            case typescript_1.default.SyntaxKind.InterfaceDeclaration:
                this.visitInterfaceDeclaration(node);
                break;
            case typescript_1.default.SyntaxKind.ClassDeclaration:
                this.visitClassDeclaration(node);
                break;
            case typescript_1.default.SyntaxKind.VariableStatement:
                this.visitVariableStatement(node);
                break;
            case typescript_1.default.SyntaxKind.FunctionDeclaration:
                this.visitFunctionDeclaration(node);
                break;
            case typescript_1.default.SyntaxKind.ArrowFunction:
                return this.visitArrowFunction(node);
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
            case typescript_1.default.SyntaxKind.ThisKeyword:
                return this.visitThisExpression(node);
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
            case typescript_1.default.SyntaxKind.FunctionExpression:
                return this.visitFunctionExpression(node);
            case typescript_1.default.SyntaxKind.NewExpression:
                return this.visitNewExpression(node);
            default:
                typescript_1.default.forEachChild(node, child => this.processNode(child));
        }
    }
    // ====================== 接口支持 ======================
    visitInterfaceDeclaration(node) {
        const interfaceName = node.name.text;
        const properties = [];
        // 收集接口属性
        node.members.forEach(member => {
            if (typescript_1.default.isPropertySignature(member)) {
                const name = member.name.getText();
                properties.push(name);
            }
        });
        // 将接口信息存储在映射中（不生成实际代码）
        this.interfaceMap.set(interfaceName, properties.join(','));
        this.addLine(`-- Interface: ${interfaceName}`);
    }
    visitNewExpression(node) {
        const expression = node.expression;
        const args = node.arguments?.map(arg => this.visitExpression(arg)).join(', ') || '';
        // 处理类实例化 (new MyClass())
        if (typescript_1.default.isIdentifier(expression)) {
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
        if (typescript_1.default.isCallExpression(expression)) {
            const constructorFunc = this.visitExpression(expression);
            return `(${constructorFunc})(${args})`;
        }
        // 处理属性访问实例化 (new this.MyClass())
        if (typescript_1.default.isPropertyAccessExpression(expression)) {
            const obj = this.visitExpression(expression.expression);
            const prop = expression.name.text;
            return `${obj}.${prop}.new(${args})`;
        }
        // 默认处理
        const constructor = this.visitExpression(expression);
        return `${constructor}(${args})`;
    }
    // ====================== 类支持 ======================
    visitClassDeclaration(node) {
        const className = node.name?.text || 'AnonymousClass';
        this.currentClass = className;
        // 处理继承
        const heritageClauses = node.heritageClauses;
        let parentClass = '';
        if (heritageClauses) {
            for (const clause of heritageClauses) {
                if (clause.token === typescript_1.default.SyntaxKind.ExtendsKeyword) {
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
            if (typescript_1.default.isPropertyDeclaration(member)) {
                this.visitClassProperty(member, className);
            }
            else if (typescript_1.default.isMethodDeclaration(member)) {
                this.visitMethodDeclaration(member, className);
            }
            else if (typescript_1.default.isConstructorDeclaration(member)) {
                this.visitConstructorDeclaration(member, className, parentClass);
            }
        });
        this.currentClass = null;
    }
    visitConstructorDeclaration(node, className, parentClass) {
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
    visitClassProperty(node, className) {
        const propName = node.name.getText();
        const initializer = node.initializer
            ? this.visitExpression(node.initializer)
            : 'nil';
        // 在构造函数中初始化属性
        this.addLine(`-- 属性: ${propName}`);
    }
    visitMethodDeclaration(node, className) {
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
    findSuperCall(node) {
        for (const statement of node.statements) {
            if (typescript_1.default.isExpressionStatement(statement)) {
                const expr = statement.expression;
                if (typescript_1.default.isCallExpression(expr) && expr.expression.kind === typescript_1.default.SyntaxKind.SuperKeyword) {
                    return expr;
                }
            }
        }
        return null;
    }
    // ====================== 箭头函数支持 ======================
    visitArrowFunction(node) {
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
        let body;
        if (typescript_1.default.isBlock(node.body)) {
            // 多行函数体
            const oldCode = this.luaCode;
            this.luaCode = '';
            this.indentLevel++;
            this.processNode(node.body);
            this.indentLevel--;
            body = this.luaCode;
            this.luaCode = oldCode;
        }
        else {
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
    visitThisExpression(node) {
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
    visitFunctionDeclaration(node) {
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
    visitCallExpression(node) {
        const expression = node.expression;
        // 处理方法调用 (obj.method())
        if (typescript_1.default.isPropertyAccessExpression(expression)) {
            const obj = this.visitExpression(expression.expression);
            let method = expression.name.text;
            // 检查是否是基础类型方法
            const type = this.getBasicTypeForMethod(method);
            if (type) {
                if (type === 'String' && method === 'repeat') {
                    method = 'rep'; //老六lua，居然把这玩意当保留字
                }
                const args = node.arguments.map(arg => this.visitExpression(arg)).join(', ');
                return `${type}.${method}(${obj}, ${args})`;
            }
            // 检查是否是方法调用（对象为表或类）
            if (typescript_1.default.isIdentifier(expression.expression) &&
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
        if (typescript_1.default.isIdentifier(expression) && this.basicTypeMethods[expression.text]) {
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
    getBasicTypeForMethod(method) {
        for (const type in this.basicTypeMethods) {
            if (this.basicTypeMethods[type].includes(method)) {
                return type;
            }
        }
        return null;
    }
    // ====================== import/require 支持 ======================
    visitImportDeclaration(node) {
        const moduleSpecifier = node.moduleSpecifier.getText().replace(/['"]/g, '');
        if (moduleSpecifier.includes('../types/')) {
            //这个无视
            return;
        }
        if (node.importClause) {
            // 默认导入 import React from 'react'
            if (node.importClause.name) {
                const defaultImport = node.importClause.name.text;
                this.importMap.set(defaultImport, moduleSpecifier);
                this.addLine(`local ${defaultImport} = require("${moduleSpecifier}")`);
            }
            // 命名空间导入 import * as React from 'react'
            if (node.importClause.namedBindings && typescript_1.default.isNamespaceImport(node.importClause.namedBindings)) {
                const namespaceImport = node.importClause.namedBindings.name.text;
                this.importMap.set(namespaceImport, moduleSpecifier);
                this.addLine(`local ${namespaceImport} = require("${moduleSpecifier}")`);
            }
            // 命名导入 import { Component } from 'react'
            if (node.importClause.namedBindings && typescript_1.default.isNamedImports(node.importClause.namedBindings)) {
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
    visitSourceFile(node) {
        typescript_1.default.forEachChild(node, child => this.processNode(child));
    }
    visitVariableStatement(node) {
        const declaration = node.declarationList.declarations[0];
        if (declaration) {
            const name = declaration.name.getText();
            const initializer = declaration.initializer
                ? this.visitExpression(declaration.initializer)
                : 'nil';
            this.addLine(`local ${name} = ${initializer}`);
        }
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
    visitFunctionExpression(node) {
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
        let body;
        if (typescript_1.default.isBlock(node.body)) {
            // 多行函数体
            const oldCode = this.luaCode;
            this.luaCode = '';
            this.indentLevel++;
            this.processNode(node.body);
            this.indentLevel--;
            body = this.luaCode;
            this.luaCode = oldCode;
        }
        else {
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
    visitExpression(node) {
        switch (node.kind) {
            case typescript_1.default.SyntaxKind.BinaryExpression:
                return this.visitBinaryExpression(node);
            case typescript_1.default.SyntaxKind.CallExpression:
                return this.visitCallExpression(node);
            case typescript_1.default.SyntaxKind.ThisKeyword:
                return this.visitThisExpression(node);
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
            case typescript_1.default.SyntaxKind.ArrowFunction:
                return this.visitArrowFunction(node);
            case typescript_1.default.SyntaxKind.FunctionExpression:
                return this.visitFunctionExpression(node);
            case typescript_1.default.SyntaxKind.NewExpression:
                return this.visitNewExpression(node);
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
            // 算术运算符
            case typescript_1.default.SyntaxKind.PlusToken: return '+';
            case typescript_1.default.SyntaxKind.MinusToken: return '-';
            case typescript_1.default.SyntaxKind.AsteriskToken: return '*';
            case typescript_1.default.SyntaxKind.SlashToken: return '/';
            case typescript_1.default.SyntaxKind.PercentToken: return '%';
            case typescript_1.default.SyntaxKind.AsteriskAsteriskToken: return '^'; // 幂运算 ** 在 Lua 中是 ^
            // 比较运算符
            case typescript_1.default.SyntaxKind.EqualsEqualsToken: return '==';
            case typescript_1.default.SyntaxKind.ExclamationEqualsToken: return '~=';
            case typescript_1.default.SyntaxKind.LessThanToken: return '<';
            case typescript_1.default.SyntaxKind.GreaterThanToken: return '>';
            case typescript_1.default.SyntaxKind.LessThanEqualsToken: return '<=';
            case typescript_1.default.SyntaxKind.GreaterThanEqualsToken: return '>=';
            // 逻辑运算符
            case typescript_1.default.SyntaxKind.AmpersandAmpersandToken: return 'and';
            case typescript_1.default.SyntaxKind.BarBarToken: return 'or';
            case typescript_1.default.SyntaxKind.ExclamationToken: return 'not';
            // 位运算符（Lua 5.3+ 支持）
            case typescript_1.default.SyntaxKind.AmpersandToken: return '&';
            case typescript_1.default.SyntaxKind.BarToken: return '|';
            case typescript_1.default.SyntaxKind.CaretToken: return '~'; // 按位异或
            case typescript_1.default.SyntaxKind.TildeToken: return '~'; // 按位非
            // 赋值运算符
            case typescript_1.default.SyntaxKind.EqualsToken: return '=';
            case typescript_1.default.SyntaxKind.PlusEqualsToken: return '=';
            case typescript_1.default.SyntaxKind.MinusEqualsToken: return '=';
            case typescript_1.default.SyntaxKind.AsteriskEqualsToken: return '=';
            case typescript_1.default.SyntaxKind.SlashEqualsToken: return '=';
            case typescript_1.default.SyntaxKind.PercentEqualsToken: return '=';
            case typescript_1.default.SyntaxKind.AsteriskAsteriskEqualsToken: return '='; // **=
            case typescript_1.default.SyntaxKind.AmpersandEqualsToken: return '=';
            case typescript_1.default.SyntaxKind.BarEqualsToken: return '=';
            case typescript_1.default.SyntaxKind.CaretEqualsToken: return '=';
            case typescript_1.default.SyntaxKind.LessThanLessThanEqualsToken: return '=';
            case typescript_1.default.SyntaxKind.GreaterThanGreaterThanEqualsToken: return '=';
            case typescript_1.default.SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken: return '=';
            // 其他运算符
            case typescript_1.default.SyntaxKind.QuestionQuestionToken: return 'or'; // 空值合并 ??
            case typescript_1.default.SyntaxKind.DotToken: return '.'; // 属性访问
            case typescript_1.default.SyntaxKind.CommaToken: return ','; // 逗号分隔
            // 移位运算符（Lua 5.3+ 支持）
            case typescript_1.default.SyntaxKind.LessThanLessThanToken: return '<<';
            case typescript_1.default.SyntaxKind.GreaterThanGreaterThanToken: return '>>';
            case typescript_1.default.SyntaxKind.GreaterThanGreaterThanGreaterThanToken: return '>>>';
            default:
                console.log(kind);
                return 'unknown';
        }
    }
    addLine(text) {
        this.luaCode += '    '.repeat(this.indentLevel) + text + '\n';
    }
}
exports.TsToLuaConverter = TsToLuaConverter;
