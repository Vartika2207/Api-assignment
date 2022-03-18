const mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/olympics",{
    useNewUrlParser:true,
     useUnifiedTopology:true,
}).then(()=>{
    console.log("Connection Successfully Established")
}).catch((e)=>{
    console.log("Connection Error!!");
});