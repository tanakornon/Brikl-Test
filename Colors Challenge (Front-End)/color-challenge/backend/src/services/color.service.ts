import { ColorSpaceFactory } from '../models/colorSpaceFactory';
import { ColorSpaceResponse } from '../types/color.type';

const generateSwatches = (n: number): ColorSpaceResponse[] => {
  const swatches: ColorSpaceResponse[] = [];

  for (let i = 0; i < n; i++) {
    swatches.push(ColorSpaceFactory.randomColorSpace().toResponse());
  }

  return swatches;
};

export const colorService = {
  generateSwatches
};
