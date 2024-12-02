// function dataUser() {
//     console.log('Привет Иван Джевецкий с возрастом 20 лет')
// }

// dataUser();


// function constructNumber(num) {
    
//         console.log(num ** 2)
//     }

// constructNumber(5);


// b= 5
// function Number1(a) {
//     if (b > 0) {
//         console.log('Число положительное')
//     } else {
//         console.log('Число отрицательное')
//     }
// }

// Number1();


// function SumNambers(OneNumber, TwoNumber, ThreeNumber) {
//     console.log(OneNumber + TwoNumber + ThreeNumber)
// }

// SumNambers( 5, 6 ,9)

// function SumNambers(OneNumber, TwoNumber, ThreeNumber) {
//     console.log(OneNumber + TwoNumber + ThreeNumber)
// }

// param1 = 1;
// param2 = 2;
// param3 = 3;

// SumNambers(param1, param2, param3)


// function func(num=10) {
//     console.log(num * num)
// }

// func(2)
// func(3)
// func()


// function squre(num) {
//     return(Math.sqrt(num))
// }

// console.log(squre(3) + squre(4))



// function min(num1, num2) {
//     if (num1< num2) {
//         console.log(num1)
//     } else {
//         console.log(num2)
//     }
// }

// min(2,1)


// function dayOfweek(day) {
//     switch (day) {
//         case 1:
//         return 'Понедельник'
//         break;

//         case 2:
//         return 'Вторник'
//         break;

//         case 3:
//         return 'Среда'
//         break;

//         case 4:
//         return 'Четверг'
//         break;

//         case 5:
//         return 'Пятница'
//         break;

//         case 6:
//         return 'Суббота'
//         break;

//         case 7:
//         return 'Воскресенье'
//         break;

//         default:
//             break;
//     }
// }


// console.log(dayOfweek(5));

// function HiofWeek(name, time) {
//     switch (time) {
//         case 1:
//             return 'Доброе утро'
//             break;

//             case 2:
//             return 'Добрый день'
//             break;

//             case 3:
//             return 'Добрый вечер'
//             break;

//             case 4:
//             return 'Доброй ночи'
//             break;
    
//         default:
//             break;
//     }
// }

// console.log(HiofWeek(Иван, 2))



// function cube(numbers) {
//     return numbers ** 3
// }

// let result = cube(2) + cube(3);
// console.log(result)


// function calculateSalaryAfterTax(salary) {
//     return salary * 0.87;
// }

// let input = prompt('Введите число');
// let number = parseFloat(input);

// if (isNaN (number)) {
//     console.log('Згачение задано неверно')
// } else {
//     let afterTax = calculateSalaryAfterTax(number);
// console.log(`Размер заработной платы за вычетом налогов равен
// ${afterTax}`);
// }


// function number(a, b ,c) {
//     let max = a; 

//     if (b >max) {
//         console.log(`${b} является максимальным значением`)
//     }  if (c > max) {
//         console.log(`${c} является максимальным значением`)
//     }

//     return max;
// }

// let num1 = parseFloat(prompt('Введите первое число:'));
// let num2 = parseFloat(prompt('Введите второе число:'));
// let num3 = parseFloat(prompt('Введите третье число:'));

// let max = findMax(num1, num2, num3);

// console.log('Максимальное значение:', max);


// function add(a, b) {
//     return a + b;
//     }
//     // Функция вычитания
//     function subtract(a, b) {
//     return a > b ? a - b : 0;
//     }
//     // Функция умножения
//     function multiply(a, b) {
//     return a * b;
//     }
//     // Функция деления
//     function divide(a, b) {
//     return b !== 0 ? a / b : 'Деление на ноль недопустимо';
//     }
//     // Примеры использования функций
//     console.log(add(2, 6)); // 8
//     console.log(subtract(5, 3)); // 2
//     console.log(multiply(4, 7)); // 28
//     console.log(divide(10, 2)); // 5
//     console.log(divide(10, 0)); // Деление на ноль недопустимо

