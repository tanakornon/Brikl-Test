import { IColorSpace } from "../types/color.type";

export class HSLColor implements IColorSpace {
  private hue: number;
  private saturation: number;
  private lightness: number;

  constructor(h = 0, s = 0, l = 0) {
    this.hue = h;
    this.saturation = s;
    this.lightness = l;
  }

  public toSvgColor(): string {
    return `hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`;
  }
}
