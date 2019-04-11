const hello = 'Hello';

const greet = (name) => {
    console.log(`${hello}，${name}！`);
}

const helloFn = () => {
    console.log(hello);
}

// module.exports = {
//     greet,
//     helloFn
// };
exports.greet = greet;
exports.helloFn = helloFn;