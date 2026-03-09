import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);

const index = (req, res) => res.sendFile(join(dirname(filename), '..', 'views', 'application', 'index.html'));

export default { index };
