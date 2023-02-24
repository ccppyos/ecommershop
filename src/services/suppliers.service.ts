import { ISupplier } from '../interfaces/supplier.interface';
import { ModelData } from '../models/ModelData';
import { genSuppliers } from '../helpers/genSuppliers';
import { Supplier } from '../models/supplier';

export class SuppliersService {
    private supplierModel: ModelData<ISupplier> = new ModelData()

    constructor() {
        //this.supplierModel.loadData(genPersons(10))
    }

    async create(data: ISupplier) {
        //return await this.supplierModel.create(data);
        return await Supplier.create({...data});
    }

    async getAll() {
        return await Supplier.findAll()
    }

    async getOneById(id: number) {
        const supplier = await Supplier.findByPk(id);
        if(!supplier){
            throw new Error(`Supplier with ${id} not found`);
        }
        return supplier;
    }

    async update(id: number, data: ISupplier) {
        const supplier = await this.getOneById(id);
        return await supplier.update({...data})
    }

    async remove(id: number) {
        const supplier = await this.getOneById(id);
        return await supplier.destroy();
    }

}