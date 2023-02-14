import { genCategories } from '../helpers/genCategories';
import { ICategory } from '../interfaces/category.interface';
import { ModelData } from '../models/ModelData';

export class CategoriesService{
    private categoryModel: ModelData<ICategory> = new ModelData()

    constructor(){
        this.categoryModel.loadData(genCategories())
    }


    async create(data:ICategory){
        try {
            return await this.categoryModel.create(data);
        } catch (error) {
            console.log(error);
        }
    }
    
    async getAll(){
        try {
            return await this.categoryModel.find()
        } catch (error) {
            console.log(error);
        }
    }

    async getOneById(id:number){
        try {
            return await this.categoryModel.findById(id)
        } catch (error) {
            console.log(error);
        }

    }
    async update(id:number, data:ICategory){
        try {
            return await this.categoryModel.updateOneById(id,data);
        } catch (error) {
            console.log(error);
        }
    }   
    async remove(id:number){
        try {
            return await this.categoryModel.deleteOneById(id);
        } catch (error) {
            console.log(error);
        }

    } 

}