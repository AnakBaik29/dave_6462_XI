const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//charAt
rl.question("masukan sebuah kalimat: ", (inputString) => {
    rl.question("masukan indeks yang ingin kalian cek: ", (index) => {
        //  konversi nilai index ke type number
        index = Number (index);
        //  periksa apakah index valid (berada dalam rentang string)
        if (index >= 0 && index < inputString.length) {
            //gunakan method charAt untuk mendapatkan karakter pada index yang diminta
            const character = inputString.charAt(index);
            console.log(`karakter pada index ${index}: ${character}`);
        } else {
            console.log("index tidak valid");
        }
        rl.close();
    });
});