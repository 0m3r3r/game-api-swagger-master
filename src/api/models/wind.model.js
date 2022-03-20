import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import Decimal128 from "mongoose";
const Schema = mongoose.Schema;


const WindSchema = new Schema({
    windRot: {
        type: Decimal128,
        required: [false, 'wind rot']
    },
    windStrenght: {
        type: Decimal128,
        required: [false, 'wind Strenght']
    },
    time: {
        type: Decimal128,
        required: [false, 'time ']
    }
});

WindSchema.plugin(mongoosePaginate);

export default mongoose.model('Wind', WindSchema);
