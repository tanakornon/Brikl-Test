import { ColorSpaceFactory } from "../models/colorSpaceFactory";
import { IColorSpace } from "../types/color.type";

const baseUrl = 'http://localhost:3001';

export const getColorSwatch = async (): Promise<IColorSpace[]> => {
  const url = `${baseUrl}/color/random`;

  const response = await fetch(url);
  const json = await response.json();

  const colors: IColorSpace[] = json.data.map((color: any) => {
    return ColorSpaceFactory.getColorSpace(color);
  });

  return colors;
};
