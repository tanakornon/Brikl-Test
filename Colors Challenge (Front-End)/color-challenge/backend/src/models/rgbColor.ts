import { ColorSpaceType, IColorSpace, RGBColorResponse } from '../types/color.type';
import { randomInteger } from '../utils/random';

class RGBColor implements IColorSpace {
  private type = ColorSpaceType.RGB;

  private MAX_RED = 255;
  private MAX_GREEN = 255;
  private MAX_BLUE = 255;

  private red: number;
  private green: number;
  private blue: number;

  constructor(r = 0, g = 0, b = 0) {
    this.red = r;
    this.green = g;
    this.blue = b;
  }

  public random(): void {
    this.red = randomInteger(this.MAX_RED);
    this.green = randomInteger(this.MAX_GREEN);
    this.blue = randomInteger(this.MAX_BLUE);
  }

  public toResponse(): RGBColorResponse {
    const res: RGBColorResponse = {
      type: this.type,
      red: this.red,
      green: this.green,
      blue: this.blue
    };
    return res;
  }
}

export { RGBColor };
