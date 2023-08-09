const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("string: ", (string) => {
    rl.question("masukan angka yang ingin dicari: ", (angkaCari) => {
        const indeksKata = string.indexOf(angkaCari);
        if (indeksKata !== -1) {
            console.log(`angka '${angkaCari}' diposisi indeks: ${indeksKata}`);
        } else {
            console.log(`angka '${angkaCari}' tidak ditemukan dalam kalimat`);
        }
        rl.close();
    });
});