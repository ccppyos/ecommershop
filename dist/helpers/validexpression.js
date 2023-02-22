"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.valideexpresion = void 0;
const valideexpresion = (price) => {
    if (price < 0) {
        throw new Error("Price is < 0");
    }
};
exports.valideexpresion = valideexpresion;
//# sourceMappingURL=validexpression.js.map