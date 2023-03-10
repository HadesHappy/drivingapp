const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const fileupload = require("express-fileupload");

const fs = require('fs')
const path = require('path')
const https = require('https')

const port = process.env.PORT || 443

app.use(fileupload());
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

const uri = process.env.DRIVING_URI || 'mongodb+srv://drivingschool:3eUdrvjYGaTeibQ8@cluster0.sfea2sq.mongodb.net/myFirstDatabase';

try {
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Mongoose is connected."));
} catch (e) {
  console.log("Can not connect.");
}

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('mongo DB success')
})

const Routes = require('./routes/index')
app.use('/api', Routes)
app.use(express.static(path.join(__dirname, 'client/build/')))
app.use(express.static(path.join(__dirname, 'public')))

app.set('client/build', path.join(__dirname, 'client/build'))
app.set('view engine', 'html');
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

// app.listen(port, () => {
//   console.log(`Server is listenting at http://localhost:${port}`)
// })

var privateKey = fs.readFileSync('./certificate/autoapp.key', 'utf8');
var certificate = fs.readFileSync('./certificate/autoapp.crt', 'utf8');
var credentials = { key: privateKey, cert: certificate };
var httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, () => {
  console.log(`Server is listenting at ${port}`)
})

