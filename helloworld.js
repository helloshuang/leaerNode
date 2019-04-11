const http = require("http");
const {
  greet,
  helloFn
} = require("./greet");

// const hostname = "127.0.0.1";
// const port = 1220;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello, World!\n");
// });

// server.listen(port, hostname, () => {
//   console.log(`服务器运行在 http://${hostname}:${port}/`);
// });

const name = 'C.S';
greet(name)
helloFn()
process.nextTick(function () {
  console.log('nextTick callback!');
});
process.on('exit', function (code) {
  console.log('about to exit with code: ' + code);
});