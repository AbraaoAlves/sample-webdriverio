var express = require('express');
var webdriverio = require('webdriverio');
var options = { 
    desiredCapabilities: { browserName: 'chrome'},
    host: 'localhost',
    port: 4444 
};
var client = webdriverio.remote(options);
    
// Constants
var PORT = 8080;

// App
var app = express();
app.get('/', function (req, res) {

  client
    .init()
    .url('https://duckduckgo.com/')
    // .setValue('#search_form_input_homepage', 'WebdriverIO')
    // .click('#search_button_homepage')
    .getTitle().then(function(title) {
        res.send(title);
    })
    .end();
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
