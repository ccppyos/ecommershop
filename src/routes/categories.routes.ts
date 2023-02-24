import { Router } from "express";
import { check } from "express-validator";
import { CategoriesController } from '../controllers/categories.controller';
import { validPhotoType } from "../helpers/valid-phototype";
import { ValidFields } from "../middlewares/valid-fields.middleware";

export const categoriesRoutes: Router = Router()

const categoriesController = new CategoriesController();

categoriesRoutes.get('/', categoriesController.getAll);
categoriesRoutes.get('/:id', [
    check('id', 'Id param must be a number value').isNumeric(),
    check('id', 'Id param must be a number from 1 to 100000').isInt({ min: 1, max: 100000 }),
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
    check('id', 'Id param must be a number value').isNumeric(),
    check('id', 'Id param must be a number from 1 to 100000').isInt({ min: 1, max: 100000 }),
    check('categoryName', 'categoryName is required').optional().notEmpty(),
    check('categoryName', 'categoryName must be max ').optional().isLength({ max: 45 }),
    check('photoType', 'photoType is required').optional().notEmpty(),
    check('photoType', 'photoType must be max ').optional().isLength({ max: 45 }),
    check('photoType', 'photoType is enum "Photo, Document or KML').optional().custom(validPhotoType),
    check('categoriesParent_id', 'categoriesParent_id must be a number value').optional().isNumeric(),
    check('categoriesParent_id', 'categoriesParent_id param must be a number from 1 to 100000').isInt({ min: 1, max: 100000 }),
    ValidFields
],
    categoriesController.update);
categoriesRoutes.delete('/:id', [
    check('id', 'Id param must be a number value').isNumeric(),
    check('id', 'Id param must be a number from 1 to 100000').isInt({ min: 1, max: 100000 }),
    ValidFields
],
    categoriesController.remove);
