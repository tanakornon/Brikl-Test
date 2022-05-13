"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorService = void 0;
const colorSpaceFactory_1 = require("../models/colorSpaceFactory");
const generateSwatches = (n) => {
    const swatches = [];
    for (let i = 0; i < n; i++) {
        swatches.push(colorSpaceFactory_1.ColorSpaceFactory.randomColorSpace().toResponse());
    }
    return swatches;
};
exports.colorService = {
    generateSwatches
};
