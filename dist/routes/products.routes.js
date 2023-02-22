"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoutes = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const products_controller_1 = require("../controllers/products.controller");
const valid_fields_middleware_1 = require("../middlewares/valid-fields.middleware");
exports.productsRoutes = (0, express_1.Router)();
const productsControlller = new products_controller_1.ProductsController();
exports.productsRoutes.get('/', productsControlller.getAll);
exports.productsRoutes.get('/:id', [
    (0, express_validator_1.check)('id', 'Id param must be a number value').isNumeric(),
    (0, express_validator_1.check)('id', 'Id param must be a number from 1 to 32').isInt({ min: 1, max: 32 }),
    valid_fields_middleware_1.ValidFields
], productsControlller.getOne);
exports.productsRoutes.post('/', productsControlller.create);
exports.productsRoutes.put('/:id', productsControlller.update);
exports.productsRoutes.delete('/:id', productsControlller.remove);
//# sourceMappingURL=products.routes.js.map