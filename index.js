const express = require('express');
const process = require('process');
const chalk = require('chalk');
const portNumber = process.env.PORT || 3000;
const app = express();
const sozluk = require('./api/sozluk');
const path = require('path');

app.use(express.static('public'));

app.use('/api/sozluk', sozluk);

app.listen(portNumber, () => {
	console.log(chalk.yellow(`API servisi ${portNumber} portunda calisiyor.`));
});

app.get('/', (req, res) => {
	res.sendFile('index.html', { root: path.join(__dirname, 'public') });
});

module.exports = app;
