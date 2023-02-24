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
exports.productsRoutes.post('/', [
    (0, express_validator_1.check)('name', 'name max length is 100').isLength({ max: 100 }),
    (0, express_validator_1.check)('weight', 'weight param must be a float value').isFloat(),
    (0, express_validator_1.check)('cannabisWeight', 'cannabisWeight param must be a number value').isFloat(),
    (0, express_validator_1.check)('price', 'price param must be a number value').isNumeric(),
    (0, express_validator_1.check)('fee', 'fee param must be a number value').isFloat(),
    (0, express_validator_1.check)('sku', 'sku max length is 45').optional().isLength({ max: 45 }),
    (0, express_validator_1.check)('imageURL', 'imageURL max length is 255').optional().isLength({ max: 255 }),
    (0, express_validator_1.check)('barcode', 'barcode param must be a number value').optional().notEmpty(),
    (0, express_validator_1.check)('description', 'description param must be a number value').optional().notEmpty(),
    (0, express_validator_1.check)('cannabisVolume', 'cannabisVolume param must be a number value').optional().notEmpty(),
    (0, express_validator_1.check)('isActive', 'isActive param must be a number value').optional().isBoolean(),
    (0, express_validator_1.check)('createDate', 'createDate param must be a date value').optional().isDate(),
    (0, express_validator_1.check)('updateDate', 'updateDate param must be a date value').optional().isDate(),
    (0, express_validator_1.check)('fullProductName', 'fullProductName max length is 100').optional().isLength({ max: 100 }),
    (0, express_validator_1.check)('productSlug', 'productSlug max length is 100').optional().isLength({ max: 100 }),
    (0, express_validator_1.check)('salesPrice', 'salesPrice param must be a number value').isNumeric(),
    (0, express_validator_1.check)('inventory', 'inventory param must be a number value').isNumeric(),
    (0, express_validator_1.check)('discountAmount', 'discountAmount param must be a number value').isNumeric(),
    (0, express_validator_1.check)('productscol', 'productscol max length is 45').optional().isLength({ max: 45 }),
    (0, express_validator_1.check)('category_id', 'category_id param must be a number value').isNumeric(),
    (0, express_validator_1.check)('supplier_id', 'supplier_id param must be a number value').isNumeric(),
    valid_fields_middleware_1.ValidFields
], productsControlller.create);
exports.productsRoutes.put('/:id', productsControlller.update);
exports.productsRoutes.delete('/:id', productsControlller.remove);
//# sourceMappingURL=products.routes.js.map