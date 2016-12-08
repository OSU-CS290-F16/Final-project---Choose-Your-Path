var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var app = express();
 // var usersData = require('./users-data');
var port = process.env.PORT || 3000;

/*
 * Read info about the MySQL connection from the environment and use it to
 * make the connection.
 */
 var mysqlHost = 'mysql.cs.orst.edu';
 var mysqlUser = 'cs290_guzmannt';
 var mysqlPassword = '1287';
 var mysqlDB = 'cs290_guzmannt';
var mysqlConnection = mysql.createConnection({
    host: mysqlHost,
    user: mysqlUser,
    password: mysqlPassword,
    database: mysqlDB
  });
/*
 * Make a connection to our MySQL database.  This connection will persist for
 * as long as our server is running.
 */
// mysqlConnection.connect(function(err) {
//   if (err) {
//     console.log("== Unable to make connection to MySQL Database.")
//     throw err;
//   }
//   else {
//       next();
//   }
// });

/*
 * Set up Express to use express-handlebars as the view engine.  This means
 * that when you call res.render('page'), Express will look in `views/` for a
 * file named `page` (express-handlebars will recognize the .handlebars
 * extension), and it will use express-handlebars to render the content of that
 * file into HTML.
 *
 * Here, we're also setting express-handlebars to use 'main' as the default
 * layout.  This means that, if we can res.render('page'), express-handlebars
 * will take the content from `views/page.handlebars` and plug it into the
 * {{{body}}} placeholder in `views/layouts/main.handlebars`.
 */
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

// Parse all request bodies as JSON.
app.use(bodyParser.json());

// Serve static files from public/.
app.use(express.static(path.join(__dirname, 'public')));

// Render the home page for the root URL path ('/').
app.get('/', function (req, res) {
  res.render('home-page', {
    pageTitle: 'Home'
  });
});

// Render the home page for the root URL path ('/home').
app.get('/home', function (req, res) {
  res.render('home-page', {
    pageTitle: 'Home'
  });
});

app.get('people/home.html', function (req, res) {
  res.render('home-page', {
    pageTitle: 'Home'
  });
});

// Render the home page for the root URL path ('/home.html').
app.get('/home.html', function (req, res) {
  res.render('home-page', {
    pageTitle: 'Home'
  });
});

// Render the about page for the root URL path ('/about').
app.get('/about', function (req, res) {
  res.render('about-page', {
    pageTitle: 'About'
  });
});

// Render the about page for the root URL path ('/about.html').
app.get('/about.html', function (req, res) {
  res.render('about-page', {
    pageTitle: 'About'
  });
});

// Render the game page for the root URL path ('/games').
app.get('/games', function (req, res) {
  res.render('games-page', {
    pageTitle: 'Games'
  });
});

// Render the game page for the root URL path ('/games.html').
app.get('/games.html', function (req, res) {
  res.render('games-page', {
    pageTitle: 'Games'
  });
});

app.get('/OurGame.html', function (req, res) {
  res.render('OurGame-page', {
    pageTitle: 'A Day Without Dragons'
  });
});

app.get('/OurGame', function (req, res) {
  res.render('OurGame-page', {
    pageTitle: 'A Day Without Dragons'
  });
});

// Render the game page for the root URL path ('/dialog1.html').
app.get('/dialog.html', function (req, res) {
  res.render('dialog-page', {
    pageTitle: 'Dialog'
  });
});

app.get('/dialog1.html', function (req, res) {
  res.render('dialog1-page', {
    pageTitle: 'Dialog #1'
  });
});

app.get('/dialog11.html', function (req, res) {
  res.render('dialog11-page', {
    pageTitle: 'Dialog #1.1'
  });
});

app.get('/dialog12.html', function (req, res) {
  res.render('dialog12-page', {
    pageTitle: 'Dialog #1.2'
  });
});

app.get('/dialog13.html', function (req, res) {
  res.render('dialog13-page', {
    pageTitle: 'Dialog #1.3'
  });
});

app.get('/dialog2.html', function (req, res) {
  res.render('dialog2-page', {
    pageTitle: 'Dialog #2'
  });
});

app.get('/dialog21.html', function (req, res) {
  res.render('dialog21-page', {
    pageTitle: 'Dialog #2.1'
  });
});

app.get('/dialog22.html', function (req, res) {
  res.render('dialog22-page', {
    pageTitle: 'Dialog #2.2'
  });
});

app.get('/dialog23.html', function (req, res) {
  res.render('dialog23-page', {
    pageTitle: 'Dialog #2.3'
  });
});

app.get('/dialog3.html', function (req, res) {
  res.render('dialog3-page', {
    pageTitle: 'Dialog #3'
  });
});

app.get('/dialog31.html', function (req, res) {
  res.render('dialog31-page', {
    pageTitle: 'Dialog #3.1'
  });
});

app.get('/dialog32.html', function (req, res) {
  res.render('dialog32-page', {
    pageTitle: 'Dialog #3.2'
  });
});

app.get('/dialog33.html', function (req, res) {
  res.render('dialog33-page', {
    pageTitle: 'Dialog #3.3'
  });
});

app.get('/ending1.html', function (req, res) {
  res.render('ending1-page', {
    pageTitle: 'Ending #1'
  });
});

app.get('/ending2.html', function (req, res) {
  res.render('ending2-page', {
    pageTitle: 'Ending #2'
  });
});

app.get('/ending3.html', function (req, res) {
  res.render('ending3-page', {
    pageTitle: 'Ending #3'
  });
});

// If we didn't find the requested resource, send a 404 error.
app.get('*', function(req, res) {
  res.status(404).render('404-page', {
    pageTitle: '404'
  });
});

/*
 * Make a connection to our MySQL database.  This connection will persist for
 * as long as our server is running.  Start the server listening on the
 * specified port if we succeeded in opening the connection.
 */
mysqlConnection.connect(function(err) {
  if (err) {
    console.log("== Unable to make connection to MySQL Database.")
    throw err;
  }
  app.listen(port, function () {
    console.log("== Listening on port", port);
  });
});
