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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedService = void 0;
const connectiondb_1 = require("../database/connectiondb");
const sequelize_1 = require("sequelize");
const genCategories_1 = require("../helpers/genCategories");
const categories_service_1 = require("./categories.service");
const suppliers_service_1 = require("./suppliers.service");
const genSuppliers_1 = require("../helpers/genSuppliers");
const genProducts_1 = require("../helpers/genProducts");
const products_service_1 = require("./products.service");
const categoriesService = new categories_service_1.CategoriesService();
const suppliersService = new suppliers_service_1.SuppliersService();
const productsService = new products_service_1.ProductsService();
class SeedService {
    constructor() {
        this.suppliers = [];
        this.categories = [];
    }
    createSeed() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteDB();
            yield this.createCategories();
            yield this.createSuppliers();
            yield this.createProducts();
        });
    }
    deleteDB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteProducts();
            yield this.deleteCategories();
            yield this.deleteSuppliers();
        });
    }
    deleteSuppliers() {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectiondb_1.db.query(`
            DELETE FROM suppliers;
            `, {
                type: sequelize_1.QueryTypes.DELETE
            });
            yield connectiondb_1.db.query(`
            ALTER TABLE suppliers AUTO_INCREMENT = 0;
            `, {
                type: sequelize_1.QueryTypes.RAW
            });
        });
    }
    deleteProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectiondb_1.db.query(`
            DELETE FROM products;
            `, {
                type: sequelize_1.QueryTypes.DELETE
            });
            yield connectiondb_1.db.query(`
            ALTER TABLE products AUTO_INCREMENT = 0;
            `, {
                type: sequelize_1.QueryTypes.RAW
            });
        });
    }
    deleteCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectiondb_1.db.query(`
            DELETE FROM categories WHERE categoriesParent_id IS NULL;
            `, {
                type: sequelize_1.QueryTypes.DELETE
            });
            yield connectiondb_1.db.query(`
            ALTER TABLE categories AUTO_INCREMENT = 0;
            `, {
                type: sequelize_1.QueryTypes.RAW
            });
        });
    }
    createCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            const categories = (0, genCategories_1.genCategories)();
            for (const category of categories) {
                const newCategory = yield categoriesService.create(Object.assign({}, category));
                const _a = newCategory.dataValues, { id } = _a, data = __rest(_a, ["id"]);
                const categoryFormatted = { _id: id, data };
                this.categories.push(categoryFormatted);
            }
            console.log("sucess");
        });
    }
    createSuppliers() {
        return __awaiter(this, void 0, void 0, function* () {
            const suppliers = (0, genSuppliers_1.genSuppliers)(15);
            for (const supplier of suppliers) {
                const newSupplier = yield suppliersService.create(Object.assign({}, supplier));
                const _a = newSupplier.dataValues, { id } = _a, data = __rest(_a, ["id"]);
                const supplierFormatted = { _id: id, data };
                this.suppliers.push(supplierFormatted);
            }
            console.log("sucess");
        });
    }
    createProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const products = (0, genProducts_1.genProducts)(5, this.categories, this.suppliers);
            for (const product of products) {
                yield productsService.create(Object.assign({}, product));
            }
            console.log("sucess");
        });
    }
}
exports.SeedService = SeedService;
//# sourceMappingURL=seed.service.js.map