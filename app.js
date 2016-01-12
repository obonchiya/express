var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require("express-session");
var RedisStore = require("connect-redis")(session);
var mongoose = require('mongoose');

/**
 * データベース接続テスト
 **/
// var con = mongoose.connect("mongodb://localhost:27017/book-store");
// var db = con.connection;
// //DB接続エラー時にコールバック実行
// db.on('error', console.error.bind(console, 'connection error:'));
// //DB接続成功時にコールバック実行
// db.once('open', function(callback) {
//   console.log('connect successfully');
// });
// var Schema = mongoose.Schema;
// var bookSchema = new Schema({
//   _id: Number,
//   title: String,
//   price: Number,
//   publishDate: Date,
//   author: {
//     type: Number,
//     ref: 'Author'
//   }
// });

// var authorSchema = new Schema({
//   _id: Number,
//   name: String,
//   books: [{
//     type: Schema.Types.ObjectId,
//     ref: 'Book'
//   }]
// });
// var Book = mongoose.model('Book', bookSchema);
// var Author = mongoose.model('Author', authorSchema);

// Book.findOne({
//   'title': 'Javascriptリファレンス'
// }).populate('author').exec(function(err, book) {
//   if (err) throw new Error(err);
//   console.log('#####################');
//   console.log(book);
// });

// Book.update({
//   title: 'Javascriptリファレンス'
// }, {
//   $set: {
//     price: 200
//   }
// }, {
//   upsert: false
// }, function(err) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log('update success.');
//   }
// });

// Book.remove({
//   title: 'Javascriptリファレンス'
// }, function(err) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log('delete success');
//   }
// });


// var authorModel = new Author();
// authorModel._id = 2;
// authorModel.name = 'taro';
// authorModel.save(function(err) {
//   if (err) {
//     console.error(err);
//   }
//   else {
//     var bookModel = new Book();
//     bookModel._id = 100;
//     bookModel.title = 'Javascriptリファレンス';
//     bookModel.price = 1000;
//     bookModel.publishDate = new Date();
//     bookModel.author = authorModel._id;
//     bookModel.save(function(err, book) {
//       if (err) {
//         console.error(err);
//       }
//       else {
//         console.log('bookModel saved:' + book);
//       }
//     });
//   }
// });


//ルーティグモジュールの読み込み
var routes = require('./routes/index');
var users = require('./routes/users');
var sample = require('./routes/sample');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//bower_componentsがURLに含まれていた場合は、bower_components以下のディレクティブを使用する。
app.use('/bower_components', express.static(__dirname + '/bower_components'));

//セッション設定
app.use(session({
  store: new RedisStore({}),
  secret: 'secretKey'
}));

app.use('/session', function(req, res) {
  console.log(routes);
  var session = req.session;
  if (session && session.count) {
    session.count++;
  }
  else {
    session.count = 1;
  }
  res.send('count is ' + session.count);
});

//useメソッドは、モジュールの使用の宣言に過ぎない。
//GET、POST等メソッドタイプによる分岐はモジュール内で行なう。
app.use('/', routes);
app.use('/users', users);
app.use('/sample', sample);

//無理やり403エラーを起こす
app.get('/error', function(req, res, next) {
  try {
    //エラーをthrowする
    throw new Error('error occurred!!');
  }
  catch (err) {
    err.status = 403;
    next(err);
  }

});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  //パスを省略した場合、全てのリクエストに対する処理になる。
  console.log('404 error');
  //エラーオブジェクト生成時の引数はmessage変数に格納される。
  var err = new Error('Not Found');
  err.status = 404;
  //next(err)は直後のエラールーティングを呼び出す。
  next(err);
});

// error handlers

//ログ出力
app.use(function(err, req, res, next) {
  console.log('#######################################');
  console.error('[' + new Date + ']' + err.toString());
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    console.log('development error');
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
