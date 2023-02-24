"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const connectiondb_1 = require("../database/connectiondb");
const sequelize_1 = require("sequelize");
exports.Product = connectiondb_1.db.define("product", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false
    },
    weight: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    cannabisWeight: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    fee: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    sku: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: true
    },
    imageURL: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    barcode: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true
    },
    description: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true
    },
    cannabisVolume: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: true
    },
    isActive: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true
    },
    createDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    updateDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    fullProductName: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true
    },
    productSlug: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true
    },
    salesPrice: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    inventory: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    discountAmount: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    productscol: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: true
    },
    //Foreign keys
    category_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    supplier_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
});
//# sourceMappingURL=product.js.map