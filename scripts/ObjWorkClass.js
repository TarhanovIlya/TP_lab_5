export class ObjInfWorkClass {
    // vars
    _privateObjInf = [];



    //methods

    constructor(objInf) {
        this._privateObjInf = objInf;
    }

    getObjs(filterConfig, skip = 0, top = 10) {

        let filteredData = this._privateObjInf;

        // Фильтрация данных, если указан filterConfig
        if (filterConfig) {
            filteredData = filteredData.filter(item => {
                for (const key in filterConfig) {
                    if (item[key] !== filterConfig[key]) {
                        return false; // Пропустить объект, если не совпадает
                    }


                }
                return true; // Оставить объект, если он соответствует условиям
            });
        }

        // Возвращаем данные с пагинацией
        let debugReturn = filteredData.slice(Number(skip), Number(skip) + Number(top));
        return debugReturn;
    }


    getObj(id) {
        this._privateCheckIdType(id);

        return this._privateObjInf.find((element) => { if (element.id == id) return element })

    };


    _privateValidateObj(Obj) {
        //function will return true, if Obj contains fields same to ObjInfo class
        let keys = Object.keys(this._privateObjInf[0]);

        /*      //NOTE Find if this check is needed
        if (keys.length < Object.keys(Obj).length) {
            console.log("DEBUG      validateObj:Obj has more fields than objInf")
            return false;
        }*/



        for (const elem of keys) {
            if (!Obj.hasOwnProperty(elem)) {
                console.log("DEBUG      missing field " + elem);                     //debug, remove later
                return false;
            }

            if (typeof (Obj[elem]) !== typeof (this._privateObjInf[0][elem])) {
                console.log("DEBUG      type of \'" + elem + "\' does not match")    //debug, remove later
                return false
            }
        }

        for (const elem of this._privateObjInf) {
            if (Obj.id == elem.id) {
                console.log("DEBUG      id is taken already")                        //debug, remove later
                return false;
            }
        }

        return true;
    };

    addObj(Obj) {
        if (!this._privateValidateObj(Obj)) return false;


        this._privateObjInf.push(Obj);
        return true;
    };

    editObj(id, Obj) {
        this._privateCheckIdType(id);

        const objToEdit = this._privateObjInf.find((element) => { if (id == element.id) return true });
        if (objToEdit == undefined) return false;



        const fieldsToEdit = Object.keys(Obj);

        const protectedFields = ['id', 'author', 'createdAt'];

        //check if user tries to edit protected field
        for (const field of fieldsToEdit) {
            for (const protectedField of protectedFields) {
                if (field == protectedField) return false;                               //throw an Error perhaps?
            }
        }

        //check if user tries to edit nonexistant field
        for (const field of fieldsToEdit) {
            if (!objToEdit.hasOwnProperty(field)) {
                return false;
            }
        }



        for (const field of fieldsToEdit) {
            objToEdit[field] = Obj[field];
        }

        return true;
    };

    removeObj(id) {
        this._privateCheckIdType(id);

        const objForDeletion = this.getObj(id);
        if (objForDeletion == undefined) return false;

        this._privateObjInf.splice(this._privateObjInf.indexOf(objForDeletion), 1);
        return true;
    };


    _privateCheckIdType(id) {
        if (typeof (id) != typeof (this._privateObjInf[0].id)) throw new Error("id type does not match");
    }
}
