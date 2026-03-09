import { PORT } from './config.js';
import express from 'express';
import router from './router.js';

const app = express();

app.use(router);
app.listen(PORT, () => console.warn(`Listening on port ${PORT}`));
