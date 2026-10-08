const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let totalKalori = 0;

function tanya() {
    rl.question("Masukkan olahraga (lari/push-up/plank/selesai): ", (olahraga) => {

        if (olahraga.toLowerCase() === "selesai") {
            console.log(`Total kalori yang terbakar: ${totalKalori} kalori`);
            rl.close();
            return;
        }

        rl.question("Masukkan waktu (menit): ", (waktu) => {
            waktu = Number(waktu);
            let kalori = 0;

            if (olahraga.toLowerCase() === "lari") {
                kalori = (60 / 5) * waktu;
            } 
            else if (olahraga.toLowerCase() === "push-up") {
                kalori = (200 / 30) * waktu;
            } 
            else if (olahraga.toLowerCase() === "plank") {
                kalori = 5 * waktu;
            } 
            else {
                console.log("Olahraga tidak tersedia.");
                tanya();
                return;
            }

            totalKalori += kalori;
            console.log(`Kalori terbakar: ${kalori} kalori`);
            console.log(`Total sementara: ${totalKalori} kalori\n`);

            tanya();
        });
    });
}

tanya();