var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// using public folder 
app.use( express.static( "public" ) );

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    var mascots = [
      { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
      { name: 'Tux', organization: "Linux", birth_year: 1996},
      { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];
    var tagline = "No programming concept is complete without a cute animal mascot.";
  
    res.render('pages/index', {
      mascots: mascots,
      tagline: tagline
    });
  });

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});


// contact page
app.get('/contact', (req, res)=>{
   res.render('pages/contact');
});

// projects
app.get('/projects', (req, res)=>{
  res.render('pages/projects');
});

// services page
app.get('/services', (req, res)=>{
  res.render('pages/services');
});

// getting action for form



app.listen(8080);
console.log('Server is listening on port 8080');
