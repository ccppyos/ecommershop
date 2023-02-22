"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
const express_1 = require("express");
const suppliers_controller_1 = require("../controllers/suppliers.controller");
exports.categoriesRoutes = (0, express_1.Router)();
const suppliersControlller = new suppliers_controller_1.SuppliersController();
exports.categoriesRoutes.get('/', suppliersControlller.getAll);
exports.categoriesRoutes.get('/:id', suppliersControlller.getOne);
exports.categoriesRoutes.post('/', suppliersControlller.create);
exports.categoriesRoutes.put('/:id', suppliersControlller.update);
exports.categoriesRoutes.delete('/:id', suppliersControlller.remove);
//# sourceMappingURL=services.routes.js.map