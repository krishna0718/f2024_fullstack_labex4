const express = require('express');
const app = express();
const port = 3000;


app.get('/hello', (req, res) => {
    res.send('Hello Express JS');
});

// Route to handle GET /user with query parameters
app.get('/user', (req, res) => {
    const firstname = req.query.firstname || 'Krishna';
    const lastname = req.query.lastname || 'Thakkar';
    res.json({ firstname, lastname });
});

// Route to handle POST /user with path parameters
app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
