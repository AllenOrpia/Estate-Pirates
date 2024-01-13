import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { userRoutes } from './routes/users.js';
import { propertyRoutes } from './routes/properties.js';




dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());


/* ROUTES */
app.use('/api/user', userRoutes);
app.use('/api/property', propertyRoutes)



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})