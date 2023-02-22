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
exports.CategoriesService = void 0;
const genCategories_1 = require("../helpers/genCategories");
const ModelData_1 = require("../models/ModelData");
class CategoriesService {
    constructor() {
        this.categoryModel = new ModelData_1.ModelData();
        this.categoryModel.loadData((0, genCategories_1.genCategories)());
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.categoryModel.create(data);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.categoryModel.find();
        });
    }
    getOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.categoryModel.findById(id);
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.categoryModel.updateOneById(id, data);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.categoryModel.deleteOneById(id);
        });
    }
}
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map