const express = require('express');
const router = express.Router();
const Adress = require('../models/adressSchema');



router.get('/', async (req, res) => {
    await Adress.findAll().then((users) => res.json(users))
  })
  router.get('/:id', async (req, res) => {
      await Adress.findOne({ id: req.params.id })
  })
router.post('/addAdress', async(req, res) => {
  console.log(req.body)
  await Adress.create({
      adress:req.body.adress,
        city:req.body.city,
           country:req.body.country,
              zipcode:req.body.zipcode, 
                 userId:req.body.userId,
      })
      .then((adress) => res.json(adress))
      .catch((err) => console.log(err))
})
router.put("/:id",async(req, res)=>{
  Adress.findByPk(req.params.id).then((adress) => {
    adress
    .update({
               adress:req.body.adress,
           city:req.body.city,
        country:req.body.country,
      zipcode:req.body.zipcode, 
    userId:req.body.userId,
})
.then((users) => {
  res.json(users);
});
})
})


















module.exports = router;
