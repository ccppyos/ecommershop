import dotenv from 'dotenv';
import { Server } from './models/Server';
import { CategoriesService } from './services/categories.service';
import { SuppliersService } from './services/suppliers.service';

dotenv.config();

const server = new Server();
server.listen();


let categoryService: CategoriesService = new CategoriesService()
let suppliersService: SuppliersService = new SuppliersService()
//let productsService: ProductsService = new ProductsService(5)
