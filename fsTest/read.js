const fs = require("fs");
/* 读取文本文件*/
// 同步读取只能用try catch捕获异常
try {
    var data = fs.readFileSync('./files/text.txt', 'utf-8');
    console.log(data);
} catch (err) {
    // 出错了
    console.log('readFileSync', err);
}
/* 读取二进制文件*/
fs.readFile('./files/cloud.png', function (err, data) {
    if (err) {
        console.log('readFile(png)', err);
    } else {
        const str = data.toString('utf-8');
        // console.log('图片字符：', str);
        console.log('图片Buffer：', data);
    }
});
/* 读取文本文件*/
const readTxt = (uri) => {
    fs.readFile(uri, 'utf-8', function (err, data) {
        if (err) {
            console.log('readFile(txt)', err);
        } else {
            console.log('文本：', data);
        }
    });
}
// module.exports = readTxt;
exports.readTxt = readTxt