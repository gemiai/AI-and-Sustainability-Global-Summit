// import express from 'express';
// import cors from 'cors';
// import scheduleRouter from './routes/schedule.js';
// import sponsorsRouter from './routes/sponsors.js';
// import homeRouter from './routes/home.js';

// const app = express();

// // Configure CORS for deployment
// const corsOptions = {
//   origin: process.env.NODE_ENV === 'production' 
//     ? ['https://ai-sustainability-global-summit.gemi-ai.tech']
//     : 'http://localhost:3000',
//   credentials: true,
//   optionsSuccessStatus: 200
// };

// app.use(cors(corsOptions));
// app.use(express.json());

// app.use('/api', scheduleRouter);
// app.use('/api', sponsorsRouter);
// app.use('/api', homeRouter);

// const PORT = process.env.PORT || 4001;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));