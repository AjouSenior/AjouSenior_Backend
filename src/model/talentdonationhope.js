import mongoose from 'mongoose';
const {Schema} = mongoose;

const talentdonationhopeSchema = new Schema({
    donationId : {
        type : Object
    },
    userId : {
        type : Object
    }
});

export default mongoose.model('Talentdonationhope', talentdonationhopeSchema,"Talentdonationhope");
