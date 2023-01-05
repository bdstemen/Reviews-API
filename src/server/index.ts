import express from 'express';
import router from './routes.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/', router);

app.get('/pulse', (req, res) => {
    res.status(200).send('here is a response');
});

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});

