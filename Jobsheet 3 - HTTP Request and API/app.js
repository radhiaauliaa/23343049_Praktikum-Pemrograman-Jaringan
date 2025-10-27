const request = require('postman-request')

// const url = 'https://api.weatherstack.com/current?access_key=467d63634a9a55da3a4f44e20a15813e&query=-0.897871,100.350330'
// request({ url: url}, (error, response) => {
//     // console.log(response)
//     const data = JSON.parse(response.body)
//     console.log(data)
//     // console.log(data.current)
//     // console.log(data.current.temperature)
// })

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Universitas-Negeri-Padang-Indonesia.json?limit=2&access_token=pk.eyJ1IjoiYXVsaWFubiIsImEiOiJjbWg2aGV2d3MwZGY4MmpzNnBkeHV1MXRjIn0.mrYXtUcJfowFEMvvrORKZg'

request({ url: geocodeURL, json: true }, (error, response) => {
    // const latitude = response.body.features[0].center[1]
    // const longitude = response.body.features[0].center[0]
    // console.log(latitude, longitude)

    const feature = response.body.features[0]
    const latitude = feature.center[1]
    const longitude = feature.center[0]

    // Tampilkan koordinat, query, place_name, place_type
    const queryText = Array.isArray(response.body.query)
        ? response.body.query.join(' ')
        : response.body.query
    const placeName = feature.place_name
    const placeType = Array.isArray(feature.place_type)
        ? feature.place_type[0]
        : feature.place_type

    console.log(`Koordinat lokasi anda adalah ${latitude}, ${longitude}`)
    console.log(`Data yang anda cari adalah: ${queryText}`)
    console.log(`Data yang ditemukan adalah: ${placeName}`)
    console.log(`Tipe lokasi adalah: ${placeType}`)

    const weatherURL = `http://api.weatherstack.com/current?access_key=467d63634a9a55da3a4f44e20a15813e&query=${latitude},${longitude}&units=m`

    request({ url: weatherURL, json: true }, (err2, resp2) => {
        if (err2) return console.error('Gagal konek ke Weatherstack:', err2.message)
        if (resp2?.body?.error)
        return console.error('Weatherstack error:', resp2.body.error.info)

        const cur = resp2.body.current || {}
        const deskripsi = (cur.weather_descriptions || [])[0] || '-'

        console.log(`Saat ini suhu di ${placeName} mencapai ${cur.temperature} derajat celcius.`)
        console.log(`Kemungkinan terjadinya hujan adalah ${cur.precip}%`)
        console.log(`Deskripsi cuaca: ${deskripsi}`)
    })
})
