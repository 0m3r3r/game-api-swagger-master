import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    objId: {
        type: Number,
        required: [true, 'Greet is required.']
    },
    pos: {
        type: [],
        required: [true, 'rot']
    },
    rot: {
        type: [],
        required: [true, 'rot']
    }
});

PlayerSchema.plugin(mongoosePaginate);

export default mongoose.model('Player', PlayerSchema);
