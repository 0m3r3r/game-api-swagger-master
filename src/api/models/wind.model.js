import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import {Decimal} from "mongoose/lib/schema";
const Schema = mongoose.Schema;


const WindSchema = new Schema({
    windRot: {
        type: mongoose.Decimal128,
        required: [false, 'wind rot']
    },
    windStrenght: {
        type: Decimal,
        required: [false, 'wind Strenght']
    },
    time: {
        type: Decimal,
        required: [false, 'time ']
    }
});

WindSchema.plugin(mongoosePaginate);

export default mongoose.model('Wind', WindSchema);
