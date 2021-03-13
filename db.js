const mongoose = require ('mongoose');
  
     mongoose.connect('mongodb+srv://Birendra_jha:Birendra@005@cluster0.uds3n.mongodb.net/Sunetra?retryWrites=true&w=majority',{
     useNewUrlParser:true,
     useUnifiedTopology:true
 }).then(()=>{
     console.log('connected to mongo');
 }).catch((err)=>{
     console.log('error connecting to mongo',err);
})