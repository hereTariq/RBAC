const express = require('express');
const userRoutes = require('./routes/user');
const app = express();

app.set('view engine', 'ejs');

//health check
app.get('/', (req, res) => {
    res.send('Hello World!!');
});

app.use('/', userRoutes);

app.use((req, res, next) => {
    let error = { status: 404, message: 'Not Found' };
    // res.status(error.status).send(error)
    next(error);
});

app.use((err, req, res, next) => {
    let status = err.status || 500;
    res.status(status).send({ status, message: err.message });
});

const PORT = 4900;
app.listen(PORT, () =>
    console.log(`server is running on http://localhost:${PORT}`)
);
