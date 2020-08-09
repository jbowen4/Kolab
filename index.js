const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: true }));

app.get('/', (req, res) => res.send("API Running"));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Started on port ${PORT}`));

