export enum ColorSpaceType {
  HSL = 'hsl',
  RGB = 'rgb',
  BRGB = 'brgb',
}

export interface IColorSpace {
  toSvgColor(): string;
}