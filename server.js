const { query } = require('express');
const express = require('express');
const app = express();

// Data
const {animals} = require("./data/animals.json");



function filterByQuery(query, animalsArray) {
    let filteredResults = animalsArray;
    if (query.diet) {
        filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
    }
    if (query.species) {
        filteredResults = filteredResults.filter(animal => animal.species === query.species);
    }
    if (query.name) {
        filteredResults = filteredResults.filter(animal => animal.name === query.name);
    }
    return filteredResults;
}

app.get('/api/animals', (req, res) => {
    let results = animals;
    if (req.query) {
        results = filterByQuery(req.query, results)
    }
    res.json(results);
});

// start server
app.listen(3001, ()=> {
    console.log(`API server now running on port 3001`);
});