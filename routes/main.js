// Creating a new router
const express = require('express');
const router = express.Router();

// Defining our data
var shopData = {shopName: "The Book & Bottle",
                productCategories: ["Water",
                     "Juice", "Soda", "Soft Drinks",
                      "Hot Drinks", "Smoothies"],
                locations: [{
                    name: "Main Shop",
                    address: "Richard Hoggart Building",
                    manager: "Alice Smith"
                },
                {
                    name: "Library Cafe",
                    address: "Goldsmiths's Library",
                    manager: "Bob Johnson"
                },
                {
                    name: "Campus Kiosk",
                    address: "Professor Stuart Hall Building",
                    manager: "Charlie Brown"
                },
                {
                    name: "Student Union Outlet",
                    address: "Art Studio, St James",
                    manager: "Diana Prince"
                }
            ]
};

// Handling the main routes
router.get('/', function(req, res) {
    res.render('index.ejs', shopData)
});

router.get('/about', function(req, res) {
    res.render('about.ejs', shopData)
});

router.get('/search', function(req, res) {
    res.render('search.ejs', shopData)
});

router.get('/search_result', function(req, res) {
    // TODO: Searching our database
    res.send('You searched for: ' +
         req.query.search_text + ' in ' +
          req.query.category);
});

router.get('/register', (req, res) => { 
    res.render('register.ejs', shopData);
});

router.post('/registered', (req, res) => {
    res.send(' Hello ' + req.body.first + ' ' +
         req.body.last + ', you are now registred!.' 
        + ' We will send an email to you at ' 
        + req.body.email + '.');
});

router.get('/survey', (req, res) => {
    res.render('survey.ejs', shopData);
});

router.post('/submit-survey', (req, res) => {
    res.render('survey-result.ejs', {
        formData: req.body,
        shopName: shopData.shopName
    });
});

// Handling non existing files
router.use((req, res) => {
    res.status(404).render('404.ejs', shopData);
});

// Exporting the router object so index.js can access it
module.exports = router;
