<div align="center">

  <h1>Praktikum Pemrograman Jaringan</h1>

  <p align="center">
    Repository ini dibuat sebagai tempat pengumpulan seluruh <b>Jobsheet Praktikum Pemrograman Jaringan
  </p>

  <p>
    <img src="https://img.shields.io/badge/Runtime-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
    <img src="https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
    <img src="https://img.shields.io/badge/Framework-Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
    <img src="https://img.shields.io/badge/Version_Control-GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>
  </p>

</div>

<hr>

## 👤 Identitas Mahasiswa

<table border="1" cellpadding="8" cellspacing="0">
  <tr>
    <td><strong>Nama</strong></td>
    <td>Radhia Aulia Nisa</td>
  </tr>
  <tr>
    <td><strong>NIM</strong></td>
    <td>23343049</td>
  </tr>
  <tr>
    <td><strong>Program Studi</strong></td>
    <td>Informatika</td>
  </tr>
  <tr>
    <td><strong>Universitas</strong></td>
    <td>Universitas Negeri Padang</td>
  </tr>
  <tr>
    <td><strong>Kelas</strong></td>
    <td>INF1.62.5010</td>
  </tr>
  <tr>
    <td><strong>Dosen Pengampu</strong></td>
    <td>Randi Proska Sandra, S.Pd., M.Sc.</td>
  </tr>
</table>

<hr>

<!-- <h2>Tentang Repository</h2> -->

## 📂 Deskripsi
<p align="justify">
Repository ini berisi kumpulan <strong>jobsheet praktikum</strong> yang dikerjakan selama perkuliahan mata kuliah <strong>Pemrograman Jaringan</strong>.
Setiap jobsheet disusun untuk memperkenalkan konsep jaringan secara progresif,
mulai dari pengenalan dasar Node.js hingga implementasi komunikasi
<strong>real-time</strong> berbasis socket.
</p>

---

## Daftar Jobsheet Praktikum

> Klik salah satu jobsheet di bawah ini untuk melihat rangkuman materi.

