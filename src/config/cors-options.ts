import { CorsOptions } from "cors";

export const corsOptions:CorsOptions = {
    origin:'*', //yo recibo de todo lado
    methods: ['GET','POST','PUT','DELETE','OPTION'],
    optionsSuccessStatus: 200
}