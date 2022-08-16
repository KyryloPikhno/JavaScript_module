
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

function cutString(str, n) {
    let array = [];
    for (let i = 0; i < str.length; i += n) {
        let sub = str.substring(i, i + n);
        array.push(sub);
    }
    return array
}

console.log(cutString('наслаждение', 3));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.

// document.writeln(delete_characters(str, 7)); // Каждый

function deleteCharacters(str, n){
    return  str.split('').slice(0, n).join('');
}

let str2 = 'Каждый охотник желает знать';
document.write(deleteCharacters(str2, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let str3 = "HTML JavaScript PHP";
let insertDash = str => {
    let newStr = str.replaceAll(' ', '-').toUpperCase();
    document.write(newStr);
}
insertDash(str3)

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let c = 'javascript is cool';
let firstLetterToUpperCase = str =>{
    let firstLetter = str[0].toUpperCase();
    let nextLetter = str.slice(1, str.length)
    let concat = firstLetter.concat(nextLetter);
    document.write(concat);
}
firstLetterToUpperCase(c);

// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'

// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let validName = n => {
    let newName = n.replaceAll('..', ' ')
        .replaceAll('---', ' ')
        .replaceAll('__', ' ')
    console.log(newName);
}
validName(n1);
validName(n2);
validName(n3);

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let randomNumber = (arr,num) =>{
    for (let i = 0; i < num; i++) {
        arr.push(Math.round(Math.random()*100))
    }
    console.log(arr)
}
let array = [];
randomNumber(array,15)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let arraySort =[];
randomNumber(arraySort,10);
let sorts = arraySort.sort((a , b) => a - b );
console.log(sorts);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

let arrayFilter =[];
randomNumber(arrayFilter,10);
let filter = arrayFilter.filter(a => (a %2 === 0));
console.log(filter);

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = str =>{
    let array = str.split(' ');
    let newArray =[];
    for (let arrayElement of array) {
        let firstLetterToUpperCase = arrayElement[0].toUpperCase();
        let nexLetter = arrayElement.slice(1, arrayElement.length);
        let concat = firstLetterToUpperCase.concat(nexLetter);
        newArray.push(concat);
    }
    let newString = newArray.join(' ');
    console.log(newString);
}
capitalize(c)

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях

// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

let eMail = str => {
    let lowerCaseStr = str.toLowerCase();
    let index =  lowerCaseStr.indexOf('.') - lowerCaseStr.indexOf('@') ;
    if (lowerCaseStr.includes('@') && !lowerCaseStr.startsWith('@') &&
        index > 2){
        console.log('Це робочий Email');
    }else {
        console.log('Це НЕ робочий Email');
    }
}
eMail('someemail@gmail.com');
eMail('someeMAIL@gmail.com');
eMail("someeMAIL@i.ua");
eMail("some.email@gmail.com");
// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

let sort = coursesArray.sort((u1, u2) =>  u1.modules - u2.modules);
console.log(sort);

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

let symb = 'о';
let str5 = "Астрономия это наука о небесных объектах";
let count = (str, stringSearch) =>{
    let search
    let index = str.indexOf(stringSearch);
    if (str[index] === stringSearch){
        search = str.indexOf(stringSearch) + 1;
    }
    return search;
}
document.writeln(count(str5, symb));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let str4 = "Сила тяжести приложена к центру масс тела";
let  cutString2 = (str, n) =>{
    let newString
    let arr = str.split(' ');
    newString = arr.slice(0, n).join(' ');
    return  newString;
}
document.writeln(cutString2(str4, 5))

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let books = [
    {name: 'Some B;kvnook', pages: 200, autors: ['somename', 'name', 'name', 'name'], ganre: ['aifusdgf', 'aifusdgf', 'aifusdgf']},
    {name: 'Some Bookd', pages: 300, autors: ['somename', 'name'], ganre: 'aifusdgf'},
    {name: 'Some Boo;dsk', pages: 400, autors: ['somename'], ganre: ['aifusdgf', 'aifusdgf']},
    {name: 'Some Book ;ldg d;', pages: 500, autors: ['somename'], ganre: 'aifusdgf'},
    {name: 'Some Boo[sdfk', pages: 100, autors: ['somename', 'name',], ganre: ['aifusdgf', 'aifusdgf', 'aifusdgf', 'aifusdgf']},
    {name: 'Some Boolsdfk', pages: 250, autors: ['somename', 'name', 'name'], ganre: 'aifusdgf'}
]

// -знайти наібльшу книжку.

let max = books[0];
books.forEach(book =>{
    if (book.pages > max.pages){
        max = book;
    }
});

console.log(max);

// - знайти книжку/ки з найбільшою кількістю жанрів
books.forEach(book => {
    if (book.ganre > max.ganre){
        max = book;
    }
})

console.log(max);

// - знайти книжку/ки з найдовшою назвою

books.forEach(book => {
    if (book.name.length > max.name.length){
        max = book;
    }
});

console.log(max);

// - знайти книжку/ки які писали 2 автори

console.log(books.filter(book => book.autors.length === 2));

// - знайти книжку/ки які писав 1 автор

console.log(books.filter(book => book.autors.length === 1));

// - вісортувати книжки по кількості сторінок по зростанню

let sort1 = books.sort((u1, u2) =>  u1.pages - u2.pages);
console.log(sort1);
