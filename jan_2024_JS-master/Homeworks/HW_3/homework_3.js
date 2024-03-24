//------------------------------------------------------3/1------------------------------------------------------

// <!-- - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині.-->
//
// for (let i = 1; i <= 10; i++) {
//     document.write('Hello user, your number is ' + i + '<br>');
// }

//------------------------------------------------------3/2------------------------------------------------------

// <!-- - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині.-->
//
// // for (let i = 1; i <= 10; i++) {
// //     document.write('<div>Порахуймо поверхи: зараз ми стоїмо на ' + i +'</div>');
// // }

//------------------------------------------------------3/3------------------------------------------------------

// <!-- -- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.-->
// let text = 'Good evening, user';
// let counter = 1;
// while (counter <= 20) {
//     document.write('<h1>' + text + ' ' + counter + '</h1>');
//     counter++;
// }

//------------------------------------------------------3/4------------------------------------------------------

// <!-- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.-->
// let i = 1;
// while (i <= 20) {
//     document.write('<h1>Good evening, user ' + i + '</h1>');
//         i++;
// }

//------------------------------------------------------3/5------------------------------------------------------

// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// document.write('<ul>');
// for (let list of listOfItems) {
//     document.write(`<li>${list}</li>`);
// }
// document.write('</ul>');

//------------------------------------------------------3/6------------------------------------------------------

// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// for(const product of products){
//     document.write(
//         `<div class="productCard">
//             <h3 class="productTitle">${product.title}, ${product.price}</h3>
//             <img class="productImage" src ="${product.image}" alt="pic" >
//         </div>`)
// }

//------------------------------------------------------3/7------------------------------------------------------

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

// for (let user of users) {
//     if (user.age > 30){
//     console.log(user.name, '-',  user.age);
//     }
// }

// for (let user of users) {
//     if (user.status === true){
//         console.log(user.name);
//     }
// }

// for (let user of users) {
//     if (user.status !== true){
//         console.log(user.name);
//     }
// }
