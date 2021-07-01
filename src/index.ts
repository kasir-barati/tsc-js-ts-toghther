import { logger } from './logger';
import { app } from './app';

app.on('error', (parent) => {
    logger(parent);
});
