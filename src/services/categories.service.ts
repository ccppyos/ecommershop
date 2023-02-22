import { genCategories } from '../helpers/genCategories';
import { ICategory } from '../interfaces/category.interface';
import { ModelData } from '../models/ModelData';

export class CategoriesService {
    private categoryModel: ModelData<ICategory> = new ModelData()

    constructor() {
        this.categoryModel.loadData(genCategories())
    }

    async create(data: ICategory) {
        return await this.categoryModel.create(data);
    }

    async getAll() {
        return await this.categoryModel.find()
    }

    async getOneById(id: number) {
        return await this.categoryModel.findById(id)
    }
    async update(id: number, data: ICategory) {
        return await this.categoryModel.updateOneById(id, data);
    }
    async remove(id: number) {
        return await this.categoryModel.deleteOneById(id);
    }

}