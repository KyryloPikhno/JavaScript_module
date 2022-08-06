// --створити масив з:
//     - з 5 числових значень

let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers[i] = i;
}
    console.log(numbers);

// - з 5 стічкових значень

let words = [];
for (let i = 0; i < 5; i++) {
    words[i] = 'word';
}
    console.log(words);

// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let items = [];
for (let i = 0; i < 5; i++) {
    items[i] = 8;
    items[i + 5] = 'word';
    items[i + 10] = true;
}
    console.log(items);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let array =[];

for (let i = 0; i < 10; i++) {
    array[i] = 5+i;
}
    console.log(array)

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while

let arrayOfNumbers =[2,17,13,6,22,31,45,66,100,-18];

let i = 0;
while (i < arrayOfNumbers.length) {
    arrayOfNumbers[i];
    console.log(arrayOfNumbers[i]);
    i++;
}

//     2. перебрати його циклом for

for (let i = 0; i < arrayOfNumbers.length; i++) {
    arrayOfNumbers[i]
    console.log(arrayOfNumbers[i]);
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

i = 0;
while (i < arrayOfNumbers.length) {
    if(i % 2 === 1){
        console.log(arrayOfNumbers[i]);
    }
    i++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (i % 2 === 1) {
        console.log(arrayOfNumbers[i]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

i = 0;
while (i < arrayOfNumbers.length) {
    if(i % 2 === 0){
        console.log(arrayOfNumbers[i]);
    }
    i++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (i % 2 === 0) {
        console.log(arrayOfNumbers[i]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"

for (let i = 0; i < arrayOfNumbers.length; i++) {
    if(arrayOfNumbers[i] % 3 === 0) {
        arrayOfNumbers[i] = 'okten';
    }
}
console.log(arrayOfNumbers);
arrayOfNumbers =[2,17,13,6,22,31,45,66,100,-18];

// 8. вивести масив в зворотньому порядку.

 for (let i = arrayOfNumbers.length - 1; i >= 0 ; i--) {
     const arrayOfNumber = arrayOfNumbers[i];
     console.log(arrayOfNumber);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 1. перебрати його циклом while

i = arrayOfNumbers.length -1;
while (i >= 0) {
    let arrayOfNumber = arrayOfNumbers[i];
    i--;
    console.log(arrayOfNumber);
}

//     2. перебрати його циклом for

for (let i = arrayOfNumbers.length-1; i >= 0 ; i--) {
    arrayOfNumbers[i];
    console.log(arrayOfNumbers[i]);
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

i = arrayOfNumbers.length - 1;
while (i >=0 ) {
    if(i % 2 === 1){
        console.log(arrayOfNumbers[i]);
    }
    i--;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = arrayOfNumbers.length - 1; i >= 0; i--) {
    if (i % 2 === 1) {
        console.log(arrayOfNumbers[i]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

i = arrayOfNumbers.length -1;
while (i >= 0) {
    if (i % 2 === 0) {
        console.log(arrayOfNumbers[i]);
    }
    i--;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = arrayOfNumbers.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {
        console.log(arrayOfNumbers[i]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"

for (let i = arrayOfNumbers.length -1; i >= 0; i--) {
    if(arrayOfNumbers[i] % 3 === 0) {
        arrayOfNumbers[i] = 'okten';
        console.log(arrayOfNumbers);
    }
}

