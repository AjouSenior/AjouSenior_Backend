import mongoose from 'mongoose';
const {Schema} = mongoose;

const bookSchema = new Schema({
    title :{
        type : String
    },
    author :{
        type : String
    }
});

export default mongoose.model('Book', bookSchema);
