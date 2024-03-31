
//------------------------------------------------------4/1------------------------------------------------------

// function FindS(a, b) {
//     // let result = a * b;
//     return result;
// }
// document.write(FindS(15, 3));

//------------------------------------------------------4/2------------------------------------------------------

// function circleR(radius){
//     return 3.14 * radius * radius;
// }
// document.write(circleR(25));

//------------------------------------------------------4/3------------------------------------------------------
//Повна площа поверхні циліндра : S = 2 πr (h + r)

// function Scylinder(radius, heigh){
//     return 2 * 3.14 * radius * (heigh + radius);
// }
// document.write(Scylinder(25, 10));

//------------------------------------------------------4/4------------------------------------------------------

// let listOfItems = ['html', ' css', ' javascript', ' mysql', ' mongodb', ' react', ' angular', ' node.js'];
// function list(array){
//     for (const item of array);{
//         document.write(item);
//     }
//
// }
// document.write(listOfItems);

//------------------------------------------------------4/5------------------------------------------------------

// function TextSection (text){
//     document.write(`<p>${text}</p>`);
// }
// TextSection("Welcome to my page");

//------------------------------------------------------4/6------------------------------------------------------

// function OurText(text){
//     document.write(`<ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
// </ul>`)
// }
// OurText("Hello people");

//------------------------------------------------------4/7------------------------------------------------------

// function OurTask2(text, number){
//     document.write(`<ul>`)
//         for (let i = 0; i < number; i++){
//             document.write(`<li>${text}</li>`)
// }
//     document.write(`</ul>`);
// }
// OurTask2('Hello people', 3);

//------------------------------------------------------4/8------------------------------------------------------

// let SomeList = [125, "ky-ky", true, false];
// function data(array){
//     document.write(`<ul>`)
//     for (const item of array) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// }
// data(SomeList);

//------------------------------------------------------4/9------------------------------------------------------

// let listOfPeople = [
//     {id: 1, name: "Viki", age: 50},
//     {id: 2, name: "Miki", age: 100},
//     {id: 3, name: "Fiki", age: 10}
// ]
//
// function obj(array){
//     for (const item of array) {
//         document.write(`<div>${item.id}. ${item.name}, ${item.age}</div>`)
//     }
// }
// obj(listOfPeople);

//------------------------------------------------------4/10------------------------------------------------------

// let listOfNumber = [6, 4, 2, 0, -2, -4, -6];
// function lessNumber(array){
//     let less = array[0]; // Перший елемент масиву
//     for (const item of array) {
//         if (item < less) {
//             less = item
//         }
//     }
//     return less;
// }
// document.write(lessNumber(listOfNumber));

//------------------------------------------------------4/11------------------------------------------------------

// let NumberExist = [1, 2, 10];
// function sum(arr){
//     let sum = 0;
//     for (const item of arr) {
//         sum = sum + item;
//     }
//     return sum;
// }
// document.write(sum(NumberExist));

//------------------------------------------------------4/12------------------------------------------------------
// списала з консультації, бо щось не второпала

// swap([11, 22, 33, 44], 1, 2)
// let Pereprysvoinnia = swap([11, 22, 33, 44], 1, 2)
// function swap(arr, index1, index2) {
//     let num = arr [index1]; //дефолтна зміна, що буде дорівнювати масиву (та зміна, що буде присвоєна першому ідексу)
//     arr[index1] = arr[index2]; //міняємо місцями
//     arr[index2] = num;
//     return arr; //повернути масив
// }
// document.write(Pereprysvoinnia); // Виведе: [11, 33, 22, 44]

//------------------------------------------------------4/13------------------------------------------------------

//
// function exchange(sumUAH, currencyValues, exchangeCurrency) {
//     if (typeof sumUAH !== 'number' || !Array.isArray(currencyValues) || currencyValues.length === 0 || typeof exchangeCurrency !== 'string') {
//         return "Некоректні вхідні дані";
//     }
//
//     // Перевірка, чи валюта для обміну валідна
//     if (!currencyValues.includes(exchangeCurrency)) {
//         return "Невідома валюта для обміну";
//     }
//
//     // Знайти значення валюти для обміну
//     let exchangeRate = 0;
//     switch (exchangeCurrency) {
//         case 'USD':
//             exchangeRate = 0.035; // Приклад значення курсу
//             break;
//         case 'EUR':
//             exchangeRate = 0.03; // Приклад значення курсу
//             break;
//         // Додаткові валюти можна додати сюди з відповідними значеннями курсу
//         default:
//             return "Невідома валюта для обміну";
//     }
//
//     // Обчислення суми в обмінній валюті
//     const exchangedSum = sumUAH * exchangeRate;
//     return exchangedSum.toFixed(2); // Повертаємо суму з округленням до двох знаків після коми
// }
//
// // Приклад використання:
// const sumUAH = 1000; // Сума в гривнях
// const currencyValues = ['USD', 'EUR']; // Доступні валюти для обміну
// const exchangeCurrency = 'USD'; // Валюта для обміну
// co