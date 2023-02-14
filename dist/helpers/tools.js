"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomDate = exports.randomFloatTwoDig = exports.randomInt = void 0;
const randomInt = (max, min = 0) => {
    return Math.floor(Math.random() * (max - min)) + min;
};
exports.randomInt = randomInt;
const randomFloatTwoDig = (max, min = 0) => {
    return Math.round(((Math.random() * (max - min) + min) * 100)) / 100;
};
exports.randomFloatTwoDig = randomFloatTwoDig;
const randomDate = (from, to) => {
    const fromTime = from.getTime();
    const toTime = to.getTime();
    return new Date(fromTime + Math.random() * (toTime - fromTime));
};
exports.randomDate = randomDate;
//# sourceMappingURL=tools.js.map