// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = +prompt('Введите число для переменной х');
let a = +prompt('Введите число для переменной а');

if (x !== 0 || a !==0) {
    alert('Вірно');
} else {
    alert('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('Введите число от 0 до 59');

if (time >= 0 && time <= 15) {
    alert('Первая четверть часа');
} else if (time >=16 && time <= 30){
    alert('Вторая четверть часа');
} else if (time >=31 && time <= 45){
    alert('Третья четверть часа');
} else if (time >=46 && time <60){
    alert('Четвертая четверть часа');
} else {
    alert('Error');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('Введите число от 1 до 31')

if (day >= 1 && day <= 10){
    alert('Превая декада');
} else if(day >= 11 && day <= 20){
    alert('Вторая декада');
} else if(day >= 21 && day <= 31){
    alert('Третья декада');
}else{
    alert('Error');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let d = +prompt('Введите порядковый номер дня недели');

switch (d) {
    case 1:
        console.log('1 Поучить английский');
        console.log('2 Сходить в тренажерный зал');
        console.log('3 Поубирать дома');
        break;
    case 2:
        console.log('1 Выгулять собаку');
        console.log('2 Сходить в магазин');
        break;
    case 3:
        console.log('1 Проведать бабушку');
        console.log('2 Сходить в кино');
        console.log('3 Выгулять собаку');
        break;
    case 4:
        console.log('1 Проведать бабушку');
        console.log('2 Сходить в тренажерный зал');
        console.log('3 Поучить английский');
        break;
    case 5:
        console.log('1 Поучить английский');
        console.log('2 Погулять');
        console.log('3 Почистить обувь');
        break;
    case 6:
        console.log('1 Постирать вещи');
        console.log('2 Сходить в тренажерный зал');
        console.log('3 Приготовить торт');
        break;
    case 7:
        console.log('1 Заполнить документы');
        console.log('2 Смонтировать видео');
        console.log('3 Погладить вещи');
        break;
    default:
        console.log('Что-то пошло не так :(');
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let number1 = +prompt('Input first number');
let number2 = +prompt('Input second number');

if(number1 < number2) {
    alert(number2);
} else if (number1 > number2){
    alert(number1);
} else if (number1 === number2){
    alert('Equal numbers');
} else {
    alert('Some error');
}

//     - є змінна хxx, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let xxx = prompt('Enter something') || 'falsy';
console.log(xxx)
















