//Task 1
// Напишите функцию “Бюджет”. Внешняя функция создаст Бюджет, а вызов
// внутренней добавляет переданную ЗП в бюджет.

// Попробуйте создать несколько бюджетов.


// function func() {
//     let result = 0;

//     return (salary) => console.log(result += salary)
// }

// const salary1 = func()

const func = _ => {
    let result = 0;

    return (salary) => console.log(result += salary)
}



const salary1 = func()

salary1(10)
salary1(12)

const salary2 = func()

salary2(100)
salary2(120)

const salary3 = func()

salary3(1000)
salary3(1200)























// function func() {
//     let counter = 0;
//     return function(num) {
//         if (typeof num === "number") {
//             counter = num;
//         } else {
//             counter++;
//         }
//         console.log(counter);
//     };
// }

// const count1 = func();
// count1(123);
// count1(123);