"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fail = exports.success = void 0;
const success = (res, data) => {
    return res.json({ statuscode: 200, body: data });
};
exports.success = success;
const fail = (res, error) => {
    res.status(400).json({ statuscode: 400, error });
};
exports.fail = fail;
//# sourceMappingURL=apiResponses.js.map