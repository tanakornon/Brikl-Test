export interface HSLColorResponse {
  type: ColorSpaceType;
  hue: number;
  saturation: number;
  lightness: number;
}

export interface RGBColorResponse {
  type: ColorSpaceType;
  red: number;
  green: number;
  blue: number;
}

export interface BRGBColorResponse {
  type: ColorSpaceType;
  red: number;
  green: number;
  blue: number;
}

export type ColorSpaceResponse = HSLColorResponse | RGBColorResponse | BRGBColorResponse;

export enum ColorSpaceType {
  HSL = 'hsl',
  RGB = 'rgb',
  BRGB = 'brgb'
}

export interface IColorSpace {
  random(): void;
  toResponse(): ColorSpaceResponse;
}
