import express from 'express';
import cors from 'cors';
import appointmentRoutes from './routes/appointments';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/appointments', appointmentRoutes);

app.get('/', (res) => console.log('API is running'));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
