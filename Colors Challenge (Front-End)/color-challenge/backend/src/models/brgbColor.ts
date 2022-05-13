import { BRGBColorResponse, ColorSpaceType, IColorSpace } from '../types/color.type';
import { randomInteger } from '../utils/random';

class BRGBColor implements IColorSpace {
  private type = ColorSpaceType.BRGB;

  private MAX_RED = 10000;
  private MAX_GREEN = 10000;
  private MAX_BLUE = 10000;

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

  public toResponse(): BRGBColorResponse {
    const res: BRGBColorResponse = {
      type: this.type,
      red: this.red,
      green: this.green,
      blue: this.blue
    };
    return res;
  }
}

export { BRGBColor };
