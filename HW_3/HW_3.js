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

//ADDITIONAL

// // #WpkK0ZH1
// let array = [1, 2, 3, 4, 5, "a", "b", "c", "d", "e", true, false, true, 1, "f"];
// console.log(array);

// // #4aDbSgh
// let array = [];
// array[0] = 1;
// array[1] = 2;
// array[2] = undefined;
// array[3] = "hi";
// array[4] = true;
// array[5] = false;
// array[6] = null;
// console.log(array);

// // #qLQLJSeN7i
// let array = [2,17,13,6,22,31,45,66,100,-18];
// // 1
// let i = 0;
// while (i < array.length) {
//     console.log(array[i]);
//     i++;
// }
// // 2
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
// // 3
// let i = 0;
// while (i < array.length) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//     }
//     i++;
// }
// // 4
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//     }
// }
// // 5
// let i = 0;
// while (i < array.length) {
//     if (array[i] % 2 !== 0) {
//         console.log(array[i]);
//     }
//     i++;
// }
// // 6
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//         console.log(array[i]);
//     }
// }
// // 7
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 3 === 0) {
//         array[i] = "okten";
//     }
// }
// console.log(array);
// // 8
// for (let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i]);
// }
// // 9.1
// let i = array.length - 1;
// while (i >= 0) {
//     console.log(array[i]);
//     i--;
// }
// // 9.2
// for (let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i]);
// }
// // 9.3
// let i = array.length - 1;
// while (i >= 0) {
//     if (array[i] % 2 !== 0) {
//         console.log(array[i]);
//     }
//     i--;
// }
// // 9.4
// for (let i = array.length - 1; i >= 0; i--) {
//     if (array[i] % 2 !== 0) {
//         console.log(array[i]);
//     }
// }
// // 9.5
// let i = array.length - 1;
// while (i >= 0) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//     }
//     i--;
// }
// // 9.6
// for (let i = array.length - 1; i >= 0; i--) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//     }
// }
// // 9.7
// for (let i = array.length - 1; i >= 0; i--) {
//     if (array[i] % 3 === 0) {
//         array[i] = "okten";
//     }
//     console.log(array[i]);
// }

// // #yHAwJOyiC
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// // #GamKju89ob
// let array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
// for (i = 0; i < array.length; i++ ) {
//     console.log(array[i]);
// }

// // #Bm76xmg
// let array = ["a", "b", 0, 1, 2, true, false, null, undefined, NaN];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// // #u3vmD0YJXh
// let array = [true, 1, "false", false, "true", 2, true, "false", false, 123]
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "boolean") {
//         console.log(array[i]);
//     }
// }

// // #9stMq2ou
// let array = [true, 1, "false", false, "true", 2, true, "false", false, 123]
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "number") {
//         console.log(array[i])
//     }
// }

// // #mK4pmM4
// let array = [true, 1, "false", false, "true", 2, true, "false", false, 123]
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "string") {
//         console.log(array[i]);
//     }
// }

// // #0pm3EyTKy9
// let array = [];
// array[0] = true;
// array[1] = false;
// array[2] = 1;
// array[3] = 2;
// array[4] = "";
// array[5] = "hello";
// array[6] = "it`s me";
// array[7] = undefined;
// array[8] = null;
// array[9] = ["abc", 2, false, true];
//
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// // #mDMWMW5a
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     document.write(`Крок: ${i} </br>`);
// }

// // #4sXhaa5YMM
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
//     document.write(`Крок: ${i} </br>`);
// }

// // #s24slNyz7
// for (let i = 1; i <= 100; i += 2) {
//     console.log(i);
//     document.write(`Крок: ${i} </br>`);
// }

// // #zananT5FR1
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//         document.write(`Крок: ${i} </br>`);
//     }
// }

// // #Tfrwls7FM
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//         document.write(`Крок: ${i} </br>`);
//     }
// }

// // #reLkOkTB29Q
// let books = [
//     {
//         title: "JavaScript: The Good Parts",
//         pages: 176,
//         authors: ["Douglas Crockford"],
//         genres: ["Programming"]
//     },
//
//     {
//         title: "Eloquent JavaScript",
//         pages: 472,
//         authors: ["Marijn Haverbeke"],
//         genres: ["Programming", "Web Development"]
//     },
//
//     {
//         title: "The Pragmatic Programmer",
//         pages: 352,
//         authors: ["Andrew Hunt", "David Thomas"],
//         genres: ["Programming"]
//     },
//
//     {
//         title: "A Song of Ice and Fire",
//         pages: 694,
//         authors: ["George R.R. Martin"],
//         genres: ["Fantasy", "Drama", "Adventure"]
//     }
// ];

// // 1
// let maxPages = 0;
// let largestBook;
//
// for (let book of books) {
//     if (book.pages > maxPages) {
//         maxPages = book.pages;
//         largestBook = book;
//     }
// }
//
// console.log(largestBook);

// // 2
// let maxGenres = 0;
// let genreBooks = [];
//
// for (let book of books) {
//     if (book.genres.length > maxGenres) {
//         maxGenres = book.genres.length;
//         genreBooks = book;
//     } else if (book.genres.length === maxGenres) {
//         genreBooks.push(book);
//     }
// }
//
// console.log(genreBooks);

// // 3
// let maxTitle = 0;
// let maxTitleBooks = [];
//
// for (let book of books) {
//     if (book.title.length > maxTitle) {
//         maxTitle = book.title.length;
//         maxTitleBooks = book;
//     }
// }
//
// console.log(maxTitleBooks);

// // 4
// let twoAuthorBooks = [];
//
// for (let book of books) {
//     if (book.authors.length === 2) {
//         twoAuthorBooks.push(book);
//     }
// }
//
// console.log(twoAuthorBooks);

// // 5
// let oneAuthorBooks = [];
//
// for (let book of books) {
//     if (book.authors.length === 1) {
//         oneAuthorBooks.push(book);
//     }
// }
//
// console.log(oneAuthorBooks);