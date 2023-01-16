const express = require('express');
const process = require('process');
const chalk = require('chalk');
const portNumber = process.env.PORT || 3000;
const app = express();
const sozluk = require('./api/sozluk');

app.use(express.static('public'));

app.use('/api/sozluk', sozluk);

app.listen(portNumber, () => {
	console.log(chalk.yellow(`API servisi ${portNumber} portunda calisiyor.`));
});

module.exports = app;
