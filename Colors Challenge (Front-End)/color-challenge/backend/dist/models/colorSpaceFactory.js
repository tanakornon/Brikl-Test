"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorSpaceFactory = void 0;
const color_type_1 = require("../types/color.type");
const random_1 = require("../utils/random");
const brgbColor_1 = require("./brgbColor");
const hslColor_1 = require("./hslColor");
const rgbColor_1 = require("./rgbColor");
class ColorSpaceFactory {
    static getColorSpace(type) {
        switch (type) {
            case color_type_1.ColorSpaceType.HSL:
                return new hslColor_1.HSLColor();
            case color_type_1.ColorSpaceType.RGB:
                return new rgbColor_1.RGBColor();
            case color_type_1.ColorSpaceType.BRGB:
                return new brgbColor_1.BRGBColor();
        }
    }
    static randomColorSpace() {
        const rand = (0, random_1.randomInteger)(this.colorPool.length);
        const color = new this.colorPool[rand]();
        color.random();
        return color;
    }
}
exports.ColorSpaceFactory = ColorSpaceFactory;
ColorSpaceFactory.colorPool = [hslColor_1.HSLColor, rgbColor_1.RGBColor, brgbColor_1.BRGBColor];
