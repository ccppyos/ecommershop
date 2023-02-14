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
            try {
                return yield this.categoryModel.create(data);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.categoryModel.find();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.categoryModel.findById(id);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.categoryModel.updateOneById(id, data);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.categoryModel.deleteOneById(id);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=persons.service.js.map