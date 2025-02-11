// // #y7crMeFwHcS
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Lorem ipsum dolor.</div>`);
// }

// // #TYj7ncx
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Lorem ipsum dolor. ${i}</div>`);
// }

// // #uzkt71dp
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Lorem.</h1>`);
//     i++;
// }

// // #OeT7t3uUMFi
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Lorem. ${i}</h1>`);
//     i++;
// }

// // #vLSZKMlO
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// document.write(`<ul>`);
// for (let item of listOfItems) {
//     document.write(`<li>${item}</li>`);
// }
// document.write(`</ul>`);

// // #Hdjws7E
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
//         image: 'https://greenvalley.pk/cdn/shop/files/Tapal-Danedar-50-Teapack-1.jpg?v=1721633276&width=600'
//     },
// ];
//
// for (let product of products) {
//     document.write(`
//         <div class="product-card">
//             <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
//             <img src="${product.image}" alt="" class="product-image">
//         </div>
//     `);
// }

// // #4WrHwFTEop0
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
//
// for (let user of users) {
//     if (user.status) {
//         console.log(user);
//
//     }
// }
//
// console.log(``);
//
// for (let user of users) {
//     if (user.status === false) {
//         console.log(user);
//     }
// }
//
// console.log(``);
//
// for (let user of users) {
//     if (user.age > 30) {
//         console.log(user);
//     }
// }