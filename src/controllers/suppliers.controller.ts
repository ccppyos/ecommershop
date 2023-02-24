import { Request, Response } from 'express';
import { fail, success } from '../helpers/apiResponses';
import { SuppliersService } from '../services/suppliers.service';

const supplierService = new SuppliersService()

export class SuppliersController {
    async create(req: Request, res: Response) {
        try {
            const { supplierName, address, email, phone} = req.body
            const supplier = await supplierService.create({
                supplierName, address, email, phone
            })
            success(res,supplier)
        } catch (error) {
             fail(res, error)
        }
    }
    async getAll(req: Request, res: Response) {
        try {
            const suppliers = await supplierService.getAll()
            res.json(suppliers)
        } catch (error) {
             fail(res, error)
        }

    }
    async getOne(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const supplier = await supplierService.getOneById(+id);
            success(res,supplier)
        } catch (error) {
             fail(res, error)
        }

    }
    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { supplierName, address, email, phone } = req.body
            const supplier = await supplierService.update(+id, { supplierName, address, email, phone });
            success(res,supplier)
        } catch (error) {
             fail(res, error)
        }

    }
    async remove(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const supplier = await supplierService.remove(+id)
            success(res,supplier)
        } catch (error) {
            fail(res, error)
        }
    }

}