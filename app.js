const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const options = {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const istDateTime = new Date().toLocaleString('en-IN', options);
    res.send(`
        <html>
            <head>
                <title>IST Date and Time</title>
            </head>
            <body>
                <h1>Current IST Date and Time</h1>
                <p>${istDateTime}</p>
            </body>
        </html>
    `);
});

// Expose metrics endpoint for Prometheus
app.get('/metrics', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send('# HELP http_requests_total Total HTTP requests\n# TYPE http_requests_total counter\nhttp_requests_total 1\n');
});

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});