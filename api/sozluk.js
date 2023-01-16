const express = require('express');
const fs = require('fs');
const chalk = require('chalk');
const router = express.Router();

let data;

fs.readFileSync('./gts.json', (err, jsonString) => {
	if (err) {
		console.log(chalk.red(`JSON dosyasi okunurken hata olustu: ${err}`));
		process.exit(1);
	}
	try {
		data = JSON.parse(jsonString);
	} catch (err) {
		console.log(chalk.red(`JSON dosyasi ayristirilirken hata olustu: ${err}`));
		process.exit(1);
	}
});

router.get('/', (req, res) => {
	const madde = req.query.madde;
	const anlam = data.find((d) => d.madde === madde);
	console.log(chalk.yellow(`${madde} sorgusu icin sorgu yapiliyor.`));
	if (anlam) {
		console.log(chalk.green(`${madde} maddesi icin ${anlam['anlam']} anlami bulundu.`));
		res.json(anlam);
	} else {
		console.log(chalk.red(`${madde} sorgusu icin herhangi bir anlam bulunamadi.`));
		res.json({ error: `${madde} sorgusu icin herhangi bir anlam bulunamadi.` });
	}
});

module.exports = router;
