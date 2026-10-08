const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("1. Buku = 20000");
console.log("2. Pulpen = 10000");
console.log("3. Tas = 80000");
console.log("4. Sepatu = 150000");
console.log("5. Laptop = 5000000");

let total = 0;
let jumlah = 0;

function pilihBarang() {
    input.question(`Pilih barang ke-${jumlah + 1}: `, (pilih) => {

        switch (pilih) {
            case "1":
                total += 20000;
                break;
            case "2":
                total += 50000;
                break;
            case "3":
                total += 70000;
                break;
            case "4":
                total += 30000;
                break;
            case "5":
                total += 100000;
                break;
            default:
                console.log("Pilihan tidak tersedia");
        }

        jumlah++;

        if (jumlah < 3) {
            pilihBarang();
        } else {

            let diskon = 0;

            if (total >= 300000) {
                diskon = total * 0.10;
            } else if (total >= 100000) {
                diskon = total * 0.05;
            } else if (total >= 50000) {
                diskon = total * 0.03;
            }

            let totalBayar = total - diskon;

            console.log("\n=== HASIL PEMBELIAN ===");
            console.log("Total Belanja = Rp" + total);

            if (diskon > 0) {
                console.log("Diskon = Rp" + diskon);
                console.log("Total Bayar = Rp" + totalBayar);
            } else {
                console.log("Anda tidak mendapat diskon");
                console.log("Total Bayar = Rp" + totalBayar);
            }

            input.close();
        }
    });
}

pilihBarang();