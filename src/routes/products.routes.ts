import { Router } from "express";
import { check } from "express-validator";
import { ProductsController } from '../controllers/products.controller';
import { ValidFields } from "../middlewares/valid-fields.middleware";

export const productsRoutes: Router = Router()

const productsControlller = new ProductsController();

productsRoutes.get('/', productsControlller.getAll);
productsRoutes.get('/:id', [
    check('id', 'Id param must be a number value').isNumeric(),
    check('id', 'Id param must be a number from 1 to 100000').isInt({ min: 1, max: 100000 }),
    ValidFields
],
    productsControlller.getOne);

productsRoutes.post('/', [
    check('name', 'name max length is 100').isLength({ max: 100 }),
    check('weight', 'weight param must be a float value').isFloat(),
    check('cannabisWeight', 'cannabisWeight param must be a number value').isFloat(),
    check('price', 'price param must be a number value').isNumeric(),
    check('fee', 'fee param must be a number value').isFloat(),
    check('sku', 'sku max length is 45').optional().isLength({ max: 45 }),
    check('imageURL', 'imageURL max length is 255').optional().isLength({ max: 255 }),
    check('barcode', 'barcode param must be a number value').optional().notEmpty(),
    check('description', 'description param must be a number value').optional().notEmpty(),
    check('cannabisVolume', 'cannabisVolume param must be a number value').optional().notEmpty(),
    check('isActive', 'isActive param must be a number value').optional().isBoolean(),
    check('createDate', 'createDate param must be a date value').optional().isDate(),
    check('updateDate', 'updateDate param must be a date value').optional().isDate(),
    check('fullProductName', 'fullProductName max length is 100').optional().isLength({ max: 100 }),
    check('productSlug', 'productSlug max length is 100').optional().isLength({ max: 100 }),
    check('salesPrice', 'salesPrice param must be a number value').isNumeric(),
    check('inventory', 'inventory param must be a number value').isNumeric(),
    check('discountAmount', 'discountAmount param must be a number value').isNumeric(),
    check('productscol', 'productscol max length is 45').optional().isLength({ max: 45 }),
    check('category_id', 'category_id param must be a number value').isNumeric(),
    check('category_id', 'category_id param must be a number from 1 to 100000').isInt({ min: 1, max: 100000 }),
    check('supplier_id', 'supplier_id param must be a number value').isNumeric(),
    check('supplier_id', 'supplier_id param must be a number from 1 to 100000').isInt({ min: 1, max: 100000 }),
    ValidFields
], productsControlller.create);
productsRoutes.put('/:id', [
    check('id', 'Id param must be a number value').isNumeric(),
    check('id', 'Id param must be a number from 1 to 100000').isInt({ min: 1, max: 100000 }),
    check('name', 'name max length is 100').optional().isLength({ max: 100 }),
    check('weight', 'weight param must be a float value').optional().isFloat(),
    check('cannabisWeight', 'cannabisWeight param must be a number value').optional().isFloat(),
    check('price', 'price param must be a number value').optional().isNumeric(),
    check('fee', 'fee param must be a number value').optional().isFloat(),
    check('sku', 'sku max length is 45').optional().isLength({ max: 45 }),
    check('imageURL', 'imageURL max length is 255').optional().isLength({ max: 255 }),
    check('barcode', 'barcode param must be a number value').optional().notEmpty(),
    check('description', 'description param must be a number value').optional().notEmpty(),
    check('cannabisVolume', 'cannabisVolume param must be a number value').optional().notEmpty(),
    check('isActive', 'isActive param must be a number value').optional().isBoolean(),
    check('createDate', 'createDate param must be a date value').optional().isDate(),
    check('updateDate', 'updateDate param must be a date value').optional().isDate(),
    check('fullProductName', 'fullProductName max length is 100').optional().isLength({ max: 100 }),
    check('productSlug', 'productSlug max length is 100').optional().isLength({ max: 100 }),
    check('salesPrice', 'salesPrice param must be a number value').optional().isNumeric(),
    check('inventory', 'inventory param must be a number value').optional().isNumeric(),
    check('discountAmount', 'discountAmount param must be a number value').optional().isNumeric(),
    check('productscol', 'productscol max length is 45').optional().isLength({ max: 45 }),
    check('category_id', 'category_id param must be a number value').optional().isNumeric(),
    check('category_id', 'category_id param must be a number from 1 to 100000').optional().isInt({ min: 1, max: 100000 }),
    check('supplier_id', 'supplier_id param must be a number value').optional().isNumeric(),
    check('supplier_id', 'supplier_id param must be a number from 1 to 100000').optional().isInt({ min: 1, max: 100000 }),
    ValidFields
],
productsControlller.update);

productsRoutes.delete('/:id', 
[
    check('id', 'Id param must be a number value').isNumeric(),
    check('id', 'Id param must be a number from 1 to 100000').isInt({ min: 1, max: 100000 }),
],
productsControlller.remove);

