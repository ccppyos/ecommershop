"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genPersons = void 0;
const address_1 = require("../data/address");
const people_1 = require("../data/people");
const randomPick = (list) => {
    return list[Math.floor(Math.random() * list.length)];
};
const namesGen = (namesList) => {
    const firstName = randomPick(namesList);
    let secondName = firstName;
    while (firstName === secondName)
        secondName = randomPick(namesList);
    return [firstName, secondName];
};
const personNameGen = () => {
    //Seleccionar si son nombers de mujer u hombre
    let [firstName, secondName] = ["", ""];
    if (Math.floor(Math.random() * 2)) {
        [firstName, secondName] = namesGen(people_1.MALE_NAMES);
    }
    else {
        [firstName, secondName] = namesGen(people_1.FEMALE_NAMES);
    }
    const lastName = randomPick(people_1.LAST_NAMES);
    return [firstName, secondName, lastName];
};
const emailGen = (firstName, secondName, lastName) => {
    const domain = randomPick(address_1.EMAIL_DOMAINS);
    if (Math.floor(Math.random() * 2)) {
        return `${firstName.toLowerCase()}.${secondName.toLowerCase()}${lastName.toLowerCase().charAt(0)}@${domain}`;
    }
    else {
        return `${firstName.toLowerCase()}.${secondName.toLowerCase().charAt(0)}${lastName.toLowerCase()}@${domain}`;
    }
};
const addressGen = () => {
    return `${randomPick(address_1.STREET_AVENUE_NAMES)}, ${Math.floor(Math.random() * 10000)}, ${randomPick(address_1.NAVIGATION)}`;
};
const phoneGen = () => {
    return `+${Math.floor(Math.random() * (100000000000 - 9999999999)) + 1000000000}`;
};
const genPersons = (n) => {
    let persons = [];
    for (let i = 0; i < n; i++) {
        const [firstName, secondName, lastName] = personNameGen();
        const person = {
            supplierName: `${firstName} ${secondName} ${lastName}`,
            address: addressGen(),
            email: emailGen(firstName, secondName, lastName),
            phone: phoneGen()
        };
        persons.push(person);
    }
    return persons;
};
exports.genPersons = genPersons;
//# sourceMappingURL=genPersons.js.map