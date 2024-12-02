// let week = {
//     dayOne: "понедельник",
//     dayTwo: "вторние",
//     dayThree: "среда",
//     dayFour: "четверг",
//     dayFive: "пятница",
//     daySix: "суббота",
//     daySeven: "воскресенье"
// }

// console.log(week[dayTwo]);


// let user = {
//     name: 'Ivan',
//     surname: 'Dzevetckiy',
//     age: 20,
//     twoName: prompt (''),
// }

// delete user.surname;

// console.log(`${user.name} - ${user.age} - ${user.twoName}`);




// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']; 
// const arr2 = [1, 2, 3, 4, 5, 6, 7];

// let dayObject = {}

// for (let i = 0; i < arr1.length; i++) {
//     dayObject[arr1[i]] = arr2[i]
    
// }

// console.log(dayObject);



// const obj = {
//     x: 1,
//     y: 2,
//     z: 3
// };


// for (const key in obj) {
//     if (obj.hasOwnProperty(key))
//          { 
//             obj[key] = obj[key] ** 2; 
//         }
// }

// console.log(obj);




// const obj = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     }
// };

// let sum = 0;

// for (let key in obj) {
//     for (let innerKey in obj[key]) {
//         sum += obj[key][innerKey];
//     }
// }

// console.log(sum); 



// let riddles = {
//     question: alert ('Земля круглая или проская?'),
//     answer: prompt(''),
// }

// if (answer = 'Круглая') {
//     console.log('Вы выйграли')
// } else {
//     console.log('Вы проиграли')
// }



// let riddles = {
//     question: "Земля круглая или плоская?",
//     answer: "Круглая",
    
//     askQuestion: function() {
//         let userAnswer = prompt(this.question);
//         if (userAnswer === this.answer) {
//             console.log("Вы выиграли");
//         } else {
//             console.log("Вы проиграли");
//         }
//     }
// };


