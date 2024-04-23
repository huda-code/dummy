const express = require('express');
const router = express.Router();
const Form = require('../models/formModel');

router.post('/submit', (req, res) => {
  const newForm = new Form(req.body);

  newForm.save()
    .then(doc => {
      res.status(201).json(doc);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
