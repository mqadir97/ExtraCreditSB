
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');  //import
// Example route
// var user = require('./routes/user');
var logn = require('./routes/logn');

var profile = require('./routes/profile');
var profile1 = require('./routes/profile1');
var profile2 = require('./routes/profile2');
var profile3 = require('./routes/profile3');

var searchbar = require('./routes/searchbar');

var studybuddy = require('./routes/studybuddy');

var addSB = require('./routes/addSB');

var add = require('./routes/add');

var app = express();

var frnds = require('./routes/frnds');

var alternative = require('./routes/alternative');

// var pictureLink = require('./routes/profile');
var chat = require('./routes/chat');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app.get('/index', index.view);
// Example route
// app.get('/users', user.list);
app.get('/', logn.viewLogn);

app.get('/index', index.view);
// app.get('*', function(req, res){
//     res.sendFile(__dirname+'/routes/index.handlebars'); // change the path to your index.html
// });

app.get('/profile', profile.viewProfile);
app.get('/profile1', profile1.viewProfile);
app.get('/profile2', profile2.viewProfile);
app.get('/profile3', profile3.viewProfile);

app.get('/profile/:id', profile.showProfile);

app.get('/searchbar', searchbar.viewSearchbar);

app.get('/studybuddy', studybuddy.viewStudybuddy);

app.get('/addSB', profile.addBuddy);


app.get('/add', add.addClass);

 app.get('/frnds', frnds.addFrnds);

 app.get('/alternative', alternative.viewAlternative);

app.get('/chat', chat.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
