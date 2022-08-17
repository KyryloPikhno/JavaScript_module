// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let arrayOfUsers = [];

let user1 = new User(1234, 'Vitaliy', 'LilViv', 'Mr.Viv@i.ua', +380675447632);
let user2 = new User(8796, 'Alex', 'Bebra', 'Mr.Bebra@i.ua', +380685746363);
let user3 = new User(3456, 'Nikita', 'Nik', 'Mr.nikita@i.ua', +380634624363);
let user4 = new User(4567, 'Tatiana', 'Tanuha', 'TATIANA.228@i.ua', +38068574697);
let user5 = new User(5678, 'Maxim', 'Mad Max', 'Mr.mad_max@i.ua', +380685746390);
let user6 = new User(9785, 'Nestor', 'Negr', 'Mr.white@i.ua', +38068574666);
let user7 = new User(4657, 'Dima', 'GALA', 'Mr.Grib@i.ua', +380685746654);
let user8 = new User(3634, 'Dasha', 'KIRICH', 'Mr.kirish@i.ua', +380685743334);
let user9 = new User(5686, 'Artem', 'Premier', 'Mr.VIDEOeditor@i.ua', +380685747765);
let user10 = new User(2334, 'Napan', 'Koch', 'Mr.Olimpia@i.ua', +380685987502);

arrayOfUsers.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10,);
console.log(arrayOfUsers);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let evenId = arrayOfUsers.filter(user => user.id % 2 === 0);
console.log(evenId);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortId = arrayOfUsers.sort((user1, user2) => user1.id - user2.id);
console.log(sortId);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client{
    constructor(id, name, surname, email, phone, orders) {
        this.id = id
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.orders = orders;
    }
}

let arrayOfClients = [];

let client1 = new Client(1234, 'Vitaliy', 'LilViv', 'Mr.Viv@i.ua', +380675447632, ['candy', 'pepper', 'banana','porridge']);
let client2 = new Client(5467, 'Alex', 'Bebra', 'Mr.Bebra@i.ua', +380685746363,['yogurt', 'orange', 'soup','flowers', 'sugar']);
let client3 = new Client(3456, 'Nikita', 'Nik', 'Mr.nikita@i.ua', +380634624363, ['meat', 'pepper', 'vegetables','margarine','orange'] );
let client4 = new Client(8977, 'Tatiana', 'Tanuha', 'TATIANA.228@i.ua', +38068574697, ['flowers', 'sugar', 'snickers','porridge']);
let client5 = new Client(6666, 'Maxim', 'Mad Max', 'Mr.mad_max@i.ua', +380685746390, ['fruit', 'porridge', 'seasoning','chicken giblets', 'seasoning']);
let client6 = new Client(4532, 'Dasha', 'KIRICH', 'Mr.kirish@i.ua', +380685743334, ['chicken',  'water']);
let client7 = new Client(5476, 'Dima', 'GALA', 'Mr.Grib@i.ua', +380685746654, ['soda', 'chicken giblets', 'seasoning']);
let client8 = new Client(6886, 'Nestor', 'Negr', 'Mr.white@i.ua', +38068574666, ['mineral water', 'pepper', 'coconut']);
let client9 = new Client(4354, 'Artem', 'Premier', 'Mr.VIDEOeditor@i.ua', +380685747765, ['flower']);
let client10 = new Client(2345, 'Napan', 'Koch', 'Mr.Olimpia@i.ua', +380685987502, ['freshener',  'margarine']);

arrayOfClients.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
console.log(arrayOfClients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortArrayOfClientProduct = arrayOfClients.sort((clientA, clientB) => clientB.orders.length - clientA.orders.length);
console.log(sortArrayOfClientProduct);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, producer, graduationYear, speed, engine) {
    this.model = model;
    this.producer = producer;
    this.graduationYear = graduationYear;
    this.speed = speed;
    this.engine = engine;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.speed}`);
    };
    this.info = function () {
        console.log(`Model - ${model}`);
        console.log(`Producer - ${producer}`);
        console.log(`Graduation year - ${graduationYear}`);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.speed += newSpeed;
        console.log(this.speed);
    }
    this.changeGraduationYear = function (newValue) {
        this.graduationYear = newValue;
        console.log(this.graduationYear);
    }
    this.addDriver = function (driver,age, experience) {
        this.driver = {
            driver: driver,
            age: age,
            experience: experience,
        }
    }
}

let car = new Car('Eleanor', 'Mustang', 1967, 270, 770);

car.drive()
car.info()
car.increaseMaxSpeed(20);
car.changeGraduationYear(1970)
car.addDriver('Vitaliy',30,5)
console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `
//     }їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class CarTwo {
    constructor(model, producer, graduationYear, speed, engine) {
        this.model = model;
        this.producer = producer;
        this.graduationYear = graduationYear;
        this.speed = speed;
        this.engine = engine;
        this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.speed}`);
        };
        this.info = function () {
            console.log(`Model - ${model}`);
            console.log(`Producer - ${producer}`);
            console.log(`Graduation year - ${graduationYear}`);
        }
        this.increaseMaxSpeed = function (newSpeed) {
            this.speed += newSpeed;
            console.log(this.speed);
        }
        this.changeGraduationYear = function (newValue) {
            this.graduationYear = newValue;
            console.log(this.graduationYear);
        }
        this.addDriver = function (driver, age, experience) {
            this.driver = {
                driver: driver,
                age: age,
                experience: experience,
            }
        }
    }
}

let carTwo = new CarTwo('Turbo S', 'Porsche', 2020, 300, 500);

carTwo.drive()
carTwo.info()
carTwo.increaseMaxSpeed(20);
carTwo.changeGraduationYear(2021)
carTwo.addDriver('Vitaliy',30,5)
console.log(carTwo);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

function Cinderella(name, age ,footSize){
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let cinderellas = [
    new Cinderella('Vika', 21, 38),
    new Cinderella('Tanya', 20, 40),
    new Cinderella('Ira', 21, 37),
    new Cinderella('Katya', 19, 38),
    new Cinderella('Susana', 22, 40),
    new Cinderella('Nastya', 23, 42),
    new Cinderella('Oksana', 21, 39),
    new Cinderella('Olya', 24, 40),
    new Cinderella('Anya', 22, 41),
    new Cinderella('Masha', 21, 36)
];

function Prince(name, age, slipper) {
    this.name = name;
    this.age = age;
    this.slipper = slipper;
}

let prince = new Prince('Vitaliy', 30, 42);

for(let cinderella of cinderellas){
    if (cinderella.footSize === prince.slipper) {
        console.log(cinderella.name);
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let cinderella = cinderellas.find(value =>value.footSize === prince.slipper);
console.log(cinderella.name);


















