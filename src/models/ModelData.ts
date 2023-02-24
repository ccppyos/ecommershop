import { IData } from '../interfaces/datamodel.interface';

export class ModelData<T>{
    private _records: IData<T>[];
    constructor() {
        this._records = [];
    }

    public loadData(data: T[]) {
        data.map(record => this.create(record))
    }
    private _createRecord(data: T) {
        let max: number = 1;
        if (this._records.length > 0) {
            //Se obtiene el _id del último record ingresado
            let idLastRecord: number = this._records[this._records.length - 1]._id
            //nuevo máximo
            max = idLastRecord + 1;
        }

        const record = { _id: max, data: data };
        this._records.push(record);
        return record;
    }
    public create(record: T): Promise<IData<T>> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (record) {
                    resolve(this._createRecord(record))
                }
            }, 500);
        })
    }
    public find(): Promise<IData<T>[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._records);
            }, 500);
        })
    }
    public findById(id: number) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const recordFound = this._records.find(record => record._id === id)
                if (recordFound) {
                    resolve(recordFound);
                } else reject('Empty data');
            }, 500);
        })
    }
    public updateOneById(id: number, data: T): Promise<IData<T>> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let recordFound: IData<T> | undefined;
                this._records = this._records.map(record => {
                    if (record._id === id) {
                        recordFound = { ...record, data };
                        return recordFound;
                    } 
                    else return record;
                })
                if (recordFound) {
                    resolve(recordFound);
                } else reject('Record not found');
            }, 500);
        })
    }
    public deleteOneById(id: number): Promise<IData<T>> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const recordFound: IData<T> | undefined = this._records.find(record => record._id === id);
                if (recordFound) {
                    this._records = this._records.filter(record => record._id !== id)
                    resolve(recordFound)
                }
                else reject('Record not found');
            }, 500);
        })
    }

}