import { Router } from "express";
import { check } from "express-validator";
import { SuppliersController } from "../controllers/suppliers.controller";
import { ValidFields } from "../middlewares/valid-fields.middleware";

export const suppliersRoutes: Router = Router()

const suppliersControlller = new SuppliersController();

suppliersRoutes.get('/', suppliersControlller.getAll);

suppliersRoutes.get('/:id', [
    check('id', 'Id param must be a number value').isNumeric(),
    check('id', 'Id param must be a number from 1 to 32').isInt({ min: 1}),
    ValidFields
], suppliersControlller.getOne);

suppliersRoutes.post('/', [
    check('supplierName', 'supplierName is required').notEmpty(),
    check('supplierName', 'supplierName must be max ').isLength({ max: 45 }),
    check('address', 'address must be max 100 ').optional().isLength({ max: 100 }),
    check('email', 'email is required').notEmpty(),
    check('email', 'It must be a valid email ').isEmail(),
    check('email', 'email must be max 100 ').isLength({ max: 100 }),
    check('phone', 'phone param must be a valid number value').optional().isLength({max: 100}),
    ValidFields
],suppliersControlller.create);

suppliersRoutes.put('/:id', [
    check('id', 'Id param must be a number value').isNumeric(),
    check('id', 'Id param must be a number from 1 to 32').isInt({ min: 1}),
    check('supplierName', 'supplierName is required').notEmpty(),
    check('supplierName', 'supplierName must be max ').isLength({ max: 45 }),
    check('address', 'address must be max 100 ').optional().isLength({ max: 100 }),
    check('email', 'email is required').notEmpty(),
    check('email', 'It must be a valid email ').isEmail(),
    check('email', 'email must be max 100 ').isLength({ max: 100 }),
    check('phone', 'phone param must be a valid number value').optional().isLength({max: 100}),
    ValidFields
],
suppliersControlller.update);

suppliersRoutes.delete('/:id', [
    check('id', 'Id param must be a number value').isNumeric(),
    check('id', 'Id param must be a number from 1 to 32').isInt({ min: 1}),
    ValidFields
],
suppliersControlller.remove);
