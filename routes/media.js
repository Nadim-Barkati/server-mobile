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
        fileUrl:req.body.fileUrl,
        duration:req.body.duration,
        isVideo : req.body.isVideo,
        postID : req.body.post
    }).then((user) => res.json(user));
  });























module.exports = router;
