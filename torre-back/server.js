const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Server arriba'))

app.listen(5001, () => console.log('server up'));