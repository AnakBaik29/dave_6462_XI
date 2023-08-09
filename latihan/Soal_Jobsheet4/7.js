const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan kalimat : ", (inputString) => {
    rl.question("masukan indeks yang ingin di cek: ", (index) => {

        index = Number(index);

        if (index >= 0 && index < inputString.length) {

            const character = inputString.charAt(index);
            console.log(`karakter pada indeks ke-${index} adalah: ${character}`);
        } else {
            console.log("indeks tidak valid");
        }
        rl.close();
    });
});