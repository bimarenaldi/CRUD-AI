const express = require('express');
const queries = require('../queries');

const router = express.Router();

router.get('/', (req, res) => {
  queries.getAll('user')
    .then((results) => res.json(results))
    .catch((error) => res.status(500).json({ error: error.message }));
});

router.post('/', (req, res) => {
  const data = req.body;
  queries.insert('user', data)
    .then((results) => res.json(results))
    .catch((error) => res.status(500).json({ error: error.message }));
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const data = req.body;
  queries.update('user', data, id)
    .then((results) => res.json(results))
    .catch((error) => res.status(500).json({ error: error.message }));
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  queries.remove('user', id)
    .then((results) => res.json(results))
    .catch((error) => res.status(500).json({ error: error.message }));
});

module.exports = router;
