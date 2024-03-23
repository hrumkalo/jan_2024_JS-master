//------------------------------------------------------1/1------------------------------------------------------

// <!-- - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині.-->
//
// for (let i = 1; i <= 10; i++) {
//     document.write('Hello user, your number is ' + i + '<br>');
// }

//------------------------------------------------------1/2------------------------------------------------------

// <!-- - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині.-->
//
// // for (let i = 1; i <= 10; i++) {
// //     document.write('<div>Порахуймо поверхи: зараз ми стоїмо на ' + i +'</div>');
// // }

//------------------------------------------------------1/3------------------------------------------------------

// <!-- -- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.-->
// let text = 'Good evening, user';
// let counter = 1;
// while (counter <= 20) {
//     document.write('<h1>' + text + ' ' + counter + '</h1>');
//     counter++;
// }

//------------------------------------------------------1/4------------------------------------------------------

// <!-- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.-->
// let i = 1;
// while (i <= 20) {
//     document.write('<h1>Good evening, user ' + i + '</h1>');
//         i++;
// }

//------------------------------------------------------1/5------------------------------------------------------

// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// document.write('<ul>');
// for (let list of listOfItems) {
//     document.write(`<li>${list}</li>`);
// }
// document.write('</ul>');

//------------------------------------------------------1/6------------------------------------------------------

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