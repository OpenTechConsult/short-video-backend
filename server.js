import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import ShortVideo from './dbModel.js';

// App config
const app = express();
const port = process.env.PORT || 9000;
const connection_url = 'mongodb+srv://eagboka:azerty123@shortvideomerndb.ydf1p.mongodb.net/shortvideodb?retryWrites=true&w=majority';

// Middleware
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// API Endpoints - Routes
app.get('/', (req, res) => res.status(200).send('Hello TheWebdev!'));

app.post('/v2/posts', (req, res) => {
    const dbVideos = req.body;
    ShortVideo.create(dbVideos, (err, data) => {
        if (err) { 
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
})

app.get('/v2/posts', (req, res) => {
    ShortVideo.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
})

// Listener
app.listen(port, () => console.log(`Server is listening on port: ${port}`));