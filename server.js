const express = require('express') ;
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
// require('dotenv').config()
const server = require("http").createServer(app);
const PORT =process.env.PORT || 3000; 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// helmet
// sequelize
// 

app.use('/User', require("./routes/user.js"));
app.use('/Post',require("./routes/post.js"));
app.use('/Adress', require("./routes/adress.js"));
app.use('/Comment',require("./routes/comment.js"));
app.use('/Like',require("./routes/like.js"));

app.get('/',(req,res)=>{
res.send(data)
console.log(data);
})


server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });