const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("kalimat: ", (kalimat) => {
    rl.question("masukan kata yang ingin dicari: ", (kataCari) => {
        const indeksKata = kalimat.indexOf(kataCari);
        if (indeksKata !== -1) {
            console.log(`kata '${kataCari}' diposisi indeks: ${indeksKata}`);
        } else {
            console.log(`kata '${kataCari}' tidak ditemukan dalam kalimat`);
        }
        rl.close();
    });
});