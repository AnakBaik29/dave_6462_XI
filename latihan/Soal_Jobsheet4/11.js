const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Nama anda siapa? ", (nama) => {
    rl.question("Warna kesukaan mu apa? " , (warna) => {
        const kalimat = (`${nama} sangat suka sekali warna ${warna}`)
        console.log(`Jadi ${kalimat} `);
        rl.close();
    });
});