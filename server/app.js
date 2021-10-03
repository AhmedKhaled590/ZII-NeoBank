var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const user = require('./models/users');

mongoose.connect('mongodb://localhost:27017/Sparks', { useNewUrlParser: true }, (err) => {
  if (err)
    console.log(err)
  else {
    console.log('Connected to DB!')
    user.count({}, (count) => {
      if (count === 0) {
        user.insertMany([{ "_id": "615729c2de789c304ae5a38d", "name": "Ahmed", "email": "ahmed@ahmed.com", "amount": 888 }, { "_id": "61572d788f133e155de13632", "name": "Hazem", "email": "hazem@hazem.com", "amount": 954 }, { "_id": "61572d7d8f133e155de13633", "name": "Hany", "email": "hany@hany.com", "amount": 964 }, { "_id": "61572d868f133e155de13634", "name": "Fathy", "email": "fathy@fathy.com", "amount": 868 }, { "_id": "61572d8d8f133e155de13635", "name": "mohamed", "email": "mohamed@mohamed.com", "amount": 985 }, { "_id": "61572d938f133e155de13636", "name": "sawah", "email": "sawah@sawah.com", "amount": 745 }, { "_id": "61572dae8f133e155de13637", "name": "halim", "email": "halim@halim.com", "amount": 842 }, { "_id": "61572dc48f133e155de13638", "name": "salah", "email": "salah@salah.com", "amount": 822 }, { "_id": "61572dd98f133e155de13639", "name": "abdo", "email": "abdo@abdo.com", "amount": 812 }, { "_id": "61572deb8f133e155de1363a", "name": "dody", "email": "dody@dody.com", "amount": 812 }, { "_id": "61572dfd8f133e155de1363b", "name": "wael", "email": "wael@wael.com", "amount": 812 }])
      }
    }
    )
  }
})

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
