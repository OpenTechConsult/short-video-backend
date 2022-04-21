import mongoose from 'mongoose';
const { Schema } = mongoose;

const shortVideoSchema = new Schema({
    url: String,
    channel: String,
    description: String,
    song: String,
    likes: String,
    shares: String,
    messages: String
});

const ShortVideo = mongoose.model('ShortVideo', shortVideoSchema);

export default ShortVideo;