const express = require('express');
const app = express();
const userRoutes = require('./routes/user');
const database = require('./database/index')
const PORT = process.env.PORT || 3000;
// app.set('views', 'views')
app.set('view engine', 'views')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(userRoutes);


app.listen(PORT, () => console.log(`CONNECTED ON PORT :${PORT}`));