import { ModelData } from '../models/ModelData';
import { genPersons } from '../helpers/genPersons';
import { IProduct } from '../interfaces/product.interface';
import { genProducts } from '../helpers/genProducts';
import { genCategories } from '../helpers/genCategories';

export class ProductsService {
    private productsModel: ModelData<IProduct> = new ModelData()

    constructor(feePercent: number) {
        this.productsModel.loadData(genProducts(feePercent, genCategories(), genPersons(10)))
    }

    async create(data: IProduct) {
        return await this.productsModel.create(data);
    }

    async getAll() {
        return await this.productsModel.find()
    }

    async getOneById(id: number) {
        return await this.productsModel.findById(id)
    }

    async update(id: number, data: IProduct) {
        return await this.productsModel.updateOneById(id, data);
    }
    async remove(id: number) {
        return await this.productsModel.deleteOneById(id);
    }

}