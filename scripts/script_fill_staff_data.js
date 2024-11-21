console.log("script is running");

// Адреса учебных подразделений
const addresses = [
    {
        id: '1',
        description: 'Факультет математики и информатики',
        createdAt: new Date('2020-01-01T12:00:00'),
        author: 'Администрация',
        address: 'г. Минск, ул. Советская, 123',
        photoLink: 'https://example.com/fmi_building.jpg'
    },
    {
        id: '2',
        description: 'Факультет физики',
        createdAt: new Date('2020-02-01T12:00:00'),
        author: 'Администрация',
        address: 'г. Минск, ул. Пушкина, 45',
        photoLink: ''
    },
    {
        id: '3',
        description: 'Факультет химии',
        createdAt: new Date('2020-03-01T12:00:00'),
        author: 'Администрация',
        address: 'г. Минск, ул. Гагарина, 78',
        photoLink: 'https://example.com/chem_building.jpg'
    }
];

// Телефонные номера учебных подразделений
const phoneNumbers = [
    {
        id: '1',
        description: 'Телефон деканата факультета математики и информатики',
        createdAt: new Date('2020-01-01T12:00:00'),
        author: 'Администрация',
        phoneNumber: '+375 17 123-45-67'
    },
    {
        id: '2',
        description: 'Телефон деканата факультета физики',
        createdAt: new Date('2020-02-01T12:00:00'),
        author: 'Администрация',
        phoneNumber: '+375 17 234-56-78'
    },
    {
        id: '3',
        description: 'Телефон деканата факультета химии',
        createdAt: new Date('2020-03-01T12:00:00'),
        author: 'Администрация',
        phoneNumber: '+375 17 345-67-89'
    }
];

// Персонал учебных подразделений
const staff = [
    {
        id: '1',
        description: 'Декан факультета математики и информатики',
        createdAt: new Date('2015-09-01T08:00:00'),
        author: 'Администрация',
        fullName: 'Иванов Иван Иванович',
        scienceDegree: 'Доктор наук',
        academicTitle: 'Профессор',
        jobStartDate: new Date('2015-09-01'),
        jobEndDate: null
    },
    {
        id: '2',
        description: 'Декан факультета физики',
        createdAt: new Date('2010-09-01T08:00:00'),
        author: 'Администрация',
        fullName: 'Петров Петр Петрович',
        scienceDegree: 'Доктор наук',
        academicTitle: 'Профессор',
        jobStartDate: new Date('2010-09-01'),
        jobEndDate: null
    },
    {
        id: '3',
        description: 'Декан факультета химии',
        createdAt: new Date('2005-09-01T08:00:00'),
        author: 'Внешний источник',
        fullName: 'Сидоров Сидор Сидорович',
        scienceDegree: 'Кандидат наук',
        academicTitle: '',
        jobStartDate: new Date('2005-09-01'),
        jobEndDate: new Date('2015-08-31')
    },
    {
        id: '4',
        description: 'Заведующий кафедрой алгебры',
        createdAt: new Date('2010-09-01T08:00:00'),
        author: 'Администрация',
        fullName: 'Александров Александр Александрович',
        scienceDegree: 'Доктор наук',
        academicTitle: 'Профессор',
        jobStartDate: new Date('2010-09-01'),
        jobEndDate: null
    }
];










// Создать класс, который должен содержать следующие методы для работы с массивом ObjIn

class ObjInfWorkClass {
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

            if (typeof (Obj[elem]) !== typeof (this._privateObjInf[0][elem])){
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

        this._privateObjInf.splice(this._privateObjInf.indexOf(objForDeletion),1);
        return true;
    };


    _privateCheckIdType(id) {
        if (typeof (id) != typeof (this._privateObjInf[0].id)) throw new Error("id type does not match");
    }
}











//code test
console.log("length of array \'addresses\' is " + addresses.length)
console.log(addresses)


console.log("length of array \'phoneNumbers\' is " + phoneNumbers.length)
console.log(phoneNumbers)


console.log("length of array \'staff\' is " + staff.length)
console.log(staff)

console.log("array after getObjs({author: 'Администрация'},0,10): ");
const a = new ObjInfWorkClass(staff);
console.log(a.getObjs({ author: 'Администрация' } ,0,10));



console.log("return staff with id = 2");
console.log(a.getObj("2"));

console.log("validate obj (missing fields): \n\n" +

    "id: \'5\'\n" +
    "description: \'Заведующий кафедрой алгебры\'\n"
);

console.log(a._privateValidateObj({
    id: '5',
    description: 'Заведующий кафедрой алгебры',
}));

console.log("validate obj (wrong type of id): \n\n" +

    "id: 5\n" +
    "description: 'Заведующий кафедрой алгебры'\n" +
    "createdAt: new Date('2010-09-01T08:00:00')\n" +
    "author: 'Администрация'\n" +
    "fullName: 'Александров Александр Александрович'\n" +
    "scienceDegree: 'Доктор наук'\n" +
    "academicTitle: 'Профессор'\n" +
    "jobStartDate: new Date('2010-09-01')\n" +
    "jobEndDate: null"
);

console.log(a._privateValidateObj({
    id: 5,
    description: 'Заведующий кафедрой алгебры',
    createdAt: new Date('2010-09-01T08:00:00'),
    author: 'Администрация',
    fullName: 'Александров Александр Александрович',
    scienceDegree: 'Доктор наук',
    academicTitle: 'Профессор',
    jobStartDate: new Date('2010-09-01'),
    jobEndDate: null
}));


