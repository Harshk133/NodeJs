const fs = require("fs/promises");

// fs.readFile('file.txt', 'utf8', (err, data)=>{
//     console.log(err, data)
// })

// const a = fs.readFileSync('file.txt')
// console.log(a.toString())
// let a = `
// <html>
//     <head>
//         <title>Document</title>
//     </head>
//     <body>
//         <h1>Hello world!</h1>
//     </body>
// </html>
// `;
// fs.writeFile('file2.txt', a, ()=>{
//     console.log("Data was written.")
// })

// fs.writeFile('file2.txt', "This is the data.", ()=>{
//     console.log("Data was written.")
// })

// ****This is not working****
// b = fs.writeFileSync('file2.txt', "this is a data2")
// console.log(b)

console.log("Finished reading file.");
