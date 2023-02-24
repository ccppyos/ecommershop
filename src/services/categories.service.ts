import { QueryTypes } from 'sequelize';
import { db } from '../database/connectiondb';
import { ICategory } from '../interfaces/category.interface';
import { Category } from '../models/category';
import { ModelData } from '../models/ModelData';

export class CategoriesService {
    private categoryModel: ModelData<ICategory> = new ModelData()

    constructor() {

    }

    async create(data: ICategory) {
        console.log(data);
        return await Category.create({ ...data });
    }

    async getAll() {
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
        const category = await Category.findByPk(id);
        if (!category) {
            throw new Error(`Category with ${id} not found`);
        }
        return category;

    }

    async update(id: number, data: ICategory) {
        const category = await this.getOneById(id)
        return await category.update({ ...data });
    }

    async remove(id: number) {
        const category = await this.getOneById(id)
        return await category.destroy();
    }

}