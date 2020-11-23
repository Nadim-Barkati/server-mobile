const express = require('express') ;
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require('dotenv').config()

const PORT = 3000; 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// helmet
// sequelize
// 

app.use('/User', require("./database1/routes/User.js"));
// app.use('/Media', require("./routes/media.js"));
// app.use('/Adress', require("./routes/adress.js"));
// app.use('/Comment',require("./routes/CommentsRoutes.js"));
app.use('/Post',require("./database1/routes/PostRoutes.js"));
// app.use('/Likes',require("./routes/LikesRoutes.js"));

app.get('/', function (req,res) {
  res.send('Hello');
});



app.listen(process.env.PORT || PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`);
  });