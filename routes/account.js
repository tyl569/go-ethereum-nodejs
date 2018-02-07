const express = require('express');
const router = express.Router();
const web3 = require("../web3");
router.get('/list', (req, res) => {
    var number = web3.eth.blockNumber;
    var listAccounts = web3.personal.listAccounts;
    var coinBase = web3.eth.coinbase;
    var coinBaseCoinNum = web3.eth.getBalance(coinBase);
    coinBaseCoinNum = coinBaseCoinNum;
    var accountCoinList = [];
    for (var i = 0; i < listAccounts.length; i ++) {
        accountCoinList[i] = web3.eth.getBalance(listAccounts[i]);
    }
    var accountGasList = [];
    for (var i = 0; i < listAccounts.length; i ++) {
        accountGasList[i] = web3.eth.getBalance(listAccounts[i]);
    }


    var viewData = {
        "title" : "accountsList",
        "accountList" : listAccounts,
        "coinBase" :  coinBase,
        "coinBaseCoinNum": coinBaseCoinNum,
        "accountCoinList" : accountCoinList,
    }
    res.render("accountList", viewData);
});

router.get('/create', (req, res) => {
    var viewData = {
        "title" : "create new account"
    }
    res.render('accountCreate', viewData);
});

router.post('/save', (req, res) => {
    var reqBody = req.body;
    var pass = reqBody.pass;
    if (pass != undefined && pass != "") {
        var newAccount = web3.personal.newAccount(pass);
        if (newAccount != "") {
            res.redirect('/account/list');
        }
    }
});

module.exports = router;