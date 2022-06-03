const express = require('express');
const app = express();
const connectDB = require('./config/db');
require('dotenv').config({ path: './config/.env' });

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', require('./routes/index'));
app.use('/api', require('./routes/urls'));

app.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}`);
});
