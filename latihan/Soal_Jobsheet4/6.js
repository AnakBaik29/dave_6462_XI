const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan kalimat: ", (kalimat) => {
    rl.question("masukan karakter yang ingin dicari: ", (kataCari) => {
        const indeksKata = kalimat.indexOf(kataCari);
        if (indeksKata !== -1) {
            console.log(`karakter '${kataCari}' ditemukan pada indeks: ${indeksKata}`);
        } else {
            console.log(`karakter '${kataCari}' tidak ditemukan dalam kalimat`);
        }
        rl.close();
    });
});