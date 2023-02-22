import { IPerson } from '../interfaces/person.interface';
import { ModelData } from '../models/ModelData';
import { genPersons } from '../helpers/genPersons';

export class SuppliersService {
    private supplierModel: ModelData<IPerson> = new ModelData()

    constructor() {
        this.supplierModel.loadData(genPersons(10))
    }

    async create(data: IPerson) {
        return await this.supplierModel.create(data);
    }

    async getAll() {
        return await this.supplierModel.find()
    }

    async getOneById(id: number) {
        return await this.supplierModel.findById(id)
    }

    async update(id: number, data: IPerson) {
        return await this.supplierModel.updateOneById(id, data);
    }

    async remove(id: number) {
        return await this.supplierModel.deleteOneById(id);
    }

}