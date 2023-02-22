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
exports.SuppliersService = void 0;
const ModelData_1 = require("../models/ModelData");
const genPersons_1 = require("../helpers/genPersons");
class SuppliersService {
    constructor() {
        this.supplierModel = new ModelData_1.ModelData();
        this.supplierModel.loadData((0, genPersons_1.genPersons)(10));
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.supplierModel.create(data);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.supplierModel.find();
        });
    }
    getOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.supplierModel.findById(id);
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.supplierModel.updateOneById(id, data);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.supplierModel.deleteOneById(id);
        });
    }
}
exports.SuppliersService = SuppliersService;
//# sourceMappingURL=suppliers.service.js.map