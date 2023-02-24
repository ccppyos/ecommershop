import { Request, Response } from 'express';
import { fail, success } from '../helpers/apiResponses';
import { ProductsService } from '../services/products.service';

const productsService = new ProductsService();

export class ProductsController {
    async create(req: Request, res: Response) {
        try {
            const {
                name,
                weight,
                cannabisWeight,
                price,
                fee,
                sku,
                imageURL,
                barcode,
                description,
                cannabisVolume,
                isActive,
                createDate,
                updateDate,
                fullProductName,
                productSlug,
                salesPrice,
                inventory,
                discountAmount,
                productscol,
                category_id,
                supplier_id
            } = req.body
            const product = await productsService.create({
                name,
                weight,
                cannabisWeight,
                price,
                fee,
                sku,
                imageURL,
                barcode,
                description,
                cannabisVolume,
                isActive,
                createDate,
                updateDate,
                fullProductName,
                productSlug,
                salesPrice,
                inventory,
                discountAmount,
                productscol,
                category_id,
                supplier_id
            })
            success(res, product);
        } catch (error) {
            fail(res, error)
        }
    }
    async getAll(req: Request, res: Response) {
        try {
            const products = await productsService.getAll()
           success(res,products);
        } catch (error) {
            fail(res, error)
        }

    }
    async getOne(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const product = await productsService.getOneById(+id);
            success(res, product)
        } catch (error) {
            fail(res, error)
        }

    }
    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { name,
                weight,
                cannabisWeight,
                price,
                fee,
                sku,
                imageURL,
                barcode,
                description,
                cannabisVolume,
                isActive,
                createDate,
                updateDate,
                fullProductName,
                productSlug,
                salesPrice,
                inventory,
                discountAmount,
                productscol,
                category_id,
                supplier_id } = req.body
            const product = await productsService.update(+id, {
                name,
                weight,
                cannabisWeight,
                price,
                fee,
                sku,
                imageURL,
                barcode,
                description,
                cannabisVolume,
                isActive,
                createDate,
                updateDate,
                fullProductName,
                productSlug,
                salesPrice,
                inventory,
                discountAmount,
                productscol,
                category_id,
                supplier_id
            });
            success(res, product)
        } catch (error) {
            fail(res, error)
        }

    }
    async remove(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const product = await productsService.remove(+id)
            success(res, product)
        } catch (error) {
            fail(res, error)
        }
    }

}