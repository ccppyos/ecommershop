import { IPerson } from '../interfaces/person.interface';
import { ModelData } from '../models/ModelData';
import { genPersons } from '../helpers/genPersons';

export class SuppliersService{
    private supplierModel: ModelData<IPerson> = new ModelData()

    constructor(){
        this.supplierModel.loadData(genPersons(5))
    }


    async create(data:IPerson){
        try {
            return await this.supplierModel.create(data);
        } catch (error) {
            console.log(error);
        }
    }
    
    async getAll(){
        try {
            return await this.supplierModel.find()
        } catch (error) {
            console.log(error);
        }
    }

    async getOneById(id:number){
        try {
            return await this.supplierModel.findById(id)
        } catch (error) {
            console.log(error);
        }

    }
    async update(id:number, data:IPerson){
        try {
            return await this.supplierModel.updateOneById(id,data);
        } catch (error) {
            console.log(error);
        }
    }   
    async remove(id:number){
        try {
            return await this.supplierModel.deleteOneById(id);
        } catch (error) {
            console.log(error);
        }

    } 

}