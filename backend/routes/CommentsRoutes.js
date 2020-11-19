const express = require('express');
const router = express.Router();
const Comment = require('../models/CommentSchema');

router.get('/', async(req, res) => {
    await Comment.findAll().then((comments) => res.json(comments))
        .catch((err) => console.log(err))
})

router.get('/:id', async(req, res) => {
    await Comment.findByPk(req.params.id).then((comments) => res.json(comments))
        .catch((err) => console.log(err))
})

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

router.put('/:id', async(req, res) => {
    Comment.findByPk(req.params.id).then(() => {
        comments.update({
            content: req.body.Content,
           
            }).then((comments) => {
                res.json(comments);
            });
        })
        .catch((err) => console.log(err))
})

router.delete('/:id', async(req, res) => {
    await Comment.findByPk(req.params.id).then((comments) => {
            comments.destroy();
        }).then(() => {
            res.json("deleted");
        })
        .catch((err) => console.log(err))
});

router.delete('/', async(req, res) => {
    await Comment.destroy({ where: {}, truncate: true }).then(() => res.json("cleared"))
        .catch((err) => console.log(err))
});


module.exports = router;