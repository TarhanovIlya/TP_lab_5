console.log("script is running");

import { addresses, phoneNumbers, staff } from "./data.js"







// Создать класс, который должен содержать следующие методы для работы с массивом ObjIn

import { ObjInfWorkClass } from "./ObjWorkClass.js"










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

