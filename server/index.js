const express = require('express');
const path = reequire('path');
const app = express();

app.use(express.static(_dirname + '/dist/employeeform1'));

app.get('/*' , function(req , res) {
    res.sendFile(path.join(_dirname+ '/dist/employeeform1/index.html'));
});

app.listen(process.env.PORT || 3000);