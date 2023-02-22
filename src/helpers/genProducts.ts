//diferencia es que solamente se coloca el import
import { PRODUCTS } from "../data/products";
import { ICategory } from '../interfaces/category.interface';
import { IPerson } from '../interfaces/person.interface';
import { IProduct } from "../interfaces/product.interface";
import { randomInt, randomFloatTwoDig, randomDate } from './tools';



const skuGen = (id: number, supplier: IPerson, category: ICategory): string => {

    const supplierCode: string = supplier.personName.substring(0, 2) ;
    const categoryCode: string = category.categoryName.substring(0, 2);
    const idFormated: string = (1000 + id).toString().substring(1, 4);

    const sku: string = (supplierCode + categoryCode + idFormated).toUpperCase();

    return sku;
}

const upcGen = (id: number, UPCPrefix: string): string => {

    const productCode: string = (id + 100000).toString().substring(1, 6);
    const checkDigit: string = randomInt(10).toString()
    const upcGen = UPCPrefix + productCode + checkDigit;

    return upcGen;
}

const weightGen = () => {
    return randomInt(11) * 10;
}

const priceGen = () => {
    const price = randomInt(5, 100) + (randomInt(2) ? 0 : 0.99)
    return price;
}

const feeCalculation = (price: number, feeValue: number): number => {
    return Math.round(price * feeValue * 100) / 100;
}

const cannabisVolGen = (): number => {
    return randomFloatTwoDig(0.99, 0.1);
}

const salesPriceGen = (price: number): number => {
    const totalPrice = price + price * randomFloatTwoDig(0.6, 0.1);
    const salesPriceRounded = Math.round(totalPrice * 100) / 100;
    return salesPriceRounded;
}

const productSlugGen = (id: number, productName: string, category: ICategory, weight:number): string => {

    const prodNameShort: string = productName.substring(0,2);
    const categoryCode: string = category.categoryName.substring(0, 2);
    const idFormated: string = (1000 + id).toString().substring(1, 4);
    const productSlug = (categoryCode + prodNameShort + idFormated).toUpperCase();

    return productSlug;
}

const fullNameGen = (productName: string,  weight:number): string => {
    return `${productName.toUpperCase()} ${weight} mg`;
}

const descriptionGen = (productName: string,  weight:number): string => {
    return `This is a random description for ${productName.toUpperCase()} ${weight} mg`;
}

const randomImageUrl = (id:number):string => {
    return `https://source.unsplash.com/random/200x200?sig=${id}`
}



//la función también recibe el tipo que devuelve
export const genProducts = (feePercent: number, categoriesRecords: ICategory[], suppliersRecord: IPerson[]): IProduct[] => {
    let products: IProduct[] = [];
    const UPCPrefix = randomInt(10000000).toString()
    for (let i: number = 0; i < PRODUCTS.length; i++) {

        const supplier = suppliersRecord[Math.floor(Math.random() * suppliersRecord.length)];
        const supplierId = Math.floor(Math.random() * suppliersRecord.length);
        const category = categoriesRecords[Math.floor(Math.random() * categoriesRecords.length)];
        const categoryId = Math.floor(Math.random() * categoriesRecords.length);
        const createDate = randomDate(new Date(2018, 0, 1), new Date(2023, 0, 1));
        const weight = randomInt(11) * 10;
        const price = priceGen();
        const feeValue = feePercent / 100;
        const id = i + 1

        const product: IProduct = {
            productName: PRODUCTS[i],
            supplierId: supplierId,
            categoryId: categoryId,
            weight: weight,
            cannabisWeight: randomInt(10),
            price: price,
            fee: feeCalculation(price, feeValue),
            sku: skuGen(id, supplier, category),
            imageURL: randomImageUrl(id),
            barcode: upcGen(id, UPCPrefix),
            description: descriptionGen(PRODUCTS[i], weight),
            cannabisVolume: cannabisVolGen(),
            isActive: true,
            createDate: createDate,
            updateDate: randomDate(createDate, new Date()),
            fullProductName: fullNameGen(PRODUCTS[i], weight), 
            productSlug: productSlugGen(id, PRODUCTS[i], category, weight),
            salesPrice: salesPriceGen(price),
            inventory: randomInt(200),
            discountAmount: randomFloatTwoDig(0.8, 0.1),
            productscol: "random product col",
        }
        products.push(product)
    }
    return products
}