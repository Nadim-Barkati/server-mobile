const express = require('express');
const router = express.Router();
const Likes = require('../models/LikesSchema');
const Sequelize = require('sequelize');
const Op=Sequelize.Op


//add a like
router.post('/addLike', async(req, res) => {
    console.log(req.body)
    await Likes.create({
            IdPost: req.body.IdPost,
            userId: req.body.userId,
        })
        .then((like) => res.json(like))
        .catch((err) => console.log(err))
})


//delete post
router.delete('/:id', async(req, res) => {
    await Likes.findByPk(req.params.id).then((like) => {
            like.destroy();
        }).then(() => {
            res.json("deleted");
        })
        .catch((err) => console.log(err))
});


//delete all posts for a sepecific user id
router.delete('/', async(req, res) => {
    const userId=req.body.userId;
    var condition = userId ? { userId: { [Op.like]: `%${userId}%` } } : null;
    await like.destroy({ where: {condition}, truncate: true }).then(() => res.json("cleared"))
        .catch((err) => console.log(err))
});


module.exports = router;