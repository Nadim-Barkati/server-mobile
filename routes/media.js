const express = require('express');
const router = express.Router();
const Media = require('../models/mediaSchema');


router.get('/', async (req, res) => {
    await Media.findAll().then((media) => res.json(media))
  })
  router.get('/:id', async (req, res) => {
      await Media.findOne({ id: req.params.id })
  })
  router.post("/AddMedia", async (req, res) => {
    console.log(req.body)
    await Users.create({
        fileUrl:req.body.fileUrl,
        duration:req.body.duration,
        isVideo : req.body.isVideo,
        postID : req.body.post
    })
    .then((adress) => res.json(adress))
    .catch((err) => console.log(err))
  })
router.put("/:id",async (req, res)=>{
  Media.findByPk(req.params.id).then((media) => {
    media
      .update({
        fileUrl:req.body.fileUrl,
        duration:req.body.duration,
        isVideo : req.body.isVideo,
        postID : req.body.post
      })
      .then((media) => {
        res.json(media);
      });   
    })
})
router.delete("/:id", async (req, res) => {
  await Media.findByPk(req.params.id)
    .then((media) => {
      media.destroy();
    })
    .then(() => {
      res.json("deleted");
    });
});

  module.exports = router;

