"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const Server_1 = require("./models/Server");
const categories_service_1 = require("./services/categories.service");
const suppliers_service_1 = require("./services/suppliers.service");
dotenv_1.default.config();
const server = new Server_1.Server();
server.listen();
let categoryService = new categories_service_1.CategoriesService();
let suppliersService = new suppliers_service_1.SuppliersService();
//let productsService: ProductsService = new ProductsService(5)
//# sourceMappingURL=app.js.map