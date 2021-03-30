const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Aixo nomes es una prova'))

app.listen(2000);
console.log('Server on port 2000')