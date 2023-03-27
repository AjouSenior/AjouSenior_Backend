import mongoose from 'mongoose';
const {Schema} = mongoose;

const hopeSchema = new Schema({
    seniorcenter :{
        type : String
    },
    writer :{
        type : String
    },
    date :{
        type : Date
    },
    content : {
        type: String
    },
    needpeople : {
        type : String
    }
});

export default mongoose.model('Hope', hopeSchema,"Hope");
