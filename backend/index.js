const express = require('express') ;
const app = express();
const PORT = 3000; 
// helmet
// sequelize
// 

app.get('/', (req, res)=>
    res.send('hello world')
)









app.listen(process.env.PORT || PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`);
  });