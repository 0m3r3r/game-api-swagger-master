import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
const Schema = mongoose.Schema;

const ParametersSchema = new Schema({
    windRot: {
        type: Float32Array,
        required: [true, 'wind root']
    },
    windStrenght: {
        type: Float32Array,
        required: [true, 'wind Strenght']
    },
    time: {
        type: Float32Array,
        required: [true, 'time ']
    }
});

ParametersSchema.plugin(mongoosePaginate);


export default mongoose.model('Parameters', ParametersSchema);
