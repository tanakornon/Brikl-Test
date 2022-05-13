import { Request, Response } from 'express';
import { colorService } from '../services/color.service';
import { BadRequest, InternalServerError, OK } from '../utils/http';

const getSwatches = (req: Request, res: Response) => {
  try {
    const data = colorService.generateSwatches(5);
    return OK(res, data);
  } catch (err: unknown) {
    return InternalServerError(res, err);
  }
};

const getSwatchesBySize = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const size = parseInt(params.size);

    if (isNaN(size)) {
      return BadRequest(
        res,
        `Require N parameter as number (got '${params.n}')`
      );
    }

    const data = colorService.generateSwatches(size);
    return OK(res, data);
  } catch (err: unknown) {
    return InternalServerError(res, err);
  }
};

export const colorController = {
  getSwatches,
  getSwatchesByN: getSwatchesBySize
};
