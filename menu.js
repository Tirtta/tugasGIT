// menu.js

// Import fungsi kalkulator dari file rumus.js
import { kalkulator } from './rumus.js'; 

// Import modul readline untuk mendapatkan input dari pengguna
import * as readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  console.log("Kalkulator Sederhana");

  // Mendapatkan input angka pertama
  const inputAngka1 = await new Promise(resolve => {
    rl.question('Masukkan angka pertama: ', answer => {
      resolve(parseFloat(answer)); // Mengubah input string ke float
    });
  });

  // Mendapatkan input operator
  const operator = await new Promise(resolve => {
    rl.question('Masukkan operator (+, -, *, /): ', answer => {
      resolve(answer);
    });
  });

  // Mendapatkan input angka kedua
  const inputAngka2 = await new Promise(resolve => {
    rl.question('Masukkan angka kedua: ', answer => {
      resolve(parseFloat(answer)); // Mengubah input string ke float
    });
  });

  // Memanggil fungsi kalkulator dan menampilkan hasilnya
  const hasil = kalkulator(inputAngka1, inputAngka2, operator);
  console.log(`Hasil: ${hasil}`);

  // Menutup interface readline
  rl.close();
}

main(); // Panggil fungsi main untuk memulai program