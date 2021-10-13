console.log("lesson 2");

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

// const sum = (num1: number) => {
//     return function (num2: number){
//         return num1 + num2
//     }
// }
// sum(3)(6)


// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

// const makeCounter = () => {
//     let count = 0
//     return function (){
//         return ++count
//     }
// }

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// const makeCounter = (num: number) => {
//     let count = num
//     return function (){
//         return {
//             increase(){
//                 return ++count
//         },
//             decrease(){
//                 return --count
//             },
//             reset(){
//                 return count = num
//             },
//             set(newValue: number){
//                 return count = newValue
//             }
//         }
//
//     }
// }


// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10


// const superSum = (num: number) => {
//     if (num === null || num === undefined || num <= 0) return 0
//     if (num === 1) return (n: number) => n
//
//     let _arguments: number[] = []
//     function helper (...args: number[]) {
//         _arguments = [..._arguments, ...args]
//         if(_arguments.length >= num ){
//             _arguments.length = num
//             return _arguments.reduce((acc, el)=> acc + el)
//         }else{
//             return helper
//         }
//     }
//     return helper
// }


// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion


// const sumTo = (n: number):number => {
//     if (n === 1) return 1
//     return n + sumTo(n - 1)
// }

// const sumTo = (n: number):number => {
//     let result = 0
//     for(let i = 0; i <= n; i++){
//         result += i
//     }
//     return  result
// }

// const fuck = (n: number): number => {
//     return n ? n * fuck(n - 1) : 1
//
// }

// const fib = (n: number): number => {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2)
// }

// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
//
// const printList = (list:any) => {
//     alert(list.value);
//     if (list.next) {
//         printList(list.next);
//     }
// }
//
// const printListCycle = (list:any) => {
//     let tmp = list;
//
//     while (tmp) {
//         alert(tmp.value);
//         tmp = tmp.next;
//     }
// }

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// let arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
//
// const flatFunc = (arr: any) => {
//     let stack = [...arr]
//     let result = []
//     while (stack.length) {
//         const nextEl = stack.pop()
//         if (Array.isArray(nextEl)) {
//             stack.push(...nextEl);
//         } else {
//             result.push(nextEl);
//         }
//     }
//     return result
//
// }

// just a plug
export default () => {
};