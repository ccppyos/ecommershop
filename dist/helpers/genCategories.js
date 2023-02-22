"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genCategories = void 0;
const category_1 = require("../data/category");
const type_photo_enum_1 = require("../enums/type-photo.enum");
const tools_1 = require("./tools");
const genCategories = () => {
    let categories = [];
    for (let i = 0; i < category_1.CATEGORIES.length; i++) {
        const n = (0, tools_1.randomInt)(3);
        let photoType;
        if (n === 0) {
            photoType = type_photo_enum_1.TypePhoto.document;
        }
        else if (n === 1) {
            photoType = type_photo_enum_1.TypePhoto.photo;
        }
        else {
            photoType = type_photo_enum_1.TypePhoto.kml;
        }
        const category = {
            categoryName: category_1.CATEGORIES[i],
            photoType,
            categoriesParentId: Math.floor(Math.random() * i)
        };
        categories.push(category);
    }
    return categories;
};
exports.genCategories = genCategories;
//# sourceMappingURL=genCategories.js.map