import { ICategory } from "../interfaces/category.interface";
import { IPerson } from "../interfaces/person.interface";

export interface IProduct {
    productName: string,
    weight: number,
    cannabisWeight: number,
    price: number,
    fee: number,
    sku: string,
    imageURL: string,
    barcode: string,
    description: string,
    cannabisVolume: number,
    isActive: boolean,
    createDate: Date,
    updateDate: Date,
    fullProductName: string,
    productSlug: string,
    salesPrice: number,
    inventory: number,
    discountAmount: number,
    productscol: string,
    categoryId: number,
    supplierId: number,
}
