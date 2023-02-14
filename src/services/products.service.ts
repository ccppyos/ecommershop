import { ModelData } from '../models/ModelData';
import { genPersons } from '../helpers/genPersons';
import { IProduct } from '../interfaces/product.interface';
import { genProducts } from '../helpers/genProducts';
import { genCategories } from '../helpers/genCategories';

export class ProductsService{
    private productsModel: ModelData<IProduct> = new ModelData()

    constructor(feePercent:number){
        this.productsModel.loadData(genProducts(feePercent,genCategories(),genPersons(10)))
    }


    async create(data:IProduct){
        try {
            return await this.productsModel.create(data);
        } catch (error) {
            console.log(error);
        }
    }
    
    async getAll(){
        try {
            return await this.productsModel.find()
        } catch (error) {
            console.log(error);
        }
    }

    async getOneById(id:number){
        try {
            return await this.productsModel.findById(id)
        } catch (error) {
            console.log(error);
        }

    }
    async update(id:number, data:IProduct){
        try {
            return await this.productsModel.updateOneById(id,data);
        } catch (error) {
            console.log(error);
        }
    }   
    async remove(id:number){
        try {
            return await this.productsModel.deleteOneById(id);
        } catch (error) {
            console.log(error);
        }

    } 

}