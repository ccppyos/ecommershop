"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelData = void 0;
class ModelData {
    constructor() {
        this._records = [];
    }
    loadData(data) {
        data.map(record => this.create(record));
    }
    _createRecord(data) {
        let max = 1;
        if (this._records.length > 0) {
            //Se obtiene el _id del último record ingresado
            let idLastRecord = this._records[this._records.length - 1]._id;
            //nuevo máximo
            max = idLastRecord + 1;
        }
        const record = { _id: max, data: data };
        this._records.push(record);
        return record;
    }
    //Se trabaja con promesa porque se trata de simular a una bd
    create(record) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (record) {
                    //IMO: debería recibir el nombre de data puesto que al momento de crear el record se pasa record => Data => record
                    resolve(this._createRecord(record));
                }
            }, 500);
        });
    }
    find() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._records);
            }, 500);
        });
    }
    findById(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const recordFound = this._records.find(record => record._id === id);
                if (recordFound) {
                    resolve(recordFound);
                }
                else
                    reject('Empty data');
            }, 500);
        });
    }
    updateOneById(id, data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let recordFound;
                //Se considera que recordfound puede no ser encontrado y terminar en 
                //undefined, en tal sentido se declara | undefined
                this._records = this._records.map(record => {
                    if (record._id === id) {
                        recordFound = Object.assign(Object.assign({}, record), { data });
                        return recordFound;
                    }
                    else
                        return record;
                });
                if (recordFound) {
                    resolve(recordFound);
                }
                else
                    reject('Record not found');
            }, 500);
        });
    }
    deleteOneById(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const recordFound = this._records.find(record => record._id === id);
                if (recordFound) {
                    this._records = this._records.filter(record => record._id !== id);
                    resolve(recordFound);
                }
                else
                    reject('Record not found');
            }, 500);
        });
    }
}
exports.ModelData = ModelData;
//# sourceMappingURL=ModelData.js.map