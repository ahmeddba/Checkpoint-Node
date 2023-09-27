let fs = require("fs");
//Creating files
fs.writeFile('input.js', "let func = () => {console.log('Hello World!'); func();}", (err) => {
    err?
    console.log(err):
    console.log("File created successfully!");
    });

    //Reading files Asynchronously
    fs.readFile('input.js', (err, data) => {
        err?
        console.log(err):
        console.log(data);
    });

    //Reading files Synchronously
    let data = fs.readFileSync('input.js');
    console.log(data.toString());
