import express from 'express';

import { logger } from './logger';
import { requestHandler } from './controller';

const app = express();

app.use(requestHandler);
app.listen(3000);

logger('app is running on port 3000');

export { app };
