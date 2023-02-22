import { TypePhoto } from "./enums/type-photo.enum";
import { CategoriesService } from "./services/categories.service";
import { ICategory } from './interfaces/category.interface';
import { SuppliersService } from './services/suppliers.service';
import { IPerson } from "./interfaces/person.interface";
import { ProductsService } from "./services/products.service";


let categoryService: CategoriesService = new CategoriesService()
let suppliersService: SuppliersService = new SuppliersService()
let productsService: ProductsService = new ProductsService(5)

const variable = categoryService.getAll();

//console.log(variable.then((value) => console.log(value)))

const updatedCategory: ICategory = {
    categoryName: 'SIN_CANABIS',
    photoType: TypePhoto.document,
    categoriesParentId: 56
}

categoryService.update(3, updatedCategory).then((value) => console.log(value));

// categoryService.getAll().then((value) => {
//     console.log("LAST", value);
// });


const updatePerson: IPerson = {
    personName: 'Eduardo Emilio Reyes',
    address: 'Los Cedros, 8239, Avenue',
    email: 'eduard.reyese@gmail.com',
    phone: '+98754567878'
}
suppliersService.update(3, updatePerson)

// suppliersService.getAll().then((value) => {
//     console.log("SUPPLIERS", value)
// })

productsService.getAll().then((value) => {
    console.log("PRODUCTS", value)
})
