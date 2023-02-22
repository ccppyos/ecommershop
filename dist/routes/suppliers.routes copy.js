"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.suppliersRoutes = void 0;
const express_1 = require("express");
const suppliers_controller_1 = require("../controllers/suppliers.controller");
exports.suppliersRoutes = (0, express_1.Router)();
const suppliersControlller = new suppliers_controller_1.SuppliersController();
exports.suppliersRoutes.get('/', suppliersControlller.getAll);
exports.suppliersRoutes.get('/:id', suppliersControlller.getOne);
exports.suppliersRoutes.post('/', suppliersControlller.create);
exports.suppliersRoutes.put('/:id', suppliersControlller.update);
exports.suppliersRoutes.delete('/:id', suppliersControlller.remove);
//# sourceMappingURL=suppliers.routes%20copy.js.map