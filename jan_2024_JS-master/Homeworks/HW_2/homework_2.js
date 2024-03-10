<!--Масиви та об'єкти:-->
// ---------------------------------------1.1---------------------------------------

// let NamesAndNumbers= ["zlata", 5, "mariia", 6, "victoriia", 9, "nina", 4, "kristina", 8];
// console.log(NamesAndNumbers.length);
// console.log(NamesAndNumbers [0]);
// console.log(NamesAndNumbers [1]);
// console.log(NamesAndNumbers [2]);
// console.log(NamesAndNumbers [3]);
// console.log(NamesAndNumbers [4]);
// console.log(NamesAndNumbers [5]);
// console.log(NamesAndNumbers [6]);
// console.log(NamesAndNumbers [7]);
// console.log(NamesAndNumbers [8]);
// console.log(NamesAndNumbers [9]);

// ---------------------------------------1.2---------------------------------------

// let books = {
//     title: "The Wolf in th eWatchtower",
//     pageCount: 447,
//     genre: "fantasy"
// }
// console.log(books);

// ---------------------------------------1.3---------------------------------------

// let firstBook = {title: "Holly", pageCount: 464, genre: "horror",
//     authors:["Stephen King", 76]};
// let secondBook = {title: "Harry Potter and the Philosopher's Stone", pageCount: 368, genre: "fantasy",
//     authors:["Joanne Rowling", 58]};
// let thirdBook = {title: "Fourth Wing", pageCount: 512, genre: "romantic fantasy",
//     authors:["Rebecca Yarros", 42]};
// console.log(firstBook,secondBook, thirdBook);

// ---------------------------------------1.4---------------------------------------

// let users = [
//     {name: "Alex", username: "Drakula", password: "qwerty"},
//     {name: "Vasya", username: "Pampushka", password: "qwerty123"},
//     {name: "Pasha", username: "Subaber", password: 01011990},
//     {name: "Inna", username: "Koza123", password: "luckyGirl"},
//     {name: "Dasha", username: "Romashka", password: "1990qwerty"},
//     {name: "Kostia", username: "GoldBoy", password: "user123"},
//     {name: "Lina", username: "Guide", password: "guide1989"},
//     {name: "Andrii", username: "Proffy", password: "poliglot09"},
//     {name: "Rostik", username: "StreetMan", password: "mypassword"},
//     {name: "Olia", username: "Doctor", password: "strongpassword"}]
//  console.log(users.length);
//  console.log(users);
//  console.log(users[0].password);
//  console.log(users[1].password);
//  console.log(users[2].password);
//  console.log(users[3].password);
//  console.log(users[4].password);
//  console.log(users[5].password);
//  console.log(users[6].password);
//  console.log(users[7].password);
//  console.log(users[8].password);
//  console.log(users[9].password);

<!--Логічні розгалуження:-->
// ---------------------------------------2.1---------------------------------------

// let x = 24;
// if (x !== 0) {
//     console.log("Вірно");
// } else {
//     console.log("Невірно");
// }
//
// //перевіряємо скрипт на "а", що дорівнює 0
// let a = 0;
// if (a !== 0) {
//     console.log("Вірно");
// } else {
//     console.log("Невірно");
// }

//перевіряємо скрипт на "а", що дорівнює 1
// let a = 1;
// if (a !== 0) {
//     console.log("Вірно");
// } else {
//     console.log("Невірно");
// }

//перевіряємо скрипт на "а", що дорівнює -3
// let a = -3;
// if (a !== 0) {
//     console.log("Вірно");
// } else {
//     console.log("Невірно");
// }

// ---------------------------------------2.2---------------------------------------

// let time = 17; // моє число 17 // console.log = document.write("<h2>Перша/друга/третя/четверта четверть години<h2/>")
// if (0 <= time && time < 15) {
//     console.log("Перша четверть години");
// } else if (15 <= time && time < 30) {
//     console.log("Друга четверть години");
// } else if (30 <= time && time < 45) {
//     console.log("Третя четверть години");
// } else if (45 <= time && time < 60) {
//     console.log("Четверта четверть години");
// } else {
//     console.log("Число не в діапазоні від 0 до 59");
// }

// ---------------------------------------2.3---------------------------------------

// let day = 28 // console.log = document.write("<h2>Перша/друга/третя декада місяця<h2/>")
// if(0 <= day && day < 10) {
//     console.log("Перша декада місяця");
// } else if(10 <= day && day < 20) {
//     console.log("Друга декада місяця");
// } else if(20 <= day && day <31) {
//     console.log("Третя декада місяця");
// } else {
//     console.log("Число не в діапазоні від 0 до 31");
// }

// ---------------------------------------2.4---------------------------------------

// let schedul = {day: 5, task: 'do it'};
//     switch (schedul.day){
//         case 1:
//             console.log('Monday:learn JS');
//             break;
//         case 2:
//             console.log('Tuesday: learn English');
//             break;
//         case 3:
//            console.log('Wednesday: chatting with mentor');
//            break;
//         case 4:
//             console.log('Thursday: learn articles about JS');
//             break;
//         case 5:
//             console.log('Friday: practice JS');
//             break;
//         case 6:
//             console.log('Saturday: resting');
//             break;
//         case 7:
//             console.log('Sunday: meet with friends');
//             break;
//     }

// ---------------------------------------2.5---------------------------------------

// let firstNumber = +prompt('Введіть рандомне число');
// let secondNumber = +prompt('Введіть ще раз рандомне число, не таке як перше');
// if(firstNumber < secondNumber){
//     document.write('Ваше друге число більше за перше');
// } else if (firstNumber > secondNumber){
//     document.write('Ваше перше число більше за друге');
// } else {
//     document.write('Ваші введені числа однакові. Оновіть сторінку й введіть різні цифри');
// }

// ---------------------------------------2.6---------------------------------------

// let x = 10;
// x = x || "default";
// console.log(x);


// let x = 'шикидим';
// x = x || "default";
// console.log(x);

// let x = 0;
// x = x || "default"; //призводить до false (?). Значення 0 - це значення false?
// console.log(x);

// let x = "";
// x = x || "default"; //призводить до false. Пуста стрічка - це значення ж false.
// console.log(x);

// я щось не сильно зрозуміла, що тут треба робити)

// ---------------------------------------2.7---------------------------------------

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ]
// if (coursesAndDurationArray[0].monthDuration > 5) {
//     console.log('Супер! Ви вивчаєте JavaScript Complex триває більше 5 місяців!');
// }
//
// if (coursesAndDurationArray[1].monthDuration > 5) {
//     console.log('Супер! Ви вивчаєте Java Complex триває більше 5 місяців!');
// }
//
// if (coursesAndDurationArray[2].monthDuration > 5) {
//     console.log('Супер! Ви вивчаєте Python Complex триває більше 5 місяців!');
// }
//
// if (coursesAndDurationArray[3].monthDuration > 5) {
//     console.log('Супер! Ви вивчаєте QA Complex триває більше 5 місяців!');
// }
//
// if (coursesAndDurationArray[4].monthDuration > 5) {
//     console.log('Супер! Ви вивчаєте FullStack триває більше 5 місяців!');
// }
//
// if (coursesAndDurationArray[5].monthDuration > 5) {
//     console.log('Супер! Ви вивчаєте Frontend триває більше 5 місяців!');
// }















