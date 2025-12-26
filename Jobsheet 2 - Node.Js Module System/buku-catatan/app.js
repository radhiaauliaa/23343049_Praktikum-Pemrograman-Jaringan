import validator from 'validator';
import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { tambahCatatan, hapusCatatan, listCatatan, bacaCatatan } from './catatan.js';

// penggunaan validator
console.log('Ini catatan Radhia Aulia...');
console.log(validator.isURL('https://aulian.com'));

// latihan chalk
console.log(chalk.blue('print warna biru sukses'));
console.log(chalk.red.bold('ini teks merah dan tebal'));
console.log(chalk.bgGreen.black.bold('background hijau, teks hitam'));
console.log(chalk.yellow.bold('print warna kuning sukses'));
console.log(chalk.green('print warna hijau sukses'));

// konfigurasi yargs
yargs(hideBin(process.argv))
    .version('10.1.0')

  // perintah tambah
    .command({
        command: 'tambah',
        describe: 'tambah sebuah catatan baru',
        builder: {
            judul: {
                describe: 'Judul catatan',
                demandOption: true,
                type: 'string'
            },
            isi: {
                describe: 'Isi catatan',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            tambahCatatan(argv.judul, argv.isi)
        }
    })

  // perintah hapus
    .command({
        command: 'hapus',
        describe: 'hapus catatan',
        builder: {
            judul: {
                describe: 'Judul catatan yang ingin dihapus',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            hapusCatatan(argv.judul)
        }
    })

  // 🔹 perintah list: tampilkan semua catatan
    .command({
    command: 'list',
    describe: 'Menampilkan semua catatan',
    handler() {
        listCatatan()
    }
})

  // 🔹 perintah read: baca satu catatan berdasarkan judul
    .command({
        command: 'read',
        describe: 'Membaca satu catatan berdasarkan judul',
        builder: {
            judul: {
                describe: 'Judul catatan yang ingin dibaca',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            bacaCatatan(argv.judul)
        }
    })

    .parse()
