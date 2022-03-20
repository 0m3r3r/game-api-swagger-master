import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
const Schema = mongoose.Schema;


const WindSchema = new Schema({
    windRot: {
        type: Number,
        required: [false, 'wind rot']
    },
    windStrenght: {
        type: Number,
        required: [false, 'wind Strenght']
    },
    time: {
        type: Number,
        required: [false, 'time ']
    }
});

WindSchema.plugin(mongoosePaginate);

export default mongoose.model('Wind', WindSchema);
