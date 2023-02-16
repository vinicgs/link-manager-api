const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// database //
const links = require('./links.json');

// Create a new link //
app.post('/links', (req, res) => {
    const { url, title } = req.body;
    const id = links.length + 1;
    const link = { id, url, title };
    links.push(link);
    res.status(201).json(link);
});

// Get all links //
app.get('/links', (req, res) => {
    res.json(links);
});

// Get a link by ID //
app.get('/links/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const link = links.find(l => l.id === id);
    if (link) {
        res.json(link);
    } else {
        res.status(404).send('Link not found');
    }
});

// Update a link by ID //
app.put('/links/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const link = links.find(l => l.id === id);
    if (link) {
        link.url = req.body.url || link.url;
        link.title = req.body.title || link.title;
        res.json(link);
    } else {
        res.status(404).send('Link not found');
    }
});

// Delete a link by ID //
app.delete('/links/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const linkIndex = links.findIndex(l => l.id === id);
    if (linkIndex !== -1) {
        links.splice(linkIndex, 1);
        res.sendStatus(204);
    } else {
        res.status(404).send('Link not found');
    }
});

// Start the server //
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});