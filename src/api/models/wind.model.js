import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
const Schema = mongoose.Schema;


const WindSchema = new Schema({
    windRot: {
        type: mongoose.Decimal128,
        required: [false, 'wind rot']
    },
    windStrenght: {
        type: mongoose.Decimal128,
        required: [false, 'wind Strenght']
    },
    time: {
        type: mongoose.Decimal128,
        required: [false, 'time ']
    }
});

WindSchema.plugin(mongoosePaginate);

export default mongoose.model('Wind', WindSchema);
