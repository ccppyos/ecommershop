import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

export const db = new Sequelize(process.env.DB_NAME as string, process.env.DB_USER as string , process.env.DB_USER as string , {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        scopes: {
            excludeCreatedAtUpdateAt: {
                attributes: {
                    exclude: ['createAt', 'updateAt']
                }
            }
        },
        timestamps: false
    }
})