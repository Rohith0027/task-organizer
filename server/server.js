require('../database/db');
const cors = require('cors');
const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const taskRouter = require('./routes/taskRoutes');
const morgan = require('morgan');
const path = require('path')


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/task', taskRouter);

// localhost:4000/auth/register

const port = 4000;

app.use(express.static(path.join(__dirname + "/public")))

app.listen(port, () => {
	console.log(`server is running on port`, port);
});

