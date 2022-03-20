import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
const Schema = mongoose.Schema;

const ParametersSchema = new Schema({
    params: {
        type: [WindSchema],
        required: [true, 'wind root']
    },

});

const WindSchema = new Schema({
    windRot: {
        type: Float32Array,
        required: [true, 'wind rot']
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

WindSchema.plugin(mongoosePaginate);
ParametersSchema.plugin(mongoosePaginate);

export default mongoose.model('Parameters', ParametersSchema);
