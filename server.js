
// //Install express server
// const express = require('express');
// const path = require('path');

// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/core-angular-test'));

// app.get('/*', function(req,res) {

// res.sendFile(path.join(__dirname+'/dist/core-angular-test/index.html'));
// });

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);


const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/core-angular-test'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/core-angular-test/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
