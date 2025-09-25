# 蛋仔派对PC编辑器-TypeScript

## 项目简介
基于 Node.js 开发的 TypeScript-Lua 转换工具，通过 TypeScript 的强类型特性提升蛋仔编辑器脚本开发效率，自动转换为编辑器可直接使用的 Lua 代码，并提供完整的 TS 类型化 API 声明。

## 前置依赖
- **Node.js**：本项目使用Node.js环境。
- **Git**：用于拉取仓库代码
- **代码编辑器**：推荐 VS Code（配合 TypeScript 插件）

## 快速开始

### 1. 拉取仓库
```bash
git clone [仓库地址]
cd [仓库名称]
```

### 2. 安装 Node.js
若未安装 Node.js，请前往官方网站下载并安装：  
[Node.js 官方下载页](https://nodejs.org/zh-cn/download/)

### 3. 安装项目依赖
在仓库根目录执行以下命令，安装项目所需依赖：
```bash
npm install
```

### 4. 编写 TypeScript 代码
在项目 `src/code` 文件夹下编辑 `main.ts` 或其他ts文件，使用 TypeScript 语法编写逻辑。


### 5. 编译/转换代码
- **更新代码后**：执行转换命令生成 Lua 结果（所有ts文件都转换）
  ```bash
  npm run dev
  ```

### 6. 获取输出结果
转换成功后，可在所设置的目录（默认dist）下获取结果。


## 注意事项
1. 本项目目前仅支持 TypeScript 基本语法（变量、函数、类、接口等），暂不支持高级特性（如装饰器、泛型复杂用法等）
2. 转换后的 Lua 代码需在蛋仔派对PC编辑器中测试，部分 API 调用需符合编辑器运行时规范
3. 类型声明基于现在API 整理，若后续 API 更新，需同步。
4. 转化逻辑是ai写的,本人不会AST抽象语法树🌳

