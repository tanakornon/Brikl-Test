import { Express } from 'express';
import { colorController } from '../controllers/color.controller';

export const registerColorRoute = (app: Express) => {
  app.get('/color/random/:size', colorController.getSwatchesByN);
  app.get('/color/random', colorController.getSwatches);
};
