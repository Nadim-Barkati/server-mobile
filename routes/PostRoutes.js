const express = require('express');
const router = express.Router();
const Post = require('../models/PostSchema');
const Op=sequelize.Sequelize.Op


//add a post
router.post('/addPost', async(req, res) => {
    console.log(req.body)
    await Post.create({
            content: req.body. content,
            userId: req.body.userId,
            urlMedia: req.body.urlMedia,
        })
        .then((post) => res.json(post))
        .catch((err) => console.log(err))
})


//get all posts for a userId
router.get('/', async(req, res) => {
    const userId=req.body.userId;
    var condition = userId ? { userId: { [Op.like]: `%${userId}%` } } : null;
    await Post.findAll({ where: condition }).then((post) => res.json(post))
        .catch((err) => console.log(err))
})


//get post by id
router.get('/:id', async(req, res) => {
    await Post.findByPk(req.params.id).then((post) => res.json(post))
        .catch((err) => console.log(err))
})


//update post
router.put('/:id', async(req, res) => {
    Post.findByPk(req.params.id).then(() => {
        post.update({
            content: req.body.content,
           
            }).then((post) => {
                res.json(post);
            });
        })
        .catch((err) => console.log(err))
})


//delete post
router.delete('/:id', async(req, res) => {
    await Post.findByPk(req.params.id).then((post) => {
            post.destroy();
        }).then(() => {
            res.json("deleted");
        })
        .catch((err) => console.log(err))
});


//delete all posts for a sepecific user id
router.delete('/', async(req, res) => {
    const userId=req.body.userId;
    var condition = userId ? { userId: { [Op.like]: `%${userId}%` } } : null;
    await Post.destroy({ where: {condition}, truncate: true }).then(() => res.json("cleared"))
        .catch((err) => console.log(err))
});


module.exports = router;