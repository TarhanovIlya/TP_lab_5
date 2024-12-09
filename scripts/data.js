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
        jobEndDate: null,
        photoLink: 'https://example.com/fmi_building.jpg'
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
        jobEndDate: null,
        photoLink: 'https://example.com/fmi_building.jpg'
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
        jobEndDate: new Date('2015-08-31'),
        photoLink: 'https://example.com/fmi_building.jpg'
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
        jobEndDate: null,
        photoLink: 'https://example.com/fmi_building.jpg'
    },
     {
    id: '5',  
    description: 'Декан факультета химии',  
    createdAt: new Date('2015-10-01T08:00:00'),  
    author: 'Администрация',  
    fullName: 'Виталий Витовт Витальевич',  
    scienceDegree: 'Кандидат наук',  
    academicTitle: 'Доцент', 
    jobStartDate: new Date('2015-10-01'),  
    jobEndDate: null,  
    photoLink: 'https://example.com/chemistry_dean.jpg'  
    },
    {
        id: '6',
        description: 'Декан факультета математики и информатики',
        createdAt: new Date('2015-09-01T08:00:00'),
        author: 'Администрация',
        fullName: 'Иванов Иван Иванович',
        scienceDegree: 'Доктор наук',
        academicTitle: 'Профессор',
        jobStartDate: new Date('2015-09-01'),
        jobEndDate: null,
        photoLink: 'https://example.com/fmi_building.jpg'
    }
];

export { addresses, phoneNumbers, staff }