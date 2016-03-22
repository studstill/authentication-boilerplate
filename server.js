'use strict';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;
const router = express.Router();

app.use(express.static('public'));
app.listen(PORT, console.log('Listening on port ', PORT))
