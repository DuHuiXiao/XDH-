---
title: http-协议模块
date: 2024-11-14
category:
  - 前端
tag:
  - NodeJs
---

# HTTP 模块介绍 🌟

`http` 模块是 Node.js 的核心模块之一，用于构建基于 HTTP 协议的网络应用程序。通过 `http` 模块，可以创建服务器、处理客户端请求、发送响应等操作。

## 所有 API 及示例 📚

### 1. 创建服务器 🖥️

#### `http.createServer([requestListener])`
- **描述**：创建一个新的 HTTP 服务器实例。
- **示例**：
    ````javascript:my-docs/src/code/前端/NodeJS/模块/http-HTTP模块.md
    const http = require('http');

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n');
    });

    server.listen(3000, '127.0.0.1', () => {
        console.log('服务器运行在 http://127.0.0.1:3000/');
    });
    ````

### 2. 服务器事件监听 📡

#### `server.listen(port, hostname, backlog, callback)`
- **描述**：使服务器开始监听指定的端口和主机名。
- **示例**：
    ````javascript:my-docs/src/code/前端/NodeJS/模块/http-HTTP模块.md
    server.listen(3000, '127.0.0.1', () => {
        console.log('服务器已启动，监听端口 3000');
    });
    ````

#### `server.on(event, listener)`
- **描述**：为服务器添加事件监听器。
- **示例**：
    ````javascript:my-docs/src/code/前端/NodeJS/模块/http-HTTP模块.md
    server.on('connection', (socket) => {
        console.log('新连接已建立');
    });

    server.on('error', (err) => {
        console.error('服务器错误:', err);
    });
    ````

### 3. 处理请求和响应 📬

#### `req.method`
- **描述**：HTTP 请求的方法（如 GET, POST）。
- **示例**：
    ````javascript:my-docs/src/code/前端/NodeJS/模块/http-HTTP模块.md
    const server = http.createServer((req, res) => {
        if (req.method === 'GET') {
            // 处理 GET 请求
        } else if (req.method === 'POST') {
            // 处理 POST 请求
        }
        res.end('请求处理完成');
    });
    ````

#### `req.url`
- **描述**：请求的 URL。
- **示例**：
    ````javascript:my-docs/src/code/前端/NodeJS/模块/http-HTTP模块.md
    const server = http.createServer((req, res) => {
        console.log(`请求的 URL: ${req.url}`);
        res.end('URL 已记录');
    });
    ````

#### `res.writeHead(statusCode, headers)`
- **描述**：写入响应头。
- **示例**：
    ````javascript:my-docs/src/code/前端/NodeJS/模块/http-HTTP模块.md
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: '成功' }));
    ````

### 4. 客户端请求 HTTP 请求 🤝

#### `http.request(options, callback)`
- **描述**：发起一个 HTTP 请求。
- **示例**：
    ````javascript:my-docs/src/code/前端/NodeJS/模块/http-HTTP模块.md
    const options = {
        hostname: 'www.example.com',
        port: 80,
        path: '/',
        method: 'GET'
    };

    const req = http.request(options, (res) => {
        console.log(`状态码: ${res.statusCode}`);

        res.on('data', (chunk) => {
            console.log(`响应主体: ${chunk}`);
        });

        res.on('end', () => {
            console.log('响应已完成');
        });
    });

    req.on('error', (e) => {
        console.error(`请求遇到问题: ${e.message}`);
    });

    req.end();
    ````
    
#### `http.get(options, callback)`
- **描述**：发起一个 GET 请求，简化了 `http.request` 的调用。
- **示例**：
    ````javascript:my-docs/src/code/前端/NodeJS/模块/http-HTTP模块.md
    http.get('http://www.example.com', (res) => {
        const { statusCode } = res;
        const contentType = res.headers['content-type'];

        let error;
        if (statusCode !== 200) {
            error = new Error('请求失败。\n' +
                              `状态码: ${statusCode}`);
        }
        if (error) {
            console.error(error.message);
            // 消费响应数据以释放内存
            res.resume();
            return;
        }

        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => {
            try {
                const parsedData = JSON.parse(rawData);
                console.log(parsedData);
            } catch (e) {
                console.error(e.message);
            }
        });
    }).on('error', (e) => {
        console.error(`请求遇到问题: ${e.message}`);
    });
    ````

### 5. 响应处理 🎯

#### `res.statusCode`
- **描述**：设置或获取响应的状态码。
- **示例**：
    ````javascript:my-docs/src/code/前端/NodeJS/模块/http-HTTP模块.md
    res.statusCode = 404;
    res.end('未找到资源');
    ````

#### `res.setHeader(name, value)`
- **描述**：设置响应头。
- **示例**：
    ````javascript:my-docs/src/code/前端/NodeJS/模块/http-HTTP模块.md
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>你好，世界！</h1>');
    ````

#### `res.write(data)`
- **描述**：分块写入响应主体。
- **示例**：
    ````javascript:my-docs/src/code/前端/NodeJS/模块/http-HTTP模块.md
    res.write('<p>第一部分内容。</p>');
    res.write('<p>第二部分内容。</p>');
    res.end();
    ````

#### `res.end([data])`
- **描述**：结束响应，发送数据（如果有）。
- **示例**：
    ````javascript:my-docs/src/code/前端/NodeJS/模块/http-HTTP模块.md
    res.end('响应结束');
    ````

### 6. 请求数据处理 📥

#### `req.on('data', callback)`
- **描述**：接收请求数据块。
- **示例**：
    ````javascript:my-docs/src/code/前端/NodeJS/模块/http-HTTP模块.md
    let body = '';
    req.on('data', (chunk) => {
        body += chunk;
    });

    req.on('end', () => {
        console.log(`请求主体: ${body}`);
        res.end('数据接收完成');
    });
    ````

#### `req.on('end', callback)`
- **描述**：请求数据接收完毕。
- **示例**：
    如上例所示。

### 7. HTTPS 支持 🔒

虽然 `http` 模块主要用于 HTTP 协议，但结合 `https` 模块，可以实现 HTTPS 支持。

#### `https.createServer(options, requestListener)`
- **描述**：创建一个 HTTPS 服务器。
- **示例**：
    ````javascript:my-docs/src/code/前端/NodeJS/模块/http-HTTP模块.md
    const https = require('https');
    const fs = require('fs');

    const options = {
        key: fs.readFileSync('key.pem'),
        cert: fs.readFileSync('cert.pem')
    };

    const server = https.createServer(options, (req, res) => {
        res.writeHead(200);
        res.end('安全连接建立');
    });

    server.listen(443, () => {
        console.log('HTTPS 服务器已启动，监听端口 443');
    });
    ````