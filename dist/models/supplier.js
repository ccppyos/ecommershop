"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Supplier = void 0;
const connectiondb_1 = require("../database/connectiondb");
const sequelize_1 = require("sequelize");
exports.Supplier = connectiondb_1.db.define("supplier", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    supplierName: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false
    },
    address: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true
    },
    email: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    phone: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: true
    }
});
//# sourceMappingURL=supplier.js.map