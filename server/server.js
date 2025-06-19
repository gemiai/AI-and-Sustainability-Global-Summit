import express from 'express';
import cors from 'cors';
import scheduleRouter from './routes/schedule.js';
import sponsorsRouter from './routes/sponsors.js';
import homeRouter from './routes/home.js';


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', scheduleRouter);
app.use('/api', sponsorsRouter);
app.use('/api', homeRouter);


const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));