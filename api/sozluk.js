const express = require('express');
const fs = require('fs');
const chalk = require('chalk');
const router = express.Router();
const path = require('path');

let data;

data = JSON.parse(fs.readFileSync(path.resolve(__dirname, './gts.json')));

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
