import { Router } from "express";
import { check } from "express-validator";
//Permite establecer reglas de validación
import { CategoriesController } from '../controllers/categories.controller';
import { validPhotoType } from "../helpers/valid-phototype";
import { valideexpresion } from "../helpers/validexpression";
import { ValidFields } from "../middlewares/valid-fields.middleware";

export const categoriesRoutes: Router = Router()

const categoriesController = new CategoriesController();

categoriesRoutes.get('/', categoriesController.getAll);
categoriesRoutes.get('/:id', [
    //cuando no es entero se muestra ese mensaje
    check('id', 'Id param must be a number value').isNumeric(),
    check('id', 'Id param must be a number from 1 to 32').isInt({ min: 1, max: 32 }),
    ValidFields
], categoriesController.getOne);

categoriesRoutes.post('/', [
    check('categoryName', 'categoryName is required').notEmpty(),
    check('categoryName', 'categoryName must be max ').isLength({ max: 45 }),
    check('photoType', 'photoType is required').notEmpty(),
    check('photoType', 'photoType must be max ').isLength({ max: 45 }),
    check('photoType', 'photoType is enum "Photo, Document or KML').custom(validPhotoType),
    check('categoriesParent_id', 'categoriesParent_id must be a number value').optional().isNumeric(),
    ValidFields
],
    categoriesController.create);
categoriesRoutes.put('/:id', [
    //En put algunos campos pueden ser opcionales
    check('id', 'Id param must be a number value').isNumeric(),
    check('id', 'Id param must be a number from 1 to 32').isInt({ min: 1, max: 32 }),
    check('categoryName', 'categoryName is required').notEmpty(),
    check('categoryName', 'categoryName must be max ').isLength({ max: 45 }),
    check('photoType', 'photoType is required').notEmpty(),
    check('photoType', 'photoType must be max ').isLength({ max: 45 }),
    check('photoType', 'photoType is enum "Photo, Document or KML').custom(validPhotoType),
    check('categoriesParent_id', 'categoriesParent_id must be a number value').isNumeric(),
    ValidFields
], 
    categoriesController.update);
categoriesRoutes.delete('/:id', [
    check('id', 'Id param must be a number value').isNumeric(),
    check('id', 'Id param must be a number from 1 to 32').isInt({ min: 1, max: 32 }),
    ValidFields
],
    categoriesController.remove);
