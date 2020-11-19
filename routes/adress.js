const express = require('express');
const router = express.Router();
const Adress = require('../models/adressSchema');



router.get('/', async (req, res) => {
    await Adress.findAll().then((users) => res.json(users))
  })
  router.get('/:id', async (req, res) => {
      await Adress.findOne({ id: req.params.id })
  })






















module.exports = router;