| **Jobsheet** | **Rangkuman** |
|:--:|:----------------|:----------------|
| **Jobsheet 1 – Pengantar Node.js** | [Lihat Rangkuman](#-jobsheet-1--pengantar-nodejs) |
| **Jobsheet 2 – JavaScript Essentials** | [Lihat Rangkuman](#-jobsheet-2--javascript-essentials) |
| **Jobsheet 3 – Module System & Command Line Arguments** | [Lihat Rangkuman](#-jobsheet-3--module-system--command-line-arguments) |
| **Jobsheet 4 – HTTP Request and API** | [Lihat Rangkuman](#-jobsheet-4--http-request-and-api) |
| **Jobsheet 5 – Web Server dan Express.js** | [Lihat Rangkuman](#-jobsheet-5--web-server-dan-expressjs) |
| **Jobsheet 6 – JSON HTTP Endpoints** | [Lihat Rangkuman](#-jobsheet-6--json-http-endpoints) |
| **Jobsheet 7 – Version Control, Git and App Deployment** | [Lihat Rangkuman](#-jobsheet-7--version-control-git-and-app-deployment) |
| **Jobsheet 8 – MongoDB and No-SQL Databases** | [Lihat Rangkuman](#-jobsheet-8--mongodb-and-no-sql-databases) |
| **Jobsheet 9 – Socket Programming** | [Lihat Rangkuman](#-jobsheet-9--socket-programming) |

---

<h2>Penjelasan Jobsheet Praktikum</h2>

## Jobsheet 1 – Pengantar Node.js
<p align="justify">
Jobsheet 1 berfokus pada pengenalan <strong>Node.js</strong> sebagai runtime JavaScript
yang berjalan di sisi server dan dirancang untuk mendukung pengembangan aplikasi
jaringan berbasis <strong>event-driven</strong> dan <strong>non-blocking I/O</strong>.
Mahasiswa mempelajari perbedaan Node.js dengan JavaScript di sisi client (browser),
serta memahami peran Node.js dalam arsitektur <strong>client–server</strong>.
</p>
<p align="justify">
Praktikum diawali dengan instalasi Node.js dan Visual Studio Code, kemudian dilanjutkan
dengan pembuatan program server HTTP sederhana bertipe “Hello World”.
Melalui praktikum ini, mahasiswa memahami bagaimana Node.js menangani permintaan
(request) dan memberikan respons (response) secara asynchronous, sehingga mampu
menjalankan banyak proses secara efisien dan skalabel.
</p>

<details>
  
```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello World')
})

server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/')
})
```
</details> 

---

## Jobsheet 2 – JavaScript Essentials
<p align="justify">
Jobsheet 2 membahas penguatan konsep dasar <strong>bahasa pemrograman JavaScript</strong>
sebagai fondasi utama dalam pengembangan aplikasi Node.js.
Pembelajaran dilakukan melalui platform NetAcad tanpa pembuatan direktori khusus,
namun berfokus pada pemahaman sintaks dan logika pemrograman.
</p>
<p align="justify">
Materi yang dipelajari meliputi penggunaan variabel dan tipe data, operator aritmatika
dan logika, struktur kontrol seperti percabangan dan perulangan, pembuatan fungsi,
serta pengolahan array. Pemahaman materi ini menjadi bekal penting dalam menulis
kode program backend yang terstruktur, dinamis, dan mudah dikembangkan.
</p>

---

## Jobsheet 3 – Module System & Command Line Arguments
<p align="justify">
Jobsheet 3 membahas konsep <strong>modularisasi kode</strong> pada Node.js menggunakan
sistem modul <strong>CommonJS</strong>. Mahasiswa mempelajari cara memisahkan program
ke dalam beberapa file modul agar kode lebih terstruktur, mudah dibaca, dan
mudah dipelihara.
</p>
<p align="justify">
Selain itu, jobsheet ini juga membahas penggunaan <strong>Node Package Manager (NPM)</strong>
untuk mengelola dependensi eksternal serta pemrosesan
<strong>command line arguments</strong> dalam membangun aplikasi berbasis
<strong>Command Line Interface (CLI)</strong>.
Implementasi dilakukan melalui pembuatan aplikasi buku catatan yang mampu
menambah, menampilkan, membaca, dan menghapus data yang disimpan dalam file JSON.
</p>

<details>
  
```js
const yargs = require('yargs')

yargs.command({
  command: 'tambah',
  describe: 'Menambah catatan baru',
  handler() {
    console.log('Catatan berhasil ditambahkan')
  }
})

yargs.parse()
```
</details> 

---

## Jobsheet 4 – HTTP Request and API
<p align="justify">
Jobsheet 4 berfokus pada pemahaman mekanisme <strong>HTTP Request</strong> dan
<strong>Application Programming Interface (API)</strong> sebagai sarana komunikasi
antara client dan server. Mahasiswa mempelajari konsep dasar metode HTTP,
alur request–response, serta penggunaan format data <strong>JSON</strong>.
</p>
<p align="justify">
Pada praktikum ini, dilakukan pengambilan data dari API eksternal menggunakan
library request, kemudian data tersebut diolah dan ditampilkan kembali oleh aplikasi.
Integrasi API Mapbox digunakan untuk proses geocoding, sedangkan API Weatherstack
digunakan untuk menampilkan informasi cuaca berdasarkan lokasi.
Melalui jobsheet ini, mahasiswa memahami bagaimana aplikasi backend berinteraksi
dengan layanan pihak ketiga secara real-time.
</p>

<details>
  
```js
const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=API_KEY&query=Padang'

request({ url: url, json: true }, (error, response) => {
  console.log(response.body.current.temperature)
})
```
</details> 

---

## Jobsheet 5 – Web Server dan Express.js
<p align="justify">
Jobsheet 5 membahas pembangunan <strong>web server</strong> menggunakan
<strong>Express.js</strong> sebagai framework Node.js.
Mahasiswa mempelajari cara membuat server HTTP, mendefinisikan routing menggunakan
metode <code>app.get()</code>, serta mengirimkan respons dalam bentuk
HTML maupun JSON.
</p>
<p align="justify">
Selain itu, jobsheet ini juga membahas penyajian file statis seperti CSS dan JavaScript,
penggunaan template engine Handlebars untuk membangun halaman web dinamis,
serta penanganan halaman error menggunakan routing 404.
Materi ini memberikan pemahaman dasar tentang pengembangan aplikasi web
backend yang terstruktur dan siap dikembangkan lebih lanjut.
</p>

<details>
  
```js
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Selamat datang di halaman utama')
})

app.listen(4000, () => {
  console.log('Server berjalan pada port 4000')
})
```
</details>

---

## Jobsheet 6 – JSON HTTP Endpoints
<p align="justify">
Jobsheet 6 berfokus pada pembuatan <strong>endpoint API</strong> berbasis
<strong>JSON</strong> menggunakan Express.js.
Mahasiswa mempelajari bagaimana server menyediakan data melalui URL tertentu,
mengelola parameter menggunakan <code>req.query</code>, serta membedakan
endpoint statis dan endpoint dinamis.
</p>
<p align="justify">
Praktikum juga mencakup integrasi API eksternal untuk mengambil data lokasi dan cuaca,
kemudian mengirimkannya kembali ke client dalam format JSON.
Melalui jobsheet ini, mahasiswa memahami konsep dasar REST API serta cara membangun
layanan backend yang dapat diakses oleh berbagai client.
</p>

<details>
  
```js
app.get('/infocuaca', (req, res) => {
  if (!req.query.address) {
    return res.send({ error: 'Kamu harus memasukan lokasi yang ingin dicari' })
  }

  res.send({
    prediksiCuaca: 'Cuaca Sedang Hujan',
    lokasi: 'Padang',
    address: req.query.address
  })
})
```
</details>

---

## Jobsheet 7 – Version Control, Git and App Deployment
<p align="justify">
Jobsheet 7 membahas penggunaan <strong>Git</strong> sebagai
<strong>Version Control System</strong> untuk mencatat dan mengelola perubahan kode
selama proses pengembangan aplikasi.
Mahasiswa mempelajari konsep repository, commit, branch, merge, serta penggunaan
remote repository pada GitHub.
</p>
<p align="justify">
Selain itu, jobsheet ini juga membahas proses <strong>deployment aplikasi Node.js</strong>
ke platform cloud. Materi mencakup konfigurasi port dinamis menggunakan
environment variable, penyesuaian script pada <code>package.json</code>,
serta memastikan aplikasi dapat berjalan dengan baik di lingkungan produksi.
</p>

<details>
  
```js
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('Server berjalan pada port ' + port)
})
```
</details>

---

## Jobsheet 8 – MongoDB and No-SQL Databases
<p align="justify">
Jobsheet 8 memperkenalkan <strong>MongoDB</strong> sebagai database
<strong>NoSQL</strong> yang menyimpan data dalam bentuk dokumen.
Mahasiswa mempelajari perbedaan database NoSQL dengan database relasional,
serta memahami keunggulan MongoDB dalam menyimpan data berbasis JSON.
</p>
<p align="justify">
Materi praktikum mencakup proses koneksi Node.js ke MongoDB, pembuatan database
dan collection, serta operasi CRUD (Create, Read, Update, Delete).
Melalui jobsheet ini, mahasiswa memahami bagaimana database NoSQL digunakan
dalam pengembangan aplikasi backend modern yang fleksibel dan skalabel.
</p>

<details>
  
```js
const { MongoClient } = require('mongodb')

const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url)

client.connect().then(() => {
  const db = client.db('task-manager')
  console.log('Berhasil terhubung ke MongoDB')
})
```
</details>

---

## Jobsheet 9 – Socket Programming
<p align="justify">
Jobsheet 9 membahas konsep <strong>Socket Programming</strong> untuk membangun
komunikasi dua arah secara <strong>real-time</strong> antara client dan server.
Mahasiswa mempelajari perbedaan komunikasi berbasis HTTP dan WebSocket,
serta konsep event-based communication.
</p>
<p align="justify">
Implementasi dilakukan menggunakan <strong>Socket.IO</strong> dalam pembuatan
aplikasi chat yang mendukung pengiriman pesan dan lokasi pengguna secara langsung.
Melalui jobsheet ini, mahasiswa memahami bagaimana teknologi socket digunakan
dalam aplikasi real-time seperti chat, notifikasi, dan sistem kolaborasi daring.
</p>

<hr>

<div align="center">
  <p><strong>Disusun oleh Radhia Aulia Nisa</strong></p>
  <p>
    🔗 <a href="https://github.com/radhiaauliaa" target="_blank">
      Kunjungi Profil GitHub
    </a>
  </p>
</div>
