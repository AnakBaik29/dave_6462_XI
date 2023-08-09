const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan sebuah string: " , (kata) => {
    const kalimatLower = kata.toLowerCase();
    console.log(`hasil string dalam huruf kecil: ${kalimatLower}`);
rl.close();
});