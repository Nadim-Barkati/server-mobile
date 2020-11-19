const express = require('express');
const router = express.Router();
const Media = require('../models/mediaSchema');


router.get('/', async (req, res) => {
    await Media.findAll().then((users) => res.json(users))
  })
  router.get('/:id', async (req, res) => {
      await Media.findOne({ id: req.params.id })
  })
  router.post("/SignUp", async (req, res) => {
    const urlExists = await Media.findOne({
      where: { fileUrl: req.body.fileUrl },
    });
    await Users.create({
        fileUrl:Sequelize.String,
        duration:Sequelize.Integer,
        isVideo : Sequelize.Boolean,
        postID : Sequelize.Integer
    }).then((user) => res.json(user));
  });























module.exports = router;
