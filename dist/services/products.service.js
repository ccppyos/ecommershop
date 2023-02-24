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
exports.ProductsService = void 0;
const ModelData_1 = require("../models/ModelData");
const product_1 = require("../models/product");
class ProductsService {
    constructor() {
        this.productsModel = new ModelData_1.ModelData();
        //this.productsModel.loadData(genProducts(feePercent, genCategories(), genPersons(10)))
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            //return await this.productsModel.create(data);
            return yield product_1.Product.create(Object.assign({}, data));
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            //return await this.productsModel.find()
            return yield product_1.Product.findAll();
        });
    }
    getOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield product_1.Product.findByPk(id);
            if (!product) {
                throw new Error(`Product with ${id} not found`);
            }
            return product;
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield this.getOneById(id);
            return yield product.update(Object.assign({}, data));
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield this.getOneById(id);
            return yield product.destroy();
        });
    }
}
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map