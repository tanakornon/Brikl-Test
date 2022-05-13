import { ColorSpaceType, IColorSpace } from '../types/color.type';
import { BRGBColor } from './brgbColor';
import { HSLColor } from './hslColor';
import { RGBColor } from './rgbColor';

export class ColorSpaceFactory {
  public static getColorSpace(color: any): IColorSpace {
    // NOTE: I have skip validate object step, using 'any' as type is bad practice.
    const type: ColorSpaceType = color.type;
    switch (type) {
      case ColorSpaceType.HSL:
        return new HSLColor(color.hue, color.saturation, color.lightness);
      case ColorSpaceType.RGB:
        return new RGBColor(color.red, color.green, color.blue);
      case ColorSpaceType.BRGB:
        return new BRGBColor(color.red, color.green, color.blue);
    }
  }
}
