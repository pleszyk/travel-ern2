const express = require('express')
const path = require('path');
const app = express()
const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()

const key = process.env.API_KEY;

app.get('/data', (req, res) => {
    let type = req.query.type
    let lat = req.query.lat
    let lng = req.query.lng

    axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&type=${type}&rankby=distance&key=${key}`)
        .then(response => {
            res.send(response.data)
        })
        .catch(error => {
            console.log(error)
        })
})

app.get('/photo', (req, res) => {
    let photoRef = req.query.photoRef

    axios.get(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=450&photo_reference=${photoRef}&key=${key}`)
        .then(response => {
            res.send(response.request.res.responseUrl)
        })
        .catch(error => {
            console.log(error)
        })
})

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
  }

const PORT = 4000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));