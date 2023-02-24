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
const supplier_1 = require("../models/supplier");
class SuppliersService {
    constructor() {
        this.supplierModel = new ModelData_1.ModelData();
        //this.supplierModel.loadData(genPersons(10))
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            //return await this.supplierModel.create(data);
            return yield supplier_1.Supplier.create(Object.assign({}, data));
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield supplier_1.Supplier.findAll();
        });
    }
    getOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const supplier = yield supplier_1.Supplier.findByPk(id);
            if (!supplier) {
                throw new Error(`Supplier with ${id} not found`);
            }
            return supplier;
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const supplier = yield this.getOneById(id);
            return yield supplier.update(Object.assign({}, data));
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const supplier = yield this.getOneById(id);
            return yield supplier.destroy();
        });
    }
}
exports.SuppliersService = SuppliersService;
//# sourceMappingURL=suppliers.service.js.map