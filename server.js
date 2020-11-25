const express = require('express') ;
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
// require('dotenv').config()

const PORT = 3000; 
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

app.get('/', function (req,res) {
  res.send('Hello');
});



app.listen(process.env.PORT || PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`);
  });