import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import {Decimal} from "mongoose/lib/schema";
const Schema = mongoose.Schema;

const ParametersSchema = new Schema({
    params: {
        type: [WindSchema],
        required: [true, 'wind root']
    },

});

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

ParametersSchema.plugin(mongoosePaginate);

export default mongoose.model('Parameters', ParametersSchema);
