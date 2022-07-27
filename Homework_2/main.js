
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let someThings = [10, 'name', true, -345, 'age', 49, true, 'status', 40.6, 'type', 'color']
console.log(someThings[0]);
console.log(someThings[1]);
console.log(someThings[2]);
console.log(someThings[3]);
console.log(someThings[4]);
console.log(someThings[5]);
console.log(someThings[6]);
console.log(someThings[7]);
console.log(someThings[8]);
console.log(someThings[9]);
console.log(someThings[10]);

let firstBook = {
    title: 'sad book',
    pageCount: 200,
    genre: 'drama'
};
// console.log(firstBook);

let secondBook = {
    title: 'horror book',
    pageCount: 300,
    genre: 'horror'
};
// console.log(secondBook);

let thirdBook = {
    title: 'fanny book',
    pageCount: 250,
    genre:'comedy'
}
// console.log(thirdBook);

const someBookOne = {
    title: 'book one',
    pageCount: 500,
    genre: 'roman',
    authors: ['name', 'age']
};
// console.log(someBookOne);

const someBookTwo = {
    title: 'book two',
    pageCount: 250,
    genre: 'drama',
    authors: ['name, age']
};
// console.log(someBookTwo);

const someBookThree = {
    title: 'book three',
    pageCount: 530,
    genre: 'comedy',
    authors: ['name', 'age']
};
// console.log(someBookThree);

let users = [
    {
        name: 'Alex Klimenko',
        username: 'Leha',
        password: 123321
    },
    {
        name: 'Vitaliy Shostuk',
        username: 'lil viv',
        password: 234432
    },
    {
        name: 'Nestor Bond',
        username: 'kNigga',
        password: 345543
    },
    {
        name: 'Tania Pop',
        username: 'love',
        password: 456654
    },
    {
        name: 'Sasha Denga',
        username: 'MONEY',
        password: 678876
    },
    {
        name: 'Dima Omelshenko',
        username: 'OMELA',
        password: 45665543
    },
    {
        name: 'Ulia Strik',
        username:'strikoza',
        password: 34323443999
    },
    {
        name:'Serega Gavrikov',
        username: 'bigfood',
        password: 45488548584858485
    },
    {
        name:'Vladik Koromislenko',
        username: 'Narz',
        password: '34fufufu34'
    },
    {
        name:'Artur Burdush',
        username:'karl',
        password:'68karl49'
    }
];

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);



