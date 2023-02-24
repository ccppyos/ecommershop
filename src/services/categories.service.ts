import { QueryTypes } from 'sequelize';
import { db } from '../database/connectiondb';
import { genCategories } from '../helpers/genCategories';
import { ICategory } from '../interfaces/category.interface';
import { Category } from '../models/category';
import { ModelData } from '../models/ModelData';

export class CategoriesService {
    private categoryModel: ModelData<ICategory> = new ModelData()

    constructor() {
        //this.categoryModel.loadData(genCategories())
    }

    async create(data: ICategory) {
        console.log(data);
        return await Category.create({ ...data });
    }

    async getAll() {
        //return await this.categoryModel.find()
        //return await Category.findAll();
        return await db.query(
            `
            SELECT child.*, parent.categoryName as parentCategoryName FROM categories AS child
            LEFT JOIN categories AS parent ON child.categoriesParent_id = parent.id
            `,
            {
                type: QueryTypes.SELECT
            }
        )
    }

    async getOneById(id: number) {
        //return await this.categoryModel.findById(id)
        const category = await Category.findByPk(id);
        // const category = await db.query(
        //     `
        //     SELECT child.*, parent.categoryName as parentCategoryName FROM categories AS child
        //     LEFT JOIN categories AS parent ON child.categoriesParent_id = parent.id
        //     WHERE child.id =:id;
        //     `,
        //     {
        //         type: QueryTypes.SELECT,
        //         //replacements: { id: id },
        //         replacements: { id }
        //     }
        // )
        //el query devuelve array
        // if (category.length === 0) {
        //     throw new Error(`Category with ${id} not found`);
        // }
        if (!category) {
            throw new Error(`Category with ${id} not found`);
        }
        return category;

    }
    async update(id: number, data: ICategory) {
        //return await this.categoryModel.updateOneById(id, data);
        const category = await this.getOneById(id)
        return await category.update({ ...data });
    }
    async remove(id: number) {
        //return await this.categoryModel.deleteOneById(id);
        const category = await this.getOneById(id)
        return await category.destroy();
    }

}