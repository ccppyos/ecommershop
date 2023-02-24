"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.suppliersRoutes = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const suppliers_controller_1 = require("../controllers/suppliers.controller");
const valid_fields_middleware_1 = require("../middlewares/valid-fields.middleware");
exports.suppliersRoutes = (0, express_1.Router)();
const suppliersControlller = new suppliers_controller_1.SuppliersController();
exports.suppliersRoutes.get('/', suppliersControlller.getAll);
exports.suppliersRoutes.get('/:id', [
    (0, express_validator_1.check)('id', 'Id param must be a number value').isNumeric(),
    (0, express_validator_1.check)('id', 'Id param must be a number from 1 to 32').isInt({ min: 1 }),
    valid_fields_middleware_1.ValidFields
], suppliersControlller.getOne);
exports.suppliersRoutes.post('/', [
    (0, express_validator_1.check)('supplierName', 'supplierName is required').notEmpty(),
    (0, express_validator_1.check)('supplierName', 'supplierName must be max ').isLength({ max: 45 }),
    (0, express_validator_1.check)('address', 'address must be max 100 ').optional().isLength({ max: 100 }),
    (0, express_validator_1.check)('email', 'email is required').notEmpty(),
    (0, express_validator_1.check)('email', 'It must be a valid email ').isEmail(),
    (0, express_validator_1.check)('email', 'email must be max 100 ').isLength({ max: 100 }),
    (0, express_validator_1.check)('phone', 'phone param must be a valid number value').optional().isLength({ max: 100 }),
    valid_fields_middleware_1.ValidFields
], suppliersControlller.create);
exports.suppliersRoutes.put('/:id', [
    (0, express_validator_1.check)('id', 'Id param must be a number value').isNumeric(),
    (0, express_validator_1.check)('id', 'Id param must be a number from 1 to 32').isInt({ min: 1 }),
    (0, express_validator_1.check)('supplierName', 'supplierName is required').notEmpty(),
    (0, express_validator_1.check)('supplierName', 'supplierName must be max ').isLength({ max: 45 }),
    (0, express_validator_1.check)('address', 'address must be max 100 ').optional().isLength({ max: 100 }),
    (0, express_validator_1.check)('email', 'email is required').notEmpty(),
    (0, express_validator_1.check)('email', 'It must be a valid email ').isEmail(),
    (0, express_validator_1.check)('email', 'email must be max 100 ').isLength({ max: 100 }),
    (0, express_validator_1.check)('phone', 'phone param must be a valid number value').optional().isLength({ max: 100 }),
    valid_fields_middleware_1.ValidFields
], suppliersControlller.update);
exports.suppliersRoutes.delete('/:id', [
    (0, express_validator_1.check)('id', 'Id param must be a number value').isNumeric(),
    (0, express_validator_1.check)('id', 'Id param must be a number from 1 to 32').isInt({ min: 1 }),
    valid_fields_middleware_1.ValidFields
], suppliersControlller.remove);
//# sourceMappingURL=suppliers.routes.js.map