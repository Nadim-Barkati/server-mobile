const express = require('express') ;
const app = express();
const PORT = 3000; 


app.get('/', (req, res)=>{
    res.send('hello worl')
})









app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`);
  });