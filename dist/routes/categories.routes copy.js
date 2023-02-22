"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
const express_1 = require("express");
const categories_controller_1 = require("../controllers/categories.controller");
exports.categoriesRoutes = (0, express_1.Router)();
const categoriesController = new categories_controller_1.CategoriesController();
exports.categoriesRoutes.get('/', categoriesController.getAll);
exports.categoriesRoutes.get('/:id', categoriesController.getOne);
exports.categoriesRoutes.post('/', categoriesController.create);
exports.categoriesRoutes.put('/:id', categoriesController.update);
exports.categoriesRoutes.delete('/:id', categoriesController.remove);
//# sourceMappingURL=categories.routes%20copy.js.map