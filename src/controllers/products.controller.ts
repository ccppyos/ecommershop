import { Request, Response } from 'express';
import { fail, success } from '../helpers/apiResponses';
import { ProductsService } from '../services/products.service';

const productsService = new ProductsService(10)

export class ProductsController {
    async create(req: Request, res: Response) {
        try {
            const {
                productName,
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
                categoryId,
                supplierId
            } = req.body
            const product = await productsService.create({
                productName,
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
                categoryId,
                supplierId
            })
            success(res, product)
        } catch (error) {
            fail(res, error)
        }
    }
    async getAll(req: Request, res: Response) {
        try {
            const products = await productsService.getAll()
            res.json(products)
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
            const { productName,
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
                categoryId,
                supplierId } = req.body
            const product = await productsService.update(+id, {
                productName,
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
                categoryId,
                supplierId
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