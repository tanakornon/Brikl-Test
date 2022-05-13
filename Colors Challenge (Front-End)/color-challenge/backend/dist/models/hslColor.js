"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HSLColor = void 0;
const color_type_1 = require("../types/color.type");
const random_1 = require("../utils/random");
class HSLColor {
    constructor(h = 0, s = 0, l = 0) {
        this.type = color_type_1.ColorSpaceType.HSL;
        this.MAX_HUE = 360;
        this.MAX_SATURATION = 100;
        this.MAX_LIGHTNESS = 100;
        this.hue = h;
        this.saturation = s;
        this.lightness = l;
    }
    random() {
        this.hue = (0, random_1.randomInteger)(this.MAX_HUE);
        this.saturation = (0, random_1.randomInteger)(this.MAX_SATURATION);
        this.lightness = (0, random_1.randomInteger)(this.MAX_LIGHTNESS);
    }
    toResponse() {
        const res = {
            type: this.type,
            hue: this.hue,
            saturation: this.saturation,
            lightness: this.lightness
        };
        return res;
    }
}
exports.HSLColor = HSLColor;
