const express = require('express');
const router = express.Router();
var Web3 = require('web3');

router.get('/', (req, res) => {
    var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    var personal = web3.personal.listAccounts[0];
});

module.exports = router;