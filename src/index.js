import { PORT } from './config.js';
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import router from './router.js';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(dirname, 'views'));

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.warn(`Listening on port ${PORT}`));
