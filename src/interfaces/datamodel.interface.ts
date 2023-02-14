//T va a obtener todos los datos y se toma de manera genérica
export interface IData<T>{
    _id: number,
    data: T
}