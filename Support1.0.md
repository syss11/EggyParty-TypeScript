# 以下是当前转换器不支持的 TypeScript 特性列表，以及转换限制说明：

## 部分支持特性

1. 类与接口

• ⚠️ 接口：仅作为类型注释，不生成实际代码(本来就是ts特性)

• ⚠️ 抽象类：不支持

• ⚠️ 静态成员：部分支持

• ⚠️ 访问修饰符 (public, private, protected)：忽略

• ⚠️ 只读属性 (readonly)：忽略

2. 类型系统

• ⚠️ 类型注解：转换为注释

• ⚠️ 类型推断：不保留

• ⚠️ 联合类型：不支持

• ⚠️ 交叉类型：不支持

• ⚠️ 类型别名：不支持

3. 高级特性

• ⚠️ 装饰器：不支持

• ⚠️ 命名空间：不支持

• ⚠️ 混入 (mixins)：不支持

• ⚠️ 条件类型：不支持

• ⚠️ 映射类型：不支持

4. 异步编程

• ⚠️ async/await：不支持

• ⚠️ Promise：不支持

• ⚠️ 生成器函数：不支持

## 不支持特性

1. 类型系统

• ❌ 泛型 (Generics)

• ❌ 枚举 (enum)

• ❌ 类型守卫 (is)

• ❌ 类型查询 (keyof)

• ❌ 类型断言 (as)

2. 高级面向对象

• ❌ 接口继承

• ❌ 接口实现检查

• ❌ 抽象方法

• ❌ 属性存取器 (get/set)

• ❌ 参数属性 (constructor(public x: number))

3. 元编程特性

• ❌ 装饰器 (@decorator)

• ❌ 反射元数据

4. 异步和并发

• ❌ async/await

• ❌ Promise

• ❌ Generator/yield

• ❌ Web Workers

5. 其他

• ❌ JSX/TSX

• ❌ 三斜线指令 (///)

• ❌ 类型导入 (import type)

• ❌ 常量枚举 (const enum)

• ❌ 命名空间合并

四、转换限制说明

1. 类型系统限制

• 所有类型注解在转换过程中会被移除或转换为注释

• 接口仅作为文档注释保留，不生成实际代码结构

• 泛型会被擦除，转换为具体类型或 any

2. 类与对象限制

• 不支持多重继承(byd,ts本来就不能多继承,ai在想什么?)

• 不支持静态属性初始化

• 不支持私有成员（所有成员都是公共的）

• 不支持参数属性简写

3. 函数限制

• 不支持函数重载

• 不支持可选参数和默认参数的类型注解

• 不支持剩余参数的类型注解

4. 异步编程限制

• 所有异步代码会被转换为同步代码

• Promise 链会被展平

• async/await 会被转换为回调风格

5. 模块系统限制

• 仅支持相对路径导入

• 不支持动态导入 (import())

• 不支持重新导出 (export * from)

6. 其他限制

• 不支持 TypeScript 内置工具类型 (Partial, Pick 等)

• 不支持条件类型

• 不支持模板字面量类型

• 不支持 keyof 和 typeof 类型操作符

六、示例对比

支持的类定义

class Point {
    x: number;
    y: number;
    
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    
    move(dx: number, dy: number) {
        this.x += dx;
        this.y += dy;
    }
}


不支持的类特性

// 不支持抽象类
abstract class Shape {
    // 不支持抽象方法
    abstract area(): number;
    
    // 不支持参数属性
    constructor(protected color: string) {}
    
    // 不支持存取器
    get displayColor() {
        return this.color;
    }
}

// 不支持泛型
class Box<T> {
    constructor(public content: T) {}
}

