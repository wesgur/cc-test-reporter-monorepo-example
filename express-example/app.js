const express = require('express');
const app = express();

const port = process.env.port || 3000;

app.get('/', (req, res) => {
    return res.send("Example!");
});

app.listen(port, () => {
    console.log(`Express server running on ${port}`);

    app.emit('APP_STARTED');
});

module.exports = app;