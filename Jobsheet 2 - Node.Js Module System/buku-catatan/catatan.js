import fs from 'fs';
import chalk from 'chalk';

// fungsi ambilCatatan (default export)
const ambilCatatan = function() {
    return 'Ini catatan Radhia Aulia...';
};

//  fungsi untuk memuat catatan dari file JSON
const muatCatatan = () => {
    try {
        const dataBuffer = fs.readFileSync('catatan.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

//  fungsi untuk menyimpan catatan ke file JSON
const simpanCatatan = (catatan) => {
    const dataJSON = JSON.stringify(catatan);
    fs.writeFileSync('catatan.json', dataJSON);
};

//  tambah catatan
export const tambahCatatan = (judul, isi) => {
    const catatan = muatCatatan();
    const duplikat = catatan.find((note) => note.judul === judul);

    if (!duplikat) {
        catatan.push({ judul, isi });
        simpanCatatan(catatan);
        console.log(chalk.green.bold('Catatan baru ditambahkan!'));
    } else {
        console.log(chalk.red.bold('Judul catatan sudah digunakan!'));
    }
};

//  hapus catatan
export const hapusCatatan = (judul) => {
    const catatan = muatCatatan();
    const catatanBaru = catatan.filter((note) => note.judul !== judul);

    if (catatan.length > catatanBaru.length) {
        simpanCatatan(catatanBaru);
        console.log(chalk.green.bold(`Catatan "${judul}" berhasil dihapus!`));
    } else {
        console.log(chalk.red.bold(`Catatan "${judul}" tidak ditemukan.`));
    }
};

//  tampilkan semua catatan
export const listCatatan = () => {
    const catatan = muatCatatan();
    console.log(chalk.yellow.bold('Daftar Semua Catatan:'));
    catatan.forEach((note, i) => {
        console.log(chalk.cyan(`${i + 1}. ${note.judul}`));
    });
};

//  baca satu catatan
export const bacaCatatan = (judul) => {
    const catatan = muatCatatan();
    const note = catatan.find((note) => note.judul === judul);

    if (note) {
        console.log(chalk.green.bold(`Judul: ${note.judul}`));
        console.log(`Isi: ${note.isi}`);
    } else {
        console.log(chalk.red.bold(`Catatan "${judul}" tidak ditemukan.`));
    }
};

// ekspor default (sesuai app.js baris awal)
export default ambilCatatan;
