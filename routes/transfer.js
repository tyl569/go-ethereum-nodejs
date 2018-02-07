const express = require('express');
const router = express.Router();
const web3 = require("../web3");

router.get('/create/', (req, res) => {
    var reqQuery = req.query;
    var toAccount = reqQuery.toAccount;
    var viewData = {
        "title" : "create transfer"
    };
    res.render("transferCreate", viewData);
});

router.post('/confirm', (req, res) => {
    var reqBody = req.body;
    var coinNum = reqBody.coinNum;
    var toAccount = reqBody.toAccount;
    if (coinNum != undefined && coinNum != "") {
        var coinBase = web3.eth.coinbase;
        var tradeObject = {
            from: coinBase,
            to: toAccount,
            value: coinNum,
        };
        web3.personal.unlockAccount(coinBase, "123");
        web3.eth.sendTransaction(tradeObject, function (err, address) {
            if (err != "" || err != null) {
                 res.redirect('/account/list');
            }
        })
    }
});

module.exports = router;