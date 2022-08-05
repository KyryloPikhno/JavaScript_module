// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function areaOfRectangle(a, b) {
    return a * b;
}

console.log(areaOfRectangle(15, 20.5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function areaOfCircle(r) {
    return 3.14 * (r * r);
}

console.log(areaOfCircle(6));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areaOfCylinder (h, r){
    return 2 * 3.14 * r * (r + h);
}
console.log(areaOfCylinder (5,2));

// - створити функцію яка приймає масив та виводить кожен його елемент

function arrayItem(array){
    for (let item of items) {
        console.log(item);
    }
}

let items = [1, 2, 3, 'abc', -3];
arrayItem(items);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function textPrint(text){
    document.write(`<div>${text}</div>`);
}

textPrint('Hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function textPrintList (text){
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}

textPrintList ('How are you?')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function printTextList(text, amount) {
    document.write(`<ul>`);
    for (let i = 0; i < amount; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

printTextList('i am fine', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function arrayItemsList (array){
    document.write(`<ul>`);
    for (let item of array){
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`);
}

let arrayItems = [1, 2, 3, 4, 'abc', 5, 'ptn', 'pnh', true, false,'putin huilo',true];
arrayItemsList(arrayItems);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function arrayItemsDocument(array) {
    document.write(`<div class="container">`);
    for (user of users) {
        let id = user.id;
        let name = user.name;
        let age = user.age;
        document.write(`<div class="box">`);
        document.write(`<div class="targetId">id ${id}</div>`);
        document.write(`<h3>${name}</h3>`);
        document.write(`<div>age - ${age}</div>`);
        document.write(`</div>`);
    }
    document.write(`</div>`);
}

let users = [
    {id: 23456, name: 'Vitaliy', age: 27},
    {id: 25756, name: 'Alex', age: 52},
    {id: 83476, name: 'Victor', age: 33},
    {id: 20956, name: 'Tania', age: 24},
    {id: 23456, name: 'Lera', age: 17},
    {id: 21246, name: 'Nestor', age: 30},
    {id: 55786, name: 'Napan', age: 13},
];

arrayItemsDocument(users);

// - створити функцію яка повертає найменьше число з масиву

let numbers = [10,56,55,-67,-49];

function minNumberOfArray(array){
    let min = array[0];
    for(number of array) {
        if (min > number) {
            min = number;
        }
    }
    return min;
}

console.log('min number -',minNumberOfArray(numbers));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function sumOfElementsOfArray (array){
    let sum = 0;
    for(let i = 0; i < array.length ; i++){
       sum  += array[i]
    }
    return sum;
}

const arrayOfNumbers = [3,5,5,6,7,8,4,14];
console.log('sum numbers -',sumOfElementsOfArray(arrayOfNumbers));









