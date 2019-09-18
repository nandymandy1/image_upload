const path = require('path');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, './public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`)
});