import express from 'express';
import mongoose from 'mongoose';

// App config
const app = express();
const port = process.env.PORT || 9000;
const connection_url = 'mongodb+srv://eagboka:azerty123@shortvideomerndb.ydf1p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// Middleware


// DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Routes
app.get('/', (req, res) => res.status(200).send('Hello TheWebdev!'));

// Listener
app.listen(port, () => console.log(`Server is listening on port: ${port}`));