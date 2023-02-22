"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesController = void 0;
const apiResponses_1 = require("../helpers/apiResponses");
const categories_service_1 = require("../services/categories.service");
const categoryService = new categories_service_1.CategoriesService();
class CategoriesController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { categoryName, photoType, categoriesParentId } = req.body;
                const category = yield categoryService.create({
                    categoryName, photoType, categoriesParentId
                });
                res.json(category);
            }
            catch (error) {
                res.status(400).json({ statuscode: 400, error });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categories = yield categoryService.getAll();
                res.json(categories);
            }
            catch (error) {
                res.status(400).json({ statuscode: 400, error });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const category = yield categoryService.getOneById(+id);
                res.json(category);
            }
            catch (error) {
                res.status(400).json({ statuscode: 400, error });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { categoryName, photoType, categoriesParentId } = req.body;
                const category = yield categoryService.update(+id, { categoryName, photoType, categoriesParentId });
                res.json(category);
            }
            catch (error) {
                res.status(400).json({ statuscode: 400, error });
            }
        });
    }
    remove(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const category = yield categoryService.remove(+id);
                (0, apiResponses_1.success)(res, category);
            }
            catch (error) {
                (0, apiResponses_1.fail)(res, error);
            }
        });
    }
}
exports.CategoriesController = CategoriesController;
//# sourceMappingURL=categories.controller%20copy.js.map