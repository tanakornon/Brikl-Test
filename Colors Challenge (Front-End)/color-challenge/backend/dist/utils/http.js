"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = exports.BadRequest = exports.OK = void 0;
function OK(res, message) {
    const status = 200;
    if (message == undefined) {
        const rlt = {
            status: status,
            message: 'Successful'
        };
        res.status(status).json(rlt);
    }
    else {
        res.status(status).json({
            data: message,
        });
    }
}
exports.OK = OK;
function BadRequest(res, message = 'Bad Request') {
    const status = 400;
    const rlt = {
        status: status,
        message
    };
    res.statusMessage = message;
    res.status(status).json(rlt);
}
exports.BadRequest = BadRequest;
function InternalServerError(res, error) {
    let message = 'Internal Server Error';
    if (error instanceof Error) {
        message = error.message;
    }
    const rlt = {
        status: 500,
        message
    };
    res.statusMessage = message;
    res.status(500).json(rlt);
}
exports.InternalServerError = InternalServerError;
