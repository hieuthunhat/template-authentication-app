import express from 'express';
import cors from 'cors';
import apiRoutes from '../routes/api.js';
import cookieParser from 'cookie-parser';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', apiRoutes);

// io.on('connection', (socket) => {
//   console.log('a user connected');
//     //sends the message to all the users on the server
//   // socket.on('message', (data) => {
//   //   io.emit('messageResponse', data);
//   // });

//   socket.on('disconnect', () => {
//     console.log('🔥: A user disconnected');
//   });
// });

export default app;