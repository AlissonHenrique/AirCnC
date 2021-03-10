const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors')
const path = require('path')
const app = express();
mongoose.connect('mongodb+srv://admin:123456789a@cluster0-aifdz.mongodb.net/onmistack09?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.listen(3001);
