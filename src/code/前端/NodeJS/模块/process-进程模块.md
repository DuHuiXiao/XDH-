---
title: process-进程模块
date: 2024-11-14
category:
  - 前端
tag:
  - NodeJs
---

# Process 模块介绍 🌟

`process` 模块是 Node.js 的核心模块之一，提供了与当前 Node.js 进程相关的 API。通过 `process` 模块，可以获取环境信息、控制进程的退出、监听事件等操作。

## 所有 API 及示例 📚

### 1. 进程信息 ℹ️

#### `process.argv`
- **描述**：一个数组，包含启动 Node.js 进程时的命令行参数。
- **示例**：
    ```javascript:my-docs/src/code/前端/NodeJS/模块/process-Process模块.md
    // 假设运行命令: node app.js foo bar
    console.log(process.argv);
    // 输出: ['node', 'app.js', 'foo', 'bar']
    ```

#### `process.env`
- **描述**：包含用户环境的对象，可以访问和设置环境变量。
- **示例**：
    ```javascript:my-docs/src/code/前端/NodeJS/模块/process-Process模块.md
    console.log(process.env.PATH); // 输出 PATH 环境变量

    // 设置环境变量
    process.env.NODE_ENV = 'production';
    console.log(process.env.NODE_ENV); // 输出 'production'
    ```

### 2. 控制进程退出 🛑

#### `process.exit([code])`
- **描述**：退出当前进程，`code` 参数表示退出码，默认是 0。
- **示例**：
    ```javascript:my-docs/src/code/前端/NodeJS/模块/process-Process模块.md
    if (someError) {
        console.error('发生错误，进程即将退出。');
        process.exit(1);
    }
    ```

#### `process.abort()`
- **描述**：立即中止 Node.js 进程，生成一个核心转储（core dump）。
- **示例**：
    ```javascript:my-docs/src/code/前端/NodeJS/模块/process-Process模块.md
    // 在调试某些严重错误时使用
    process.abort();
    ```

### 3. 进程事件监听 📡

#### `process.on(event, listener)`
- **描述**：为进程添加事件监听器。
- **示例**：
    ```javascript:my-docs/src/code/前端/NodeJS/模块/process-Process模块.md
    // 监听未捕获的异常
    process.on('uncaughtException', (err) => {
        console.error('未捕获的异常:', err);
        process.exit(1);
    });

    // 监听进程即将退出
    process.on('exit', (code) => {
        console.log(`进程即将退出，退出码: ${code}`);
    });
    ```

#### 要监听的常见事件：
- `exit`：进程将要退出时触发。
- `uncaughtException`：未捕获的异常触发。
- `SIGINT`：收到中断信号（如 Ctrl+C）时触发。
- `SIGTERM`：收到终止信号时触发。

### 4. 标准输入/输出流 🖥️

#### `process.stdin`
- **描述**：可读的标准输入流。
- **示例**：
    ```javascript:my-docs/src/code/前端/NodeJS/模块/process-Process模块.md
    process.stdin.on('data', (chunk) => {
        console.log(`输入的数据: ${chunk}`);
    });

    process.stdin.resume();
    ```

#### `process.stdout`
- **描述**：可写的标准输出流。
- **示例**：
    ```javascript:my-docs/src/code/前端/NodeJS/模块/process-Process模块.md
    process.stdout.write('Hello, World!\n');
    ```

#### `process.stderr`
- **描述**：可写的标准错误流。
- **示例**：
    ```javascript:my-docs/src/code/前端/NodeJS/模块/process-Process模块.md
    process.stderr.write('错误信息\n');
    ```

### 5. 进程信息获取 🔍

#### `process.cwd()`
- **描述**：返回 Node.js 进程的当前工作目录。
- **示例**：
    ```javascript:my-docs/src/code/前端/NodeJS/模块/process-Process模块.md
    console.log('当前工作目录:', process.cwd());
    ```

#### `process.chdir(directory)`
- **描述**：改变 Node.js 进程的当前工作目录。
- **示例**：
    ```javascript:my-docs/src/code/前端/NodeJS/模块/process-Process模块.md
    process.chdir('/path/to/directory');
    console.log('当前工作目录已更改为:', process.cwd());
    ```

