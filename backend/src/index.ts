import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import equipmentRoutes from './routes/equipment';

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use('/equipment', equipmentRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
