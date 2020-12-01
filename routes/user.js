const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const {User} = require('../database1/models')

// get all users
router.get('/', async (req, res) => {
    await User.findAll().then((users) => res.json(users))
  })
// get user by username
router.get('/userName', async (req, res) => {
  console.log(User)
    await User.findOne({ userName: req.params.userName })
})

//get user by id
  router.get('/:id', async (req, res) => {
    console.log(User)
      await User.findOne({ id: req.params.id })
  })
  // post new user signup
  router.post("/SignUp", async (req, res) => {
    console.log(req.body)
    const UserNameExist = await User.findOne({
      where: { userName: req.body.userName}
    });
    if(UserNameExist){
      return res.status(400).send("User already exist");
    };
    const phoneNumberExist = await User.findOne({
      where: { phoneNumber: req.body.phoneNumber},
    });
    if(phoneNumberExist){
      return res.status(400).send("User already exist");
    };
    const emailExist = await User.findOne({
      where: { email: req.body.email},
    });
    if(emailExist){
      return res.status(400).send("User already exist");
    };  
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName:req.body.userName,
        email: req.body.email,
         password: hashPassword,
         confirmPassword: hashPassword,
          dateOfBirth: req.body.dateOfBirth, 
           phoneNumber: req.body.phoneNumber,
            description: req.body.description,
              profileImage: req.body.profileImage,
               coverImage: req.body.coverImage,
    }).then((user) => res.json(user));
  });

  //login user
  router.post("/login", async (req, res) => {
    const user = await User.findOne({ where: {userName: req.body.userName} });
    if (!user) return res.status(400).send("Invalid userName or email address");
    const userEmail = await User.findOne({where: {email: req.body.email}});
    if (!userEmail) return res.status(400).send("Invalid userName or email address")
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Invalid password ");
    return res.status(200).send("welcome");
  });
  router.put("/:id", async (req, res) => {
    User.findByPk(req.params.id).then((users) => {
      users
        .update({
            lastName: req.body.lastName,
            userName:req.body.userName,
            email: req.body.email,
             password: req.body.password,
             confirmPassword: req.body.confirmPassword,
              dateOfBirth: req.body.dateOfBirth,
               phoneNumber: req.body.phoneNumber,
                description: req.body.description,
                  profileImage: req.body.profileImage,
                   coverImage: req.body.coverImage,
        })
        .then((users) => {
          res.json(users);
        });
    });
  });


  module.exports = router;