console.log("validate obj (all correct): \n\n" +

    "id: \'5\'\n" +
    "description: 'Заведующий кафедрой алгебры'\n" +
    "createdAt: new Date('2010-09-01T08:00:00')\n" +
    "author: 'Администрация'\n" +
    "fullName: 'Александров Александр Александрович'\n" +
    "scienceDegree: 'Доктор наук'\n" +
    "academicTitle: 'Профессор'\n" +
    "jobStartDate: new Date('2010-09-01')\n" +
    "jobEndDate: null"
);

console.log(a._privateValidateObj({
    id: '5',
    description: 'Заведующий кафедрой алгебры',
    createdAt: new Date('2010-09-01T08:00:00'),
    author: 'Администрация',
    fullName: 'Александров Александр Александрович',
    scienceDegree: 'Доктор наук',
    academicTitle: 'Профессор',
    jobStartDate: new Date('2010-09-01'),
    jobEndDate: null
}));




console.log("add obj: \n\n" +

    "id: \'5\'\n" +
    "description: 'Заведующий кафедрой алгебры'\n" +
    "createdAt: new Date('2010-09-01T08:00:00')\n" +
    "author: 'Администрация'\n" +
    "fullName: 'Азимов Антон Антонович'\n" +
    "scienceDegree: 'Доктор наук'\n" +
    "academicTitle: 'Профессор'\n" +
    "jobStartDate: new Date('2010-09-01')\n" +
    "jobEndDate: null"
);

console.log(a.addObj({
    id: '5',
    description: 'Заведующий кафедрой алгебры',
    createdAt: new Date('2010-09-01T08:00:00'),
    author: 'Администрация',
    fullName: 'Азимов Антон Антонович',
    scienceDegree: 'Доктор наук',
    academicTitle: 'Профессор',
    jobStartDate: new Date('2010-09-01'),
    jobEndDate: null
}));


console.log("remove element with id = 3");
console.log(a.removeObj('3'));

console.log("remove element with id = 10 (wrong index)");
console.log(a.removeObj('10'));


console.log("return staff with id = 2");
console.log(a.getObj("2"));
console.log("edit staff with id = 2, change \'name\' to \'Виталий Виталиевич\' and \'scienceDegree\' to \'Студент\'");
console.log(a.editObj('2', { fullName: "Виталий Виталиевич", scienceDegree: "Студент" }));
console.log("return staff with id = 2");
console.log(a.getObj("2"));

console.log("edit staff with id = 2, change \'status\' to \'работает\' and \'eigenvalue\' to \'1\' (wrong, nonexistant fields)");
console.log(a.editObj('2', { status: "работает", eigenvalue: "1" }));

console.log("edit staff with id = 2, change \'author\' to \'me\'  (wrong, protected field)");
console.log(a.editObj('2', {author:"me"}));































// Testing ObjInfWorkClass with the 'addresses' array
console.log("\nTesting ObjInfWorkClass with 'addresses' array:");
const addressTest = new ObjInfWorkClass(addresses);

// Test getObjs method
console.log("Testing getObjs({author: 'Администрация'}):");
console.log(addressTest.getObjs({ author: 'Администрация' }));

// Test getObj method
console.log("Return address with id = 2:");
console.log(addressTest.getObj("2"));

// Test addObj method
console.log("Adding a new address:");
const newAddress = {
    id: '4',
    description: 'Новый факультет',
    createdAt: new Date('2024-11-01T08:00:00'),
    author: 'Администрация',
    address: 'г. Минск, ул. Победителей, 10',
    photoLink: 'https://example.com/new_building.jpg'
};
console.log(addressTest.addObj(newAddress));
console.log(addressTest.getObj("4"));

// Test removeObj method
console.log("Removing address with id = 3:");
console.log(addressTest.removeObj('3'));
console.log("Trying to remove a non-existent address with id = 10:");
console.log(addressTest.removeObj('10'));

// Test editObj method
console.log("Editing address with id = 2 (changing address):");
console.log(addressTest.editObj('2', { address: 'г. Минск, ул. Ленина, 100' }));
console.log(addressTest.getObj("2"));

// Test invalid edit (protected field)
console.log("Editing address with id = 2 (changing author, which is protected):");
console.log(addressTest.editObj('2', { author: 'New Author' }));

// Testing ObjInfWorkClass with the 'phoneNumbers' array
console.log("\nTesting ObjInfWorkClass with 'phoneNumbers' array:");
const phoneNumberTest = new ObjInfWorkClass(phoneNumbers);

// Test getObjs method
console.log("Testing getObjs({author: 'Администрация'}):");
console.log(phoneNumberTest.getObjs({ author: 'Администрация' }));

// Test getObj method
console.log("Return phone number with id = 2:");
console.log(phoneNumberTest.getObj("2"));

// Test addObj method
console.log("Adding a new phone number:");
const newPhoneNumber = {
    id: '4',
    description: 'Телефон деканата нового факультета',
    createdAt: new Date('2024-11-01T08:00:00'),
    author: 'Администрация',
    phoneNumber: '+375 17 456-78-90'
};
console.log(phoneNumberTest.addObj(newPhoneNumber));
console.log(phoneNumberTest.getObj("4"));

// Test removeObj method
console.log("Removing phone number with id = 1:");
console.log(phoneNumberTest.removeObj('1'));
console.log("Trying to remove a non-existent phone number with id = 10:");
console.log(phoneNumberTest.removeObj('10'));

// Test editObj method
console.log("Editing phone number with id = 3 (changing phoneNumber):");
console.log(phoneNumberTest.editObj('3', { phoneNumber: '+375 29 987-65-43' }));
console.log(phoneNumberTest.getObj("3"));

// Test invalid edit (protected field)
console.log("Editing phone number with id = 3 (changing author, which is protected):");
console.log(phoneNumberTest.editObj('3', { author: 'New Author' }));
