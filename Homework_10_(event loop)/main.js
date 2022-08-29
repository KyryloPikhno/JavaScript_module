// Зробити свій розпорядок дня.
//
//     У вас має бути більше 10 асинхронних дій з рандомними затримками.
//     Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//
//     Напиклад.
//     Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с
//
// І так далі

let energy = 0;

function goSleepAtNight(sleep) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (sleep) {
                energy += 100;
                console.log('i am ful of energy');
                resolve(energy);
            } else {
                console.log('i need to sleep');
                reject('i go to bad');
            }
        }, 1000);
    });
}

function haveBreakfast(energy){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (energy === 100) {
                energy -= 5;
                console.log('tasty breakfast');
                resolve(energy);
            } else {
                reject('I do not eat');
            }
        }, 600);
    });
}

function goToTheJym(energy) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (energy >= 95) {
                energy -= 10;
                console.log('it is a great training');
                resolve(energy);
            } else {
                reject('i am sleeping at home');
            }
        }, 500);
    });
}

function haveLunch(energy){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (energy > 60) {
                energy += 5;
                console.log('tasty lunch');
                resolve(energy);
            } else {
                reject('I do not eat lunch');
            }
        }, 200);
    });
}

function goToWork(energy) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (energy > 75) {
                energy -= 30;
                console.log('it is a good day at work');
                resolve(energy);
            } else {
                reject('i still sleep at home');
            }
        }, 600);
    });
}

function haveDinner(energy){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (energy > 50) {
                energy += 5;
                console.log('tasty dinner');
                resolve(energy);
            } else {
                reject('I do not eat dinner');
            }
        }, 150);
    });
}

function walkWithAGirlfriend(energy){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (energy >= 50) {
                energy -= 25;
                console.log('beautiful weather');
                resolve(energy);
            } else {
                reject('what is a useless day?');
            }
        }, 700);
    });
}

function doHomework(energy){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (energy >= 20) {
                energy -= 15;
                console.log('cool. New knowledge');
                resolve(energy);
            } else {
                reject('i lose');
            }
        }, 600);
    });
}

function talkWithRelatives(energy) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (energy >= 20) {
                energy -= 10;
                console.log('good');
                resolve(energy);
            } else {
                reject('i lose at all');
            }
        }, 400);
    });
}

function getReadyForSleep(energy) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (energy >= 10) {
                energy -= 5;
                console.log('good night');
                resolve(energy);
            } else {
                reject('i lost all day');
            }
        }, 600);
    });
}

// goSleepAtNight(sleep)
// haveBreakfast(energy)
// goToTheJym(energy)
// haveLunch(energy)
// goToWork(energy)
// haveDinner(energy)
// walkWithAGirlfriend(energy)
// doHomework(energy)
// talkWithRelatives(energy)
// getReadyForSleep(energy)

// goSleepAtNight(true)
//     .then(afterSleepAtNight => {
//         console.log(`my energy is ${afterSleepAtNight}`);
//
//         return haveBreakfast(afterSleepAtNight);
//     })
//     .then(afterHaveBreakfast => {
//         console.log(`my afterHaveBreakfast is ${afterHaveBreakfast}`);
//
//         return goToTheJym(afterHaveBreakfast)
//     })
//     .then(afterGoToTheJym => {
//         console.log(`my afterGoToTheJym is ${afterGoToTheJym}`);
//
//         return haveLunch(afterGoToTheJym)
//     })
//     .then(afterHaveLunch => {
//         console.log(`my afterHaveLunch is ${afterHaveLunch}`);
//
//         return goToWork(afterHaveLunch)
//     })
//     .then(afterGoToWork => {
//         console.log(`my afterGoToWork is ${afterGoToWork}`);
//
//         return haveDinner(afterGoToWork);
//     })
//     .then(afterHaveDinner => {
//         console.log(`my afterHaveDinner is ${afterHaveDinner}`);
//
//         return walkWithAGirlfriend(afterHaveDinner)
//     })
//     .then(afterWalkWithAGirlfriend => {
//         console.log(`my afterWalkWithAGirlfriend is ${afterWalkWithAGirlfriend}`);
//
//         return doHomework(afterWalkWithAGirlfriend)
//     })
//     .then(afterDoHomework => {
//         console.log(`my afterDoHomework is ${afterDoHomework}`);
//
//         return talkWithRelatives(afterDoHomework)
//     })
//     .then(afterTalkWithRelatives => {
//         console.log(`my afterTalkWithRelatives is ${afterTalkWithRelatives}`);
//
//         return getReadyForSleep(afterTalkWithRelatives)
//     })
//     .then(afterGetReadyForSleep => {
//         console.log(`my afterGetReadyForSleep is ${afterGetReadyForSleep}`);
//     })
//     .catch(reason => {
//         console.warn('fuck,', reason)
//     })

async function myDay() {
    let afterSleepAtNight = await goSleepAtNight(true);
    console.log(`my energy is ${afterSleepAtNight}`);

    let afterHaveBreakfast = await haveBreakfast(afterSleepAtNight);
    console.log(`my afterHaveBreakfast is ${afterHaveBreakfast}`);

    let afterGoToTheJym = await goToTheJym(afterHaveBreakfast);
    console.log(`my afterGoToTheJym is ${afterGoToTheJym}`);

    let afterHaveLunch = await haveLunch(afterGoToTheJym);
    console.log(`my afterHaveLunch is ${afterHaveLunch}`);

    let afterGoToWork = await goToWork(afterHaveLunch);
    console.log(`my afterGoToWork is ${afterGoToWork}`);

    let afterHaveDinner = await haveDinner(afterGoToWork);
    console.log(`my afterHaveDinner is ${afterHaveDinner}`);

    let afterWalkWithAGirlfriend = await walkWithAGirlfriend(afterHaveDinner);
    console.log(`my afterWalkWithAGirlfriend is ${afterWalkWithAGirlfriend}`);

    let afterDoHomework = await doHomework(afterWalkWithAGirlfriend);
    console.log(`my afterDoHomework is ${afterDoHomework}`);

    let afterTalkWithRelatives = await talkWithRelatives(afterDoHomework);
    console.log(`my afterTalkWithRelatives is ${afterTalkWithRelatives}`);

    let afterGetReadyForSleep = await getReadyForSleep(afterTalkWithRelatives);
    console.log(`my afterGetReadyForSleep is ${afterGetReadyForSleep}`);
}

myDay();











