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
exports.SuppliersController = void 0;
const apiResponses_1 = require("../helpers/apiResponses");
const suppliers_service_1 = require("../services/suppliers.service");
const supplierService = new suppliers_service_1.SuppliersService();
class SuppliersController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { personName, address, email, phone } = req.body;
                const supplier = yield supplierService.create({
                    personName, address, email, phone
                });
                (0, apiResponses_1.success)(res, supplier);
            }
            catch (error) {
                (0, apiResponses_1.fail)(res, error);
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const suppliers = yield supplierService.getAll();
                res.json(suppliers);
            }
            catch (error) {
                (0, apiResponses_1.fail)(res, error);
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const supplier = yield supplierService.getOneById(+id);
                (0, apiResponses_1.success)(res, supplier);
            }
            catch (error) {
                (0, apiResponses_1.fail)(res, error);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { personName, address, email, phone } = req.body;
                const supplier = yield supplierService.update(+id, { personName, address, email, phone });
                (0, apiResponses_1.success)(res, supplier);
            }
            catch (error) {
                (0, apiResponses_1.fail)(res, error);
            }
        });
    }
    remove(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const supplier = yield supplierService.remove(+id);
                (0, apiResponses_1.success)(res, supplier);
            }
            catch (error) {
                (0, apiResponses_1.fail)(res, error);
            }
        });
    }
}
exports.SuppliersController = SuppliersController;
//# sourceMappingURL=suppliers.controller%20copy.js.map