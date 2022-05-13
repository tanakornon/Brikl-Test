import { ColorSpaceType, HSLColorResponse, IColorSpace } from '../types/color.type';
import { randomInteger } from '../utils/random';

class HSLColor implements IColorSpace {
  private type = ColorSpaceType.HSL;

  private MAX_HUE = 360;
  private MAX_SATURATION = 100;
  private MAX_LIGHTNESS = 100;

  private hue: number;
  private saturation: number;
  private lightness: number;

  constructor(h = 0, s = 0, l = 0) {
    this.hue = h;
    this.saturation = s;
    this.lightness = l;
  }

  public random(): void {
    this.hue = randomInteger(this.MAX_HUE);
    this.saturation = randomInteger(this.MAX_SATURATION);
    this.lightness = randomInteger(this.MAX_LIGHTNESS);
  }

  public toResponse(): HSLColorResponse {
    const res: HSLColorResponse = {
      type: this.type,
      hue: this.hue,
      saturation: this.saturation,
      lightness: this.lightness
    };
    return res;
  }
}

export { HSLColor };
