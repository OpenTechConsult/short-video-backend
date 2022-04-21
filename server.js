import express from 'express';
import mongoose from 'mongoose';

// App config
const app = express();
const port = process.env.PORT || 9000;

// Middleware


// DB config


// Routes
app.get('/', (req, res) => res.status(200).send('Hello TheWebdev!'));

// Listener
app.listen(port, () => console.log(`Server is listening on port: ${port}`));