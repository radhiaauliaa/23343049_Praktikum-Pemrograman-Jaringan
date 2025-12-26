const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const namaDatabase = 'task-manager';

async function main() {
    try {
        await client.connect();
        console.log('Berhasil terhubung ke MongoDB database server');
        const db = client.db(namaDatabase);

        db.collection('pengguna').deleteMany({
            usia: 21
        }).then((result) => {
            console.log(result);
        }).catch((error) => {
            console.error(error);
        })

        db.collection('tugas').deleteOne({
            _id: new ObjectId("694e87ff7a7eb5aee836571d")
        }).then((result) => {
            console.log(result);
        }).catch((error) => {
            console.error(error);
        })
    } catch (error) {
    console.error(error);
    }
}

main();