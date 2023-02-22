import { Sequelize } from "sequelize";

export const db = new Sequelize('saleproductsdb', 'root', '', {
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