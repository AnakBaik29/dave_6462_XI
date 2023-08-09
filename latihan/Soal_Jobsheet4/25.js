const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan sebuah string: " , (kalimat) => {
    rl.question("masukan indeks awal: ", (startIndex) => {
        rl.question("masukan total ideks akhir: ", (endIndex) => {

startIndex = Number(startIndex);
endIndex = Number(endIndex);

const slicedString = kalimat.slice(startIndex, endIndex);
console.log(`hasil slice dari indeks ${startIndex} hingga ${endIndex}: ${slicedString}`);
rl.close();
        });
    });
});