const request = require('postman-request')
const { json } = require('stream/consumers')

const urlCuaca =
'https://api.weatherstack.com/current?access_key=467d63634a9a55da3a4f44e20a15813e&query=-0.897871,100.350330'

request({ url: urlCuaca, json: true }, (error, response) => {
    console.log('Saat ini suhu diluar mencapai ' +
        response.body.current.temperature +
        ' derajat celcius. Kemungkinan terjadinya hujan adalah ' +
        response.body.current.precip +
        '%')

    const Deskripsi = (response.body.current.weather_descriptions || [])[0] || '-';
    console.log('Deskripsi cuaca: ' + Deskripsi)
    console.log(`Cuaca hari ini: ${Deskripsi.toLowerCase()}`);
})
