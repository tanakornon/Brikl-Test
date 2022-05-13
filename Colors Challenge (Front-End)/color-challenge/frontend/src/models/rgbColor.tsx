import { IColorSpace } from "../types/color.type";

export class RGBColor implements IColorSpace {
  private red: number;
  private green: number;
  private blue: number;

  constructor(r = 0, g = 0, b = 0) {
    this.red = r;
    this.green = g;
    this.blue = b;
  }

  public toSvgColor(): string {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }

}
