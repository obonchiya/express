
## 「基礎から学ぶNode.js」習作


このプロジェクトは技術評論社の「基礎から学ぶNode.js」の学習を目的としています。  
また、cloud9に慣れるためのサンプルでもあります。

> 基礎から学ぶNode.js: http://gihyo.jp/dev/serial/01/nodejs/0001

> npmコマンドの使い方: http://qiita.com/yoh-nak/items/8446bf12094c729d00fe

> MEANスタックではじめるWebアプリ入門: http://www.atmarkit.co.jp/ait/kw/mean_stack_nyumon.html

> Cloud9でMondoDBを動かしてみた: http://giveitashot.hatenadiary.jp/entry/2014/01/19/000851

> 【Git】 基本コマンド: http://qiita.com/konweb/items/621722f67fdd8f86a017

> Express 4.x系のインストールとコマンド: http://qiita.com/yoh-nak/items/868c55e04ce2dd128ccc

> Cloud9 use Express: https://docs.c9.io/docs/express

> Node.js +Express4をつかっていて、躓いた注意点まとめ: http://qiita.com/zaru/items/68b4f64c1f0d10b6a27e

> node初心者がexpress-generatorで吐き出されたapp.jsを読んでみる: http://qiita.com/mito_log/items/735f7079f99ec78ea7e6

> Node.js +Express +MondoDBでSessionを利用してログイン機能を実装: http://qiita.com/n0bisuke/items/2514197d8791abbc7d87

> cloud9でNode.js+MongoDB+mongooseを利用する: http://knowledge.reontosanta.com/archives/489

> MongoDBの薄い本 : http://www.cuspy.org/diary/2012-04-17/the-little-mongodb-book-ja.pdf



技術評論社の記事は情報が古いため、MEANスタックではじめる～も参考にする。
(むしろこっちを進めるべきかな…)

まだMongoDBはサービス化していないので、毎回起動と停止をする事。
mongodで起動、mongoでシェル操作、use admin→db.shutdownServer()で停止
