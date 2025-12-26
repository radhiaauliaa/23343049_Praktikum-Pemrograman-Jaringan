import fs from 'fs'

// const buku = {
//     judul: 'Pemrograman Jaringan',
//     penulis: 'Radhia Aulia Nisa'
// }

// const bukuJSON = JSON.stringify(buku)
// fs.writeFileSync('1-jsontest.json', bukuJSON)

const dataBuffer = fs.readFileSync('1-jsontest.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.judul, data.penulis);