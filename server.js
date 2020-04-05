const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/images/:fileName', (req, res) => {
	const fileName = req.params.fileName
	res.sendFile(fileName, {root: path.join(__dirname, 'media', 'images')})
})

app.get('/sound/numbers/:fileName', (req, res) => {
	const fileName = req.params.fileName
	res.sendFile(fileName, {root: path.join(__dirname, 'media', 'sound', 'numbers')})
})

app.get('/sound/:fileName', (req, res) => {
	const fileName = req.params.fileName
	res.sendFile(fileName, {root: path.join(__dirname, 'media', 'sound')})
})

app.listen(3000, function () {
	console.log('Listening on port 3000')
})
