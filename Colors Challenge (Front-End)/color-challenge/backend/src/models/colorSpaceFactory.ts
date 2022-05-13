import { ColorSpaceType, IColorSpace } from '../types/color.type';
import { randomInteger } from '../utils/random';
import { BRGBColor } from './brgbColor';
import { HSLColor } from './hslColor';
import { RGBColor } from './rgbColor';

class ColorSpaceFactory {
  private static colorPool = [HSLColor, RGBColor, BRGBColor];

  public static getColorSpace(type: ColorSpaceType): IColorSpace {
    switch (type) {
      case ColorSpaceType.HSL:
        return new HSLColor();
      case ColorSpaceType.RGB:
        return new RGBColor();
      case ColorSpaceType.BRGB:
        return new BRGBColor();
    }
  }

  public static randomColorSpace(): IColorSpace {
    const rand = randomInteger(this.colorPool.length);
    const color: IColorSpace = new this.colorPool[rand]();
    color.random();
    return color;
  }
}

export { ColorSpaceFactory };
