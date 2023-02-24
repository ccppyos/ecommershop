import { ISupplier } from "../interfaces/supplier.interface";
import { NAVIGATION, STREET_AVENUE_NAMES, EMAIL_DOMAINS } from "../data/address";
import { MALE_NAMES, FEMALE_NAMES, LAST_NAMES } from "../data/people";

const randomPick = (list: string[]): string => {
    return list[Math.floor(Math.random() * list.length)]
}

const namesGen = (namesList: string[]): string[] => {

    const firstName:string = randomPick(namesList);
    let secondName:string = firstName

    while (firstName === secondName)
        secondName = randomPick(namesList);

    return [firstName, secondName]
}

const personNameGen = (): string[] => {
    //Seleccionar si son nombers de mujer u hombre
    let [firstName, secondName]: string[] = ["", ""];

    if (Math.floor(Math.random() * 2)) {
        [firstName, secondName] = namesGen(MALE_NAMES);
    }
    else {
        [firstName, secondName] = namesGen(FEMALE_NAMES);
    }
    const lastName: string = randomPick(LAST_NAMES);

    return [firstName, secondName, lastName];
}


const emailGen = (firstName: string, secondName: string, lastName: string): string => {

    const domain = randomPick(EMAIL_DOMAINS)

    if (Math.floor(Math.random() * 2)) {
        return `${firstName.toLowerCase()}.${secondName.toLowerCase()}${lastName.toLowerCase().charAt(0)}@${domain}`
    }
    else {
        return `${firstName.toLowerCase()}.${secondName.toLowerCase().charAt(0)}${lastName.toLowerCase()}@${domain}`
    }
}

const addressGen = (): string => {
    return `${randomPick(STREET_AVENUE_NAMES)}, ${Math.floor(Math.random() * 10000)}, ${randomPick(NAVIGATION)}`
}

const phoneGen = (): string => {
    return `+${Math.floor(Math.random() * (100000000000 - 9999999999)) + 10000000000}`
}

export const genSuppliers = (n: number): ISupplier[] => {
    let persons: ISupplier[] = [];
    for (let i: number = 0; i < n; i++) {
        const [firstName, secondName, lastName]: string[] = personNameGen();
        const person: ISupplier = {
            supplierName: `${firstName} ${secondName} ${lastName}`,
            address: addressGen(),
            email: emailGen(firstName, secondName, lastName),
            phone: phoneGen()
        }
        persons.push(person);
    }
    return persons
}
