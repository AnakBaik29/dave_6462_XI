const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan kalimat: ", (kalimat) => {
    rl.question("masukan indeks yang mau diambil: ", (startIndex) => {
        rl.question("masukan jumlah karakter: ", (length) => {

startIndex = Number(startIndex);
length = Number(length);

const substringResult= kalimat.substr(startIndex, length);
console.log(`hasil substring dari indeks ${startIndex} dengan panjang ${length}: ${substringResult}`);
rl.close();
        });
    });
});