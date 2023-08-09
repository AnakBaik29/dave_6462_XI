const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan kata pertama: ", (kalimat) => {
    rl.question("kata pertama akan digabungan dengan: " , (kalimat2) => {
        const kataGabungan = kalimat.concat(kalimat2);
        console.log(`hasil kalimat: ${kataGabungan} `);
        rl.close();
    });
});