const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan kalimat untuk digabung:  ", (kalimat) => {
    rl.question("Kata untuk digabungnya: " , (kata) => {
        const kalimatGabungan = kalimat.concat(kata);
        console.log(`hasil kalimat: ${kalimatGabungan} `);
        rl.close();
    });
});