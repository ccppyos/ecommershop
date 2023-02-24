import { ModelData } from '../models/ModelData';
import { genSuppliers } from '../helpers/genSuppliers';
import { IProduct } from '../interfaces/product.interface';
import { genProducts } from '../helpers/genProducts';
import { genCategories } from '../helpers/genCategories';
import { Product } from '../models/product';

export class ProductsService {
    private productsModel: ModelData<IProduct> = new ModelData()

    constructor() {
        //this.productsModel.loadData(genProducts(feePercent, genCategories(), genPersons(10)))
    }

    async create(data: IProduct) {
        //return await this.productsModel.create(data);
        return await Product.create({...data});
    }

    async getAll() {
        //return await this.productsModel.find()
        return await Product.findAll()
    }

    async getOneById(id: number) {
        const product = await Product.findByPk(id);
        if(!product){
            throw new Error(`Product with ${id} not found`);
        }
        return product;
    }

    async update(id: number, data: IProduct) {
        const product = await this.getOneById(id);
        return await product.update({...data});
    }
    async remove(id: number) {
        const product = await this.getOneById(id);
        return await product.destroy();
    }

}