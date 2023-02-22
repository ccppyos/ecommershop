export const valideexpresion = (price:number) => {
    if(price<0){
        throw new Error("Price is < 0")
    }
}