const express = require('express')
const app = express()
const cors = require('cors');
app.use(express.json())
require('./db');
const jwt=require('jsonwebtoken')
// app.use(cors());

app.use(cors({
    origin: "http://localhost:3000"

}));

const Store = require('./models/Schema');
const data = require('./models/data');



// const insertDataToDb = async () => {
//    await Store.deleteMany({});
//     await Store.insertMany(data);
// }
// insertDataToDb();

app.get('/getfake/:id', async (req, res) => {
        const id = Number(req.params.id);
        const data = await Store.find({id:id})
        res.status(200).send(data);
    
})


app.post('/login',async(req,res)=>{
      const id  = req.body.id;
      const datas = await Store.find({id:id});
      const ids = data[0]._id;
      const token = jwt.sign(ids.toString(),'thisismyfinalproject');
      res.status(200).send({data:datas[0],token:token,status:'success',message:"Login successful"})
       
})






const port = process.env.PORT || 3005


app.listen(port, () => {
    console.log('server is running on port 3005')
})