import express, { Application } from 'express';
import cors from 'cors';
import { corsOptions } from '../config/cors-options';
import { join } from 'path'
import { publicRoutes } from '../routes/public.routes';
import { categoriesRoutes } from '../routes/categories.routes';
import { suppliersRoutes } from '../routes/suppliers.routes';
import { productsRoutes } from '../routes/products.routes';
import { db } from '../database/connectiondb';
import { seedRoutes } from '../routes/seed.routes';
export class Server {
    private app: Application;
    private port: number | string;
    private path = {
        public: '/',
        categories: '/api/categories',
        suppliers: '/api/suppliers',
        products: '/api/products',
        seed: '/api/seed',
    }

    constructor() {
        // Inicializar atributos
        this.app = express();
        this.port = process.env.PORT || 3000;

        // Inicializar métodos
        //Conectar a la BD
        this.connectToDB();
        //Inicializar Middlewars
        this.setMiddlewares();
        //Inicializar Rutas
        this.setRoutes();

    }
    private async connectToDB() {
        try {
            await db.authenticate();
            console.log('Data connected')
        } catch (error) {
            throw new Error(error as any);
        }
    }

    private setMiddlewares() {
        //Cuando se usa middlewares, se usa la función use( )
        //Para no recibir ataques se definen opciones para cors
        this.app.use(cors(corsOptions));
        this.app.use(express.static(join(__dirname, '../../public/')));
        this.app.use(express.json());
    }

    private setRoutes() {
        if (process.env.STATE === 'DEV') {
            this.app.use(this.path.seed, seedRoutes);
        }
        this.app.use(this.path.suppliers, suppliersRoutes);
        this.app.use(this.path.categories, categoriesRoutes);
        this.app.use(this.path.products, productsRoutes);
        this.app.use(this.path.public, publicRoutes);
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log('Server is running on PORT', this.port)
        })
    }
}