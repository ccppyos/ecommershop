import { Router } from "express";
import { check } from "express-validator";
import { SuppliersController } from "../controllers/suppliers.controller";
import { ValidFields } from "../middlewares/valid-fields.middleware";

export const suppliersRoutes: Router = Router()

const suppliersControlller = new SuppliersController();

suppliersRoutes.get('/', suppliersControlller.getAll);
suppliersRoutes.get('/:id', [
    check('id', 'Id param must be a number value').isNumeric(),
    check('id', 'Id param must be a number from 1 to 32').isInt({ min: 1, max: 32 }),
    ValidFields
], suppliersControlller.getOne);
suppliersRoutes.post('/', [
    check('personName', 'supplierName is required').not().isEmpty(),
    check('personName', 'supplierName must be max ').isLength({ max: 45 }),
    check('email', 'email is required').not().isEmpty(),
    check('email', 'It must be a valid email ').isEmail(),
    check('phone', 'phone param must be a valid number value').isInt({ min: 100000000, max: 1000000000 }),
    ValidFields
],suppliersControlller.create);
suppliersRoutes.put('/:id', suppliersControlller.update);
suppliersRoutes.delete('/:id', suppliersControlller.remove);
