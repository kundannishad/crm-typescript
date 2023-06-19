import express from 'express';
import userRoute from './routes/user';
import AutRoute from './routes/auth'

const app = express();
app.use(express.json());
app.use('/api/v1', userRoute);
app.use('/api/v1', AutRoute);

export default app
