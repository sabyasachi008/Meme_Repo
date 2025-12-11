

//Server side code
const express = require('express')
const multer = require('multer');

const upload = multer({dest: 'uploads/'});

const app = express()


app.post('/profile', upload.single('avat'))