"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_photo_enum_1 = require("./enums/type-photo.enum");
const categories_service_1 = require("./services/categories.service");
const suppliers_service_1 = require("./services/suppliers.service");
const products_service_1 = require("./services/products.service");
let categoryService = new categories_service_1.CategoriesService();
let suppliersService = new suppliers_service_1.SuppliersService();
let productsService = new products_service_1.ProductsService(5);
const variable = categoryService.getAll();
//console.log(variable.then((value) => console.log(value)))
const updatedCategory = {
    id: 3,
    categoryName: 'SIN_CANABIS',
    photoType: type_photo_enum_1.TypePhoto.document,
    categoriesParentId: 56
};
categoryService.update(3, updatedCategory).then((value) => console.log(value));
// categoryService.getAll().then((value) => {
//     console.log("LAST", value);
// });
const updatePerson = {
    id: 5,
    personName: 'Eduardo Emilio Reyes',
    address: 'Los Cedros, 8239, Avenue',
    email: 'eduard.reyese@gmail.com',
    phone: '+98754567878'
};
suppliersService.update(3, updatePerson);
// suppliersService.getAll().then((value) => {
//     console.log("SUPPLIERS", value)
// })
productsService.getAll().then((value) => {
    console.log("PRODUCTS", value);
});
//# sourceMappingURL=llamada-funcione-gen.js.map