import { Router } from "express";
import { check } from "express-validator";
import { ProductsController } from '../controllers/products.controller';
import { ValidFields } from "../middlewares/valid-fields.middleware";

export const productsRoutes: Router = Router()

const productsControlller = new ProductsController();

productsRoutes.get('/',productsControlller.getAll);
productsRoutes.get('/:id', [
    check('id', 'Id param must be a number value').isNumeric(),
    check('id', 'Id param must be a number from 1 to 32').isInt({ min: 1, max: 32 }),
    ValidFields
],
productsControlller.getOne);
productsRoutes.post('/',productsControlller.create);
productsRoutes.put('/:id',productsControlller.update);
productsRoutes.delete('/:id',productsControlller.remove);
