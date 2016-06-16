const express = require('express');
const path = require('path');
const app = express();

console.log(path.join(__dirname, '../', '/client'));

app.use('/client', express.static(path.join(__dirname, '../', '/client')));
app.use('/bootstrap', express.static(path.join(__dirname, '../', '/bootstrap')));

app.route('/*')
    .get((req, res) => {
      res.sendFile(path.join(__dirname, '../', 'index.html'));
    });

app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), "0.0.0.0", function () {
    console.log('Express server listening on port ' + server.address().port);
});
