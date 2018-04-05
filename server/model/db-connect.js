
const mongoose=require('mongoose');
mongoose.Promise=global.Promise;    
const LOCAL_MONGO = 'mongodb://localhost:27017/Geolocation';
const MONGO_URI = process.env.MONGODB_URI || LOCAL_MONGO;
mongoose.connect(MONGO_URI)
.then((res)=>{ console.log('connected')})
.catch((err)=>{ 
   console.log(err);
});

module.exports={
    mongoose
}