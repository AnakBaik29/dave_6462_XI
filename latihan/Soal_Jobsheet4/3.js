const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan kalimat : ", (inputString) => {
    console.log(`karakter : ${inputString.length} `);
rl.close();
});