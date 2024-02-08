const express= require('express');
const { parse } = require('path');
const app = express();
const port = 3000;

app.use(express.json());

let dictionary = {
    id: 1,
    word: "js",
    defenition: "coding language",
    examples: "exampl1",
}

// getEntry
app.get('/dic/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const entry = dictionary.find(e => e.id === id);
    if (entry) {
        console.log(entry);
        res.send(entry)
    }
    else res.status(404).send;
})

//get all enteries
app.get('/dic', (req, res) => {
    res.send(dictionary);
});

//add new entry
// POST to add a new dictionary entry
app.post('/dictionary', (req, res) => {
    const newEntry = {
        id: dictionary.length + 1, // Simple ID assignment based on the length of the dictionary array
        word: req.body.word,
        definition: req.body.definition,
        examples: req.body.examples
    };
    dictionary.push(newEntry);
    res.send({ message: "Entry added", entry: newEntry });
});


//delete entry

app.listen(port, () => {
  console.log(`Dictionary app listening at http://localhost:${port}`);
});

