const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan kalimat: ", (kalimat) => {
    rl.question("masukan karakter terakhir yang ingin dicari: ", (kataCari) => {
        const IndeksKataTerakhir = kalimat.lastIndexOf(kataCari);
        if (IndeksKataTerakhir !== -1) {
            console.log(`karakter '${kataCari}' ditemukan pada indeks terakhir: '${IndeksKataTerakhir}'`);
        } else {
            console.log(`karakter '${kataCari}' tidak ditemukan.`);
        }
        rl.close();
    });
});