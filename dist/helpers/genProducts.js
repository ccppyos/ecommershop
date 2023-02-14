"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genProducts = void 0;
//diferencia es que solamente se coloca el import
const products_1 = require("../data/products");
const tools_1 = require("./tools");
const skuGen = (id, supplier, category) => {
    const supplierCode = supplier.personName.substring(0, 2) + (supplier.id + 1000).toString().substring(1, 4);
    const categoryCode = category.categoryName.substring(0, 2);
    const idFormated = (1000 + id).toString().substring(1, 4);
    const sku = (supplierCode + categoryCode + idFormated).toUpperCase();
    return sku;
};
const upcGen = (id, UPCPrefix) => {
    const productCode = (id + 100000).toString().substring(1, 6);
    const checkDigit = (0, tools_1.randomInt)(10).toString();
    const upcGen = UPCPrefix + productCode + checkDigit;
    return upcGen;
};
const weightGen = () => {
    return (0, tools_1.randomInt)(11) * 10;
};
const priceGen = () => {
    const price = (0, tools_1.randomInt)(5, 100) + ((0, tools_1.randomInt)(2) ? 0 : 0.99);
    return price;
};
const feeCalculation = (price, feeValue) => {
    return Math.round(price * feeValue * 100) / 100;
};
const cannabisVolGen = () => {
    return (0, tools_1.randomFloatTwoDig)(0.99, 0.1);
};
const salesPriceGen = (price) => {
    const totalPrice = price + price * (0, tools_1.randomFloatTwoDig)(0.6, 0.1);
    const salesPriceRounded = Math.round(totalPrice * 100) / 100;
    return salesPriceRounded;
};
const productSlugGen = (id, productName, category, weight) => {
    const prodNameShort = productName.substring(0, 2);
    const categoryCode = category.categoryName.substring(0, 2);
    const idFormated = (1000 + id).toString().substring(1, 4);
    const productSlug = (categoryCode + prodNameShort + idFormated).toUpperCase();
    return productSlug;
};
const fullNameGen = (productName, weight) => {
    return `${productName.toUpperCase()} ${weight} mg`;
};
const descriptionGen = (productName, weight) => {
    return `This is a random description for ${productName.toUpperCase()} ${weight} mg`;
};
const randomImageUrl = (id) => {
    return `https://source.unsplash.com/random/200x200?sig=${id}`;
};
//la función también recibe el tipo que devuelve
const genProducts = (feePercent, categories, suppliers) => {
    let products = [];
    const UPCPrefix = (0, tools_1.randomInt)(10000000).toString();
    for (let i = 0; i < products_1.PRODUCTS.length; i++) {
        const supplier = suppliers[Math.floor(Math.random() * products.length)];
        const category = categories[Math.floor(Math.random() * categories.length)];
        const createDate = (0, tools_1.randomDate)(new Date(2018, 0, 1), new Date(2023, 0, 1));
        const weight = (0, tools_1.randomInt)(11) * 10;
        const price = priceGen();
        const feeValue = feePercent / 100;
        const id = i + 1;
        const product = {
            id: id,
            productName: products_1.PRODUCTS[i],
            supplier: supplier,
            category: category,
            weight: weight,
            cannabisWeight: (0, tools_1.randomInt)(10),
            price: price,
            fee: feeCalculation(price, feeValue),
            sku: skuGen(id, supplier, category),
            imageURL: randomImageUrl(id),
            barcode: upcGen(id, UPCPrefix),
            description: descriptionGen(products_1.PRODUCTS[i], weight),
            cannabisVolume: cannabisVolGen(),
            isActive: true,
            createDate: createDate,
            updateDate: (0, tools_1.randomDate)(createDate, new Date()),
            fullProductName: fullNameGen(products_1.PRODUCTS[i], weight),
            productSlug: productSlugGen(id, products_1.PRODUCTS[i], category, weight),
            salesPrice: salesPriceGen(price),
            inventory: (0, tools_1.randomInt)(200),
            discountAmount: (0, tools_1.randomFloatTwoDig)(0.8, 0.1),
            productscol: "random product col",
        };
        products.push(product);
    }
    return products;
};
exports.genProducts = genProducts;
//# sourceMappingURL=genProducts.js.map