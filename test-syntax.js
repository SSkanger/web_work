// 简单的语法测试脚本
const fs = require('fs');
const path = require('path');

// 读取JavaScript文件
const filePath = path.join(__dirname, 'js', 'stadium-booking.js');
const fileContent = fs.readFileSync(filePath, 'utf8');

try {
    // 尝试解析JavaScript代码
    new Function(fileContent);
    console.log('JavaScript语法检查通过！');
} catch (error) {
    console.error('JavaScript语法错误：', error.message);
    console.error('错误位置：', error.stack);
}