"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerColorRoute = void 0;
const color_controller_1 = require("../controllers/color.controller");
const registerColorRoute = (app) => {
    app.get('/color/random/:size', color_controller_1.colorController.getSwatchesByN);
    app.get('/color/random', color_controller_1.colorController.getSwatches);
};
exports.registerColorRoute = registerColorRoute;
