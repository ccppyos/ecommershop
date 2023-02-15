import express, { Application } from 'express';
import cors from 'cors';
import { corsOptions } from '../config/cors-options';
import {join} from 'path'
import { publicRoutes } from '../routes/public.routes';
export class Server {
    private app: Application;
    private port: number | string;
    private path= {
        public:'/'

    }

    constructor() {
        // Inicializar atributos
        this.app = express();
        //this.port = 3000;
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

    }

    private setMiddlewares() {
        //Cuando se usa middlewares, se usa la función use( )
        //Para no recibir ataques se definen opciones para cors
        this.app.use(cors(corsOptions));
        this.app.use(express.static(join(__dirname, '../../public/')));
        this.app.use(express.json());
    }

    private setRoutes() {
        this.app.use(this.path.public, publicRoutes);
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log('Server is running on PORT', this.port)
        })
    }
}