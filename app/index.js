const express = require('express');
const app = express();

//app.get();
//app.post();
//app.put(;
//app.delete();

app.get('/', (req, res) =>{
   res.send('Hello Paul !');
});

app.get('/api/test', (req, res)=>{
    
})
app.listen(8000, () => console.log('listening on port 8000'));