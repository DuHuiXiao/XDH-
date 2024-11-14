---
title: fs-文件模块
date: 2024-11-14
category:
  - 前端
tag:
  - NodeJs
---

# fs 模块介绍 🌟

`fs` 模块是 Node.js 的核心模块之一，提供了与文件系统进行交互的 API。通过 `fs` 模块，可以执行文件的读取、写入、删除等操作。

## 所有 API 及示例 📚

### 1. 文件读取 📖

#### `fs.readFile(path, options, callback)`
- **描述**：异步读取文件内容。
- **示例**：
    ```javascript
    const fs = require('fs');
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data); // 输出文件内容
    });
    ```

#### `fs.readFileSync(path, options)`
- **描述**：同步读取文件内容。
- **示例**：
    ```javascript
    const data = fs.readFileSync('example.txt', 'utf8');
    console.log(data); // 输出文件内容
    ```

### 2. 文件写入 ✍️

#### `fs.writeFile(file, data, options, callback)`
- **描述**：异步写入文件内容，如果文件不存在则创建文件。
- **示例**：
    ```javascript
    fs.writeFile('example.txt', 'Hello World!', (err) => {
        if (err) throw err;
        console.log('文件已保存!'); // 文件保存成功
    });
    ```

#### `fs.writeFileSync(file, data, options)`
- **描述**：同步写入文件内容。
- **示例**：
    ```javascript
    fs.writeFileSync('example.txt', 'Hello World!');
    console.log('文件已保存!'); // 文件保存成功
    ```

### 3. 文件删除 🗑️

#### `fs.unlink(path, callback)`
- **描述**：异步删除文件。
- **示例**：
    ```javascript
    fs.unlink('example.txt', (err) => {
        if (err) throw err;
        console.log('文件已删除!'); // 文件删除成功
    });
    ```

#### `fs.unlinkSync(path)`
- **描述**：同步删除文件。
- **示例**：
    ```javascript
    fs.unlinkSync('example.txt');
    console.log('文件已删除!'); // 文件删除成功
    ```

### 4. 文件信息 ℹ️

#### `fs.stat(path, callback)`
- **描述**：获取文件的状态信息。
- **示例**：
    ```javascript
    fs.stat('example.txt', (err, stats) => {
        if (err) throw err;
        console.log(stats); // 输出文件状态信息
    });
    ```

#### `fs.statSync(path)`
- **描述**：同步获取文件的状态信息。
- **示例**：
    ```javascript
    const stats = fs.statSync('example.txt');
    console.log(stats); // 输出文件状态信息
    ```

### 5. 目录操作 🗂️

#### `fs.mkdir(path, options, callback)`
- **描述**：异步创建目录。
- **示例**：
    ```javascript
    fs.mkdir('newDir', { recursive: true }, (err) => {
        if (err) throw err;
        console.log('目录已创建!');
    });
    ```

#### `fs.mkdirSync(path, options)`
- **描述**：同步创建目录。
- **示例**：
    ```javascript
    fs.mkdirSync('newDir', { recursive: true });
    console.log('目录已创建!');
    ```

#### `fs.readdir(path, options, callback)`
- **描述**：异步读取目录内容。
- **示例**：
    ```javascript
    fs.readdir('someDir', (err, files) => {
        if (err) throw err;
        console.log(files); // 输出目录中的文件
    });
    ```

#### `fs.readdirSync(path, options)`
- **描述**：同步读取目录内容。
- **示例**：
    ```javascript
    const files = fs.readdirSync('someDir');
    console.log(files); // 输出目录中的文件
    ```

### 6. 文件流 📄

#### `fs.createReadStream(path, options)`
- **描述**：创建可读流，用于读取文件。
- **示例**：
    ```javascript
    const readStream = fs.createReadStream('example.txt');
    readStream.on('data', (chunk) => {
        console.log(chunk.toString()); // 输出文件内容
    });
    ```

#### `fs.createWriteStream(path, options)`
- **描述**：创建可写流，用于写入文件。
- **示例**：
    ```javascript
    const writeStream = fs.createWriteStream('example.txt');
    writeStream.write('Hello World!');
    writeStream.end();
    ```

### 7. 文件复制 📂

#### `fs.copyFile(src, dest, callback)`
- **描述**：异步复制文件。
- **示例**：
    ```javascript
    fs.copyFile('source.txt', 'destination.txt', (err) => {
        if (err) throw err;
        console.log('文件已复制!');
    });
    ```

#### `fs.copyFileSync(src, dest)`
- **描述**：同步复制文件。
- **示例**：
    ```javascript
    fs.copyFileSync('source.txt', 'destination.txt');
    console.log('文件已复制!');
    ```

### 8. 文件监听 👀

#### `fs.watch(filename, options, listener)`
- **描述**：监视文件或目录的变化。
- **示例**：
    ```javascript
    fs.watch('example.txt', (eventType, filename) => {
        if (filename) {
            console.log(`${filename} 文件发生了变化: ${eventType}`);
        }
    });
    ```