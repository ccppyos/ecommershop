import { db } from "../database/connectiondb";
import { QueryTypes } from 'sequelize';
import { genCategories } from '../helpers/genCategories';
import { CategoriesService } from './categories.service';
import { SuppliersService } from './suppliers.service';
import { genSuppliers } from "../helpers/genSuppliers";
import { genProducts } from '../helpers/genProducts';
import { ISupplier } from '../interfaces/supplier.interface';
import { ICategory } from '../interfaces/category.interface';
import { IData } from '../interfaces/datamodel.interface';
import { ProductsService } from './products.service';

const categoriesService = new CategoriesService();
const suppliersService = new SuppliersService();
const productsService = new ProductsService();

export class SeedService {

    private suppliers: IData<ISupplier>[];
    private categories: IData<ICategory>[];

    constructor() {
        this.suppliers = [];
        this.categories = [];
    }

    public async createSeed() {
        await this.deleteDB();
        await this.createCategories();
        await this.createSuppliers();
        await this.createProducts();
    }

    private async deleteDB() {
        await this.deleteProducts();
        await this.deleteCategories();
        await this.deleteSuppliers();
    }

    private async deleteSuppliers() {
        await db.query(
            `
            DELETE FROM suppliers;
            `
            ,
            {
                type: QueryTypes.DELETE
            }
        );
        await db.query(
            `
            ALTER TABLE suppliers AUTO_INCREMENT = 0;
            `
            ,
            {
                type: QueryTypes.RAW
            }
        );
    }

    private async deleteProducts() {
        await db.query(
            `
            DELETE FROM products;
            `
            ,
            {
                type: QueryTypes.DELETE
            }
        );
        await db.query(
            `
            ALTER TABLE products AUTO_INCREMENT = 0;
            `
            ,
            {
                type: QueryTypes.RAW
            }
        );
    }

    private async deleteCategories() {
        await db.query(
            `
            DELETE FROM categories WHERE categoriesParent_id IS NULL;
            `
            ,
            {
                type: QueryTypes.DELETE
            }
        );
        await db.query(
            `
            ALTER TABLE categories AUTO_INCREMENT = 0;
            `
            ,
            {
                type: QueryTypes.RAW
            }
        );
    }


    private async createCategories() {
        const categories = genCategories();
        for (const category of categories) {
            const newCategory = await categoriesService.create({ ...category });
            const { id, ...data } = newCategory.dataValues;
            const categoryFormatted: IData<ICategory> = { _id: id, data };
            this.categories.push(categoryFormatted);
        }
        console.log("sucess")
    }

    private async createSuppliers() {
        const suppliers = genSuppliers(15);
        for (const supplier of suppliers) {
            const newSupplier = await suppliersService.create({ ...supplier })
            const { id, ...data } = newSupplier.dataValues;
            const supplierFormatted: IData<ISupplier> = { _id: id, data };
            this.suppliers.push(supplierFormatted);
        }
        console.log("sucess")
    }

    private async createProducts() {
        const products = genProducts(5, this.categories, this.suppliers);
        for (const product of products) {
            await productsService.create({ ...product })
        }
        console.log("sucess")
    }

}