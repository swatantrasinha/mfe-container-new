const express = require('express');
// const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 5050;
const app = express();
console.log('__dirname is : ', __dirname);

app.use('/', express.static(__dirname));

/*
const distFolder = path.join(__dirname, 'dist');
console.log('distFolder is : ', distFolder);
app.use('/', express.static(distFolder));
*/

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/dist', 'index.html'));
});

app.listen(port);


/*
 package.json earlier scripts is below :

  "start": "webpack serve --config config/webpack.dev.js",
  "build": "webpack --config config/webpack.prod.js"
 */