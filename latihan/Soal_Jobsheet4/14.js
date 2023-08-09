const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("kalimat: ", (kalimat) => {
    rl.question("masukan huruf yang ingin dicari: ", (kataCari) => {
        const indeksKata = kalimat.indexOf(kataCari);
        if (indeksKata !== -1) {
            console.log(`huruf '${kataCari}' ditemukan pertama kali pada indeks: ${indeksKata}`);
        } else {
            console.log(`huruf '${kataCari}' tidak ditemukan dalam kalimat`);
        }
        rl.close();
    });
});