#### `process.version`
- **描述**：获取 Node.js 的版本号。
- **示例**：
    ```javascript:my-docs/src/code/前端/NodeJS/模块/process-Process模块.md
    console.log('Node.js 版本:', process.version);
    ```

#### `process.platform`
- **描述**：获取 Node.js 进程运行的操作系统平台。
- **示例**：
    ```javascript:my-docs/src/code/前端/NodeJS/模块/process-Process模块.md
    console.log('操作系统平台:', process.platform);
    ```

### 6. 性能与资源使用 📊

#### `process.memoryUsage()`
- **描述**：返回一个对象，包含 Node.js 进程的内存使用情况。
- **示例**：
    ```javascript:my-docs/src/code/前端/NodeJS/模块/process-Process模块.md
    const memoryUsage = process.memoryUsage();
    console.log('内存使用情况:', memoryUsage);
    ```

#### `process.uptime()`
- **描述**：返回 Node.js 进程已经运行的秒数。
- **示例**：
    ```javascript:my-docs/src/code/前端/NodeJS/模块/process-Process模块.md
    console.log('进程运行时间:', process.uptime(), '秒');
    ```

### 7. 进程间通信 🛠️

#### `process.send(message[, sendHandle])`
- **描述**：用于在通过 `child_process` 模块创建的子进程中发送消息到父进程。（仅在子进程中可用）
- **示例**：
    ```javascript:my-docs/src/code/前端/NodeJS/模块/process-Process模块.md
    if (process.send) {
        process.send({ msg: '子进程消息' });
    }
    ```

#### `process.on('message', callback)`
- **描述**：监听来自父进程的消息。（仅在子进程中可用）
- **示例**：
    ```javascript:my-docs/src/code/前端/NodeJS/模块/process-Process模块.md
    process.on('message', (message) => {
        console.log('收到父进程的消息:', message);
    });
    ```

### 8. 执行时间控制 ⏱️

#### `process.hrtime([time])`
- **描述**：返回一个高分辨率的实时时间，通常用于性能测量。
- **示例**：
    ```javascript:my-docs/src/code/前端/NodeJS/模块/process-Process模块.md
    const startTime = process.hrtime();
    // 执行一些操作
    const diff = process.hrtime(startTime);
    console.log(`操作耗时: ${diff[0]} 秒 和 ${diff[1]} 纳秒`);
    ```

#### `process.nextTick(callback)`
- **描述**：在当前操作完成后，尽快执行回调函数。
- **示例**：
    ```javascript:my-docs/src/code/前端/NodeJS/模块/process-Process模块.md
    process.nextTick(() => {
        console.log('nextTick 回调');
    });
    ```

### 9. 环境变量与配置信息 🌐

#### `process.env.NODE_ENV`
- **描述**：通常用于区分开发环境和生产环境。
- **示例**：
    ```javascript:my-docs/src/code/前端/NodeJS/模块/process-Process模块.md
    if (process.env.NODE_ENV === 'production') {
        // 生产环境配置
    } else {
        // 开发环境配置
    }
    ```

### 10. 其他实用功能 🚀

#### `process.title`
- **描述**：获取或设置进程的标题，这会在系统进程列表中显示。
- **示例**：
    ```javascript:my-docs/src/code/前端/NodeJS/模块/process-Process模块.md
    console.log('默认进程标题:', process.title);
    process.title = 'my-node-app';
    console.log('更改后的进程标题:', process.title);
    ```

#### `process.release`
- **描述**：关于 Node.js 引擎的详细信息。
- **示例**：
    ```javascript:my-docs/src/code/前端/NodeJS/模块/process-Process模块.md
    console.log('Node.js 版本信息:', process.release);
    ```

#### `process.sendHandle`
- **描述**：发送给当前进程的句柄（仅在子进程中可用）。
- **示例**：
    ```javascript:my-docs/src/code/前端/NodeJS/模块/process-Process模块.md
    // 在子进程中接收句柄
    process.on('message', (msg, handle) => {
        if (handle) {
            console.log('收到的句柄:', handle);
        }
    });
    ```
