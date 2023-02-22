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
    (0, express_validator_1.check)('id', 'Id param must be a number from 1 to 32').isInt({ min: 1, max: 32 }),
    valid_fields_middleware_1.ValidFields
], suppliersControlller.getOne);
exports.suppliersRoutes.post('/', [
    (0, express_validator_1.check)('personName', 'supplierName is required').not().isEmpty(),
    (0, express_validator_1.check)('personName', 'supplierName must be max ').isLength({ max: 45 }),
    (0, express_validator_1.check)('email', 'email is required').not().isEmpty(),
    (0, express_validator_1.check)('email', 'It must be a valid email ').isEmail(),
    (0, express_validator_1.check)('phone', 'phone param must be a valid number value').isInt({ min: 100000000, max: 1000000000 }),
    valid_fields_middleware_1.ValidFields
], suppliersControlller.create);
exports.suppliersRoutes.put('/:id', suppliersControlller.update);
exports.suppliersRoutes.delete('/:id', suppliersControlller.remove);
//# sourceMappingURL=suppliers.routes.js.map