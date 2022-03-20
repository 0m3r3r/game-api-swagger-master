import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import {Decimal} from "mongoose/lib/schema";
const Schema = mongoose.Schema;


const WindSchema = new Schema({
    windRot: {
        type: Decimal,
        required: [true, 'wind rot']
    },
    windStrenght: {
        type: Decimal,
        required: [true, 'wind Strenght']
    },
    time: {
        type: Decimal,
        required: [true, 'time ']
    }
});

WindSchema.plugin(mongoosePaginate);

export default mongoose.model('Wind', WindSchema);
