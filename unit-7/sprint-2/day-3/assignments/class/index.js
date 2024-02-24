const mongoose = require('mongoose');
const  url = 'mongodb+srv://viveksonitech:8564910720@cluster0.z7gof.mongodb.net/students';

const empSchema = mongoose.Schema({
    name: String,
    age: Number,
    city : String,
});

const employesModel= mongoose.model("employes",empSchema);
const main = async ()=>{
    try {
        await mongoose.connect(url);
        console.log('connect to data base successfully');
        await employesModel.insert({name : "nihal" , age : 32, city : 'blr'})
        
    } catch (error) {
        console.log(error);
    }
}
main();
