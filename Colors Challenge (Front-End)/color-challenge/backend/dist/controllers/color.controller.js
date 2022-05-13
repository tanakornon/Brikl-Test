"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorController = void 0;
const color_service_1 = require("../services/color.service");
const http_1 = require("../utils/http");
const getSwatches = (req, res) => {
    try {
        const data = color_service_1.colorService.generateSwatches(5);
        return (0, http_1.OK)(res, data);
    }
    catch (err) {
        return (0, http_1.InternalServerError)(res, err);
    }
};
const getSwatchesBySize = (req, res) => {
    try {
        const params = req.params;
        const size = parseInt(params.size);
        if (isNaN(size)) {
            return (0, http_1.BadRequest)(res, `Require N parameter as number (got '${params.n}')`);
        }
        const data = color_service_1.colorService.generateSwatches(size);
        return (0, http_1.OK)(res, data);
    }
    catch (err) {
        return (0, http_1.InternalServerError)(res, err);
    }
};
exports.colorController = {
    getSwatches,
    getSwatchesByN: getSwatchesBySize
};
