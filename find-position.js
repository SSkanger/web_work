// 查找特定位置的字符
const fs = require('fs');
const path = require('path');

// 读取JavaScript文件
const filePath = path.join(__dirname, 'js', 'stadium-booking.js');
const fileContent = fs.readFileSync(filePath, 'utf8');

// 查找位置30563附近的字符
const position = 30563;
const start = Math.max(0, position - 50);
const end = Math.min(fileContent.length, position + 50);

console.log(`位置 ${position} 附近的字符:`);
console.log(fileContent.substring(start, end));
console.log(`\n位置 ${position} 的字符: "${fileContent[position]}"`);
console.log(`字符编码: ${fileContent.charCodeAt(position)}`);

// 查找该位置所在的行
const lines = fileContent.split('\n');
let currentPos = 0;
let lineNumber = 0;

for (let i = 0; i < lines.length; i++) {
    const lineLength = lines[i].length + 1; // +1 for newline
    if (currentPos <= position && position < currentPos + lineLength) {
        lineNumber = i + 1;
        console.log(`\n该字符位于第 ${lineNumber} 行:`);
        console.log(lines[i]);
        console.log(' '.repeat(position - currentPos) + '^');
        break;
    }
    currentPos += lineLength;
}