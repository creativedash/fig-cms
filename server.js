
/* Config
---------------------------------------------------------------------- */
var database = 'fig-cms',
    s3 = {
        access_key: '',
        secret_key: ''
    };


/* Dependencies
---------------------------------------------------------------------- */
var express = require('express'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000;


/* Express Settings
---------------------------------------------------------------------- */
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use('/libs', express.static(__dirname + '/bower_components'));


/* API Routes
---------------------------------------------------------------------- */



/* Angular Route
---------------------------------------------------------------------- */
app.get('*', function(req, res){
    res.sendfile('./public/index.html');
});


/* Start Server
---------------------------------------------------------------------- */
app.listen(port);
console.log('Fig CMS running on port ' + port);