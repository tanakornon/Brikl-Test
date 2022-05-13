import { IColorSpace } from "../types/color.type";

// BRGBColor can extends RGBColor but I think it will tightly coupling.
export class BRGBColor implements IColorSpace {
  private red: number;
  private green: number;
  private blue: number;

  constructor(r = 0, g = 0, b = 0) {
    this.red = this.normalize(r);
    this.green = this.normalize(g);
    this.blue = this.normalize(b);
  }

  private normalize(x: number): number {
    return Math.floor((x / 10000) * 255);
  }

  public toSvgColor(): string {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }
}
