// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
document.write('--------------------------------- TASK 1 ---------------------------------')

for(let i = 0 ; i < 10 ; i++) {
    let text = 'Some text'
    document.write(`<div class="block1">${text}</div>`);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
document.write('--------------------------------- TASK 2 ---------------------------------')
for(let i = 0 ; i < 10 ; i++){
    const t = 'Some text'
    document.write(`<div class="block2">${i} ${t}</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
document.write('--------------------------------- TASK 3 ---------------------------------')
let i = 0;
while (i < 20) {
    let text = 'Some text'
    document.write(`<h1 class="block3">${text}</h1>`);
    i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
document.write('--------------------------------- TASK 4 ---------------------------------')
let it = 0;
while ( it < 20) {
    let text = 'Some text'
    document.write(`<h1 class="block4">${it} ${text}</h1>`);
    it++;
}

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
document.write('--------------------------------- TASK 5 ---------------------------------')
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];



document.write(`<ul>`)
 for (let i = 0; i < listOfItems.length; i++) {
    let listOfItem = listOfItems[i];
    document.write(`<li>${listOfItem}</li>`);
}
document.write(`</ul>`)

document.write('--------------------------------- TASK 5 ---------------------------------')
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

 for( product of products){
     let title = products[product].title;
     let price = products[product].price;
     let image = products[product].image;

     document.write(`
         <div class="product-card">
             <h3 class="product-title">${title}<br>Price - ${price}</h3>
             <img src="${image}" alt="product" class="product-image">
         </div>
     `)
 }

//     є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

document.write('--------------------------------- TASK 6 ---------------------------------')

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

 for ( let user in users){
     let name = users[user].name
     if(users[user].status){
         document.write(`<h3>${name}</h3>`)
     }
 }

document.write('--------------------------------- TASK 6.2 ---------------------------------')

for (let user in users){
    let name = users[user].name;
    if(!users[user].status){
        document.write(`<h3>${name}</h3>`);
    }
}

document.write('--------------------------------- TASK 6.3 ---------------------------------')

for( let user in users) {
    let name = users[user].name;
    if (users[user].age > 30) {
        document.write(`<h3>${name}</h3>`);
    }
}