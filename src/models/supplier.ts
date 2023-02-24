import { db } from "../database/connectiondb";
import {DataTypes} from 'sequelize'

export const Supplier = db.define("supplier",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true,
        allowNull: false
    },
    supplierName: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(20),
        allowNull: true
    }
})