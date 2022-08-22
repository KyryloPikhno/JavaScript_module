// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.

let divContainer = document.createElement('div');
divContainer.classList.add('container')
document.body.appendChild(divContainer);

for(let person of simpsons) {
    let divSimpson = document.createElement('div');
    divSimpson.classList.add('member');

    let nameAndAge = document.createElement('h3');
    nameAndAge.innerText = `${person.name} ${person.surname} - ${person.age}`
    divSimpson.appendChild(nameAndAge);

    let infoOfPerson = document.createElement('p');
    infoOfPerson.innerText = person.info;
    divSimpson.appendChild(infoOfPerson);

    let imgOfPerson = document.createElement('img');
    imgOfPerson.src = person.photo;
    divSimpson.appendChild(imgOfPerson);

    divContainer.appendChild(divSimpson)
}

// Цикл в циклі
// - Є масив

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

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

let divContainerForCourses = document.createElement('div');
document.body.appendChild(divContainerForCourses);
divContainerForCourses.classList.add('container');

for(let course of coursesArray){
    let divCourse = document.createElement('div');
    divCourse.classList.add('member');
    divContainerForCourses.appendChild(divCourse);

    let titleCourses = document.createElement('h2');
    titleCourses.classList.add('title');
    titleCourses.innerText = course.title;
    divCourse.appendChild(titleCourses);

    let divInfo = document.createElement('div');
    divInfo.classList.add('divInfo');
    divCourse.appendChild(divInfo);

    let monthDuration = document.createElement('p');
    monthDuration.classList.add('paragraph');
    monthDuration.innerText = `monthDuration: ${course.monthDuration}`;
    divInfo.appendChild(monthDuration);

    let hourDuration = document.createElement('p')
    hourDuration.classList.add('paragraph');
    hourDuration.innerText = `hourDuration: ${course.hourDuration}`;
    divInfo.appendChild(hourDuration);

    let divForUl = document.createElement('div');
    divForUl.classList.add('divForUl');
    divCourse.appendChild(divForUl);

    let ulModule = document.createElement('ul');
    ulModule.classList.add('ulModule');
    divForUl.appendChild(ulModule);

    for (let i = 0; i < course.modules.length; i++) {
        let liModule = document.createElement('li');
        liModule.innerText = course.modules[i];
        ulModule.appendChild(liModule);
    }
}

//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let block = document.createElement('div');
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
block.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque dicta dignissimos doloribus ea eius, esse exercitationem fugit incidunt labore nihil numquam repellat totam? Accusamus aut enim hic repellendus veritatis.';
document.body.appendChild(block);

document.body.appendChild(block.cloneNode(true));

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let items = ['Main', 'Products', 'About us', 'Contacts'];

let menu = document.getElementsByClassName('menu')[0];

for (let i = 0; i < items.length; i++) {
    let itemLi = document.createElement('li');
    itemLi.innerText = items[i];
    menu.appendChild(itemLi);
}

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h2 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for(let i = 0 ; i < coursesAndDurationArray.length ; i++){
    let containerForInfo = document.createElement('div')
    containerForInfo.classList.add('item');
    document.body.appendChild(containerForInfo);

    let divForTitle = document.createElement('h2');
    divForTitle.classList.add('heading');
    divForTitle.innerText = `Title - ${coursesAndDurationArray[i].title}`;
    containerForInfo.appendChild(divForTitle);

    let divForMonthDuration = document.createElement('p');
    divForMonthDuration.classList.add('description');
    divForMonthDuration.innerText = `MonthDuration - ${coursesAndDurationArray[i].monthDuration}`;
    containerForInfo.appendChild(divForMonthDuration);
}

//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let element = document.createElement('div');
element.className = 'text';
element.innerText = 'click me please';
document.body.appendChild(element);
element.onclick = function (e) {
    e.preventDefault();
    element.innerText = '';
    element.className = '';
};

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let form = document.createElement('form');
form.classList.add('form')
document.body.appendChild(form);

let users = [];

form.onsubmit = function (e) {
    e.preventDefault()
    let name = this.name.value;
    let age = this.age.value;
    let status = this.status.checked;
    let user = {name, age, status};
    users.push(user);
    console.log(users);

    if (name && age > 0 && age < 18 && status) {
        alert(`${name} you are too young`);
    } else if (name && age >= 18 && age < 100 && status) {
        alert(`Hi ${name} glad to see you`);
    } else {
        alert('Error');
    }
};

let inputName = document.createElement('input');
inputName.type = 'text';
inputName.name = 'name';
form.appendChild(inputName);

let inputAge = document.createElement('input');
inputAge.type = 'number';
inputAge.name = 'age';
form.appendChild(inputAge);

let button = document.createElement('button');
button.innerText = 'submit';
form.appendChild(button);

let status = document.createElement('input');
status.type = 'checkbox';
status.name = 'status';
form.appendChild(status);

// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let input1 = document.createElement("input");
input1.type = 'number';
input1.name="tr";

let input2 = document.createElement("input");
input2.type = 'number';
input2.name = "td";

let content = document.createElement("input");
content.type = 'text';
content.name = "content";

let submit = document.createElement("button");
submit.innerText = "create table";

document.body.append(input1,input2,content,submit );

submit.onclick= function(e){
    e.preventDefault();
    let table = document.createElement("table");
    table.style.border = "2px solid black";

    for (let i = 0; i < +input1.value; i++) {
        let tr = document.createElement("tr");
        // tr.style.border = "2px solid black";

        for (let i = 0; i < +input2.value; i++) {
            let td = document.createElement("td");
            td.style.border = "2px solid black";
            td.innerText = content.value;
            tr.appendChild(td);
            table.appendChild(tr);
        }
    }
    document.body.appendChild(table);
}



