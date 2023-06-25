import express, { Request, Response } from 'express';
import helmet from "helmet";
//import cors from "cors";


import userRoute from './routes/user';
import AutRoute from './routes/auth'

const app = express();
app.use(helmet());
//app.use(cors());
app.use(express.json());

// app.use('/api/v1', (req: Request, res: Response) => {
//     res.status(200).json({ message: 'Its Working fine.' });
// });

app.use('/api/v1', userRoute);
app.use('/api/v1/users', AutRoute);

export default app
