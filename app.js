var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var sms = require('./africastalking');

mongoose.connect('mongodb+srv://root:root@cluster0-nhac8.gcp.mongodb.net/test?retryWrites=true',
{ useNewUrlParser: true } );

var usersRouter = require('./routes/users');
var indexRouter = require('./routes/index');
var locationRouter = require('./routes/location');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/', indexRouter);
app.use('/location', locationRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.messge;
  res.locals.error = req.app.ge('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
sms.sendMessage('254713014492', 'hey');
module.exports = app;
