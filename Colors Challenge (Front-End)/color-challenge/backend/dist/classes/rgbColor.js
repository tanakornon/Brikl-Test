"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RGBColor = void 0;
const color_type_1 = require("../types/color.type");
const random_1 = require("../utils/random");
class RGBColor {
    constructor(r = 0, g = 0, b = 0) {
        this.type = color_type_1.ColorSpaceType.RGB;
        this.MAX_RED = 255;
        this.MAX_GREEN = 255;
        this.MAX_BLUE = 255;
        this.red = r;
        this.green = g;
        this.blue = b;
    }
    random() {
        this.red = (0, random_1.randomInteger)(this.MAX_RED);
        this.green = (0, random_1.randomInteger)(this.MAX_GREEN);
        this.blue = (0, random_1.randomInteger)(this.MAX_BLUE);
    }
    toResponse() {
        const res = {
            type: this.type,
            red: this.red,
            green: this.green,
            blue: this.blue
        };
        return res;
    }
}
exports.RGBColor = RGBColor;
