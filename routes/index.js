//ルーティングモジュール
var express = require('express');
var router = express.Router();

//ルーティングモジュールはexportでrouterオブジェクトを返す。
/* GET home page. */
router.get('/', function(req, res, next) {
    //ここでサーバ側の処理を実行する。
  res.render('index', { title: 'Express' });
});

module.exports = router;
