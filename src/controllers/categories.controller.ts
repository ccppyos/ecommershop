import { Request, Response } from 'express';
import { fail, success } from '../helpers/apiResponses';
import { CategoriesService } from '../services/categories.service';
import { IData } from '../interfaces/datamodel.interface';
import { ICategory } from '../interfaces/category.interface';

const categoryService = new CategoriesService()

export class CategoriesController {
    async create(req: Request, res: Response) {
        try {
            const { categoryName, photoType, categoriesParent_id } = req.body
            const category = await categoryService.create({
                categoryName, photoType, categoriesParent_id
            })
            success(res, category)
        } catch (error) {
            fail(res, error)
        }
    }
    async getAll(req: Request, res: Response) {
        try {
            const categories = await categoryService.getAll();
            // const categoriesFormated = categories.map((category: ICategory | any) => {
            //     const { _id, data } = category as IData<ICategory>;
            //     console.log(category)
            //     return { _id, ...data }
            // })
            success(res, categories)
        } catch (error) {
            fail(res, error)
        }

    }
    async getOne(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const category = await categoryService.getOneById(+id);
            success(res, category)
        } catch (error) {
            fail(res, error)
        }

    }
    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { categoryName, photoType, categoriesParent_id } = req.body
            const category = await categoryService.update(+id, { categoryName, photoType, categoriesParent_id });
            success(res, category)
        } catch (error) {
            fail(res, error)
        }

    }
    async remove(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const category = await categoryService.remove(+id)
            success(res, category)
        } catch (error) {
            fail(res, error)
        }
    }

}