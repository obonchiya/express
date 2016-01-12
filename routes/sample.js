//サンプル用ルーティングモジュール
var express = require("express");
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('sample', {
        title: 'Sample'
    });
});

module.exports = router;