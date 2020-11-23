const express = require('express');
const router = express.Router();
const Comment = require('../models/CommentSchema');
const { cloudinary } = config.get('cloudinary.config');
const Sequelize = require('sequelize');
const Op=Sequelize.Op

//get all comments
router.get('/', async(req, res) => {
    await Comment.findAll().then((comments) => res.json(comments))
        .catch((err) => console.log(err))
})


//get comments by id
router.get('/:id', async(req, res) => {
    await Comment.findByPk(req.params.id).then((comments) => res.json(comments))
        .catch((err) => console.log(err))
})


//add a comment
router.post('/addComment', async(req, res) => {
    console.log(req.body)
    await Comment.create({
            idPost: req.body.idPost,
            userId: req.body.userId,
            content: req.body.content,
        })
        .then((comment) => res.json(comment))
        .catch((err) => console.log(err))
})



//update a comment
router.put('/:id', async(req, res) => {
    Comment.findByPk(req.params.id).then((comments) => {
        comments.update({
            content: req.body.content,
           
            }).then((comments) => {
                res.json(comments);
            });
        })
        .catch((err) => console.log(err))
})


//delete a comment
router.delete('/:id', async(req, res) => {
    await Comment.findByPk(req.params.id).then((comments) => {
            comments.destroy();
        }).then(() => {
            res.json("deleted");
        })
        .catch((err) => console.log(err))
});


//delete comments for a specific userId
router.delete('/', async(req, res) => {
    const userId=req.body.userId;
    var condition = userId ? { userId: { [Op.like]: `%${userId}%` } } : null;
    await Comment.destroy({ where: {condition}, truncate: true }).then(() => res.json("cleared"))
        .catch((err) => console.log(err))
});


module.exports = router;