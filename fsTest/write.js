const fs = require("fs");
const path = require("path");
// 绝对路径, 用相对路径会导致 运行位置不同找不到文件
// path.resolve(__dirname, '../public');
const { readTxt } = require("./read");
const uri = path.resolve(__dirname, '../files/text.txt');
const addTxt = '海鸟和鱼相爱，只是一场意外....';

fs.writeFile(uri, addTxt, function (err) {
    if(err){
        console.log('write fail', err)
    }else {
        readTxt(uri);
    }
})