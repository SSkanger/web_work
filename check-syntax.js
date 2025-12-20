// 简单的语法测试脚本
const fs = require('fs');
const path = require('path');

// 读取JavaScript文件
const filePath = path.join(__dirname, 'js', 'stadium-booking.js');
const fileContent = fs.readFileSync(filePath, 'utf8');

// 检查括号匹配
function checkBrackets(code) {
    const stack = [];
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    
    for (let i = 0; i < code.length; i++) {
        const char = code[i];
        
        if (brackets[char]) {
            stack.push(char);
        } else if (Object.values(brackets).includes(char)) {
            if (stack.length === 0) {
                return { error: `未匹配的闭合括号: ${char} 在位置 ${i}` };
            }
            
            const lastOpen = stack.pop();
            if (brackets[lastOpen] !== char) {
                return { error: `括号不匹配: 期望 ${brackets[lastOpen]}, 找到 ${char} 在位置 ${i}` };
            }
        }
    }
    
    if (stack.length > 0) {
        return { error: `未闭合的括号: ${stack.join(', ')}` };
    }
    
    return { success: true };
}

// 检查引号匹配
function checkQuotes(code) {
    let inSingleQuote = false;
    let inDoubleQuote = false;
    let inTemplateLiteral = false;
    let escapeNext = false;
    
    for (let i = 0; i < code.length; i++) {
        const char = code[i];
        
        if (escapeNext) {
            escapeNext = false;
            continue;
        }
        
        if (char === '\\') {
            escapeNext = true;
            continue;
        }
        
        if (!inTemplateLiteral && !inDoubleQuote && char === "'") {
            inSingleQuote = !inSingleQuote;
        } else if (!inTemplateLiteral && !inSingleQuote && char === '"') {
            inDoubleQuote = !inDoubleQuote;
        } else if (!inSingleQuote && !inDoubleQuote && char === '`') {
            inTemplateLiteral = !inTemplateLiteral;
        }
    }
    
    if (inSingleQuote) {
        return { error: "未闭合的单引号" };
    }
    
    if (inDoubleQuote) {
        return { error: "未闭合的双引号" };
    }
    
    if (inTemplateLiteral) {
        return { error: "未闭合的模板字符串" };
    }
    
    return { success: true };
}

// 执行检查
console.log("检查括号匹配...");
const bracketResult = checkBrackets(fileContent);
if (!bracketResult.success) {
    console.error("括号检查失败:", bracketResult.error);
} else {
    console.log("括号检查通过！");
}

console.log("\n检查引号匹配...");
const quoteResult = checkQuotes(fileContent);
if (!quoteResult.success) {
    console.error("引号检查失败:", quoteResult.error);
} else {
    console.log("引号检查通过！");
}