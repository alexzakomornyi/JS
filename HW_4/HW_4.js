// // #I2XsG6f
// function recSquare(a, b) {
//     return a * b;
// }
//
// console.log(recSquare(5, 10));

// // #ETGAxbEn8l
// function circleRadius(r) {
//     return Math.PI * (r * r);
// }
//
// console.log(circleRadius(2));

// // #Mbiz5K4yFe7
// function cylinderSquare(r, h) {
//     return 2 * Math.PI * r * (h + r);
// }
//
// console.log(cylinderSquare(3, 7));

// // #SIdMd0hQ
// function arrayRec(array) {
//     for (let item of array) {
//         console.log(item);
//     }
// }
//
// arrayRec([1, 2, 3, "hello"]);

// // #59g0IsA
// function textAdd(txt) {
//     document.write(`<p>${txt}</p>`);
// }
//
// textAdd(`Hello!`);

// // #hOL6126
// function list(item) {
//     document.write(
//         `
//             <ul>
//                 <li>${item}</li>
//                 <li>${item}</li>
//                 <li>${item}</li>
//             </ul>
//         `);
// }
//
// list("HELLO, OKTEN!");

// // #0Kxco1edSN
// function list(item, liQ) {
//     document.write(`<ul>`);
//     for (let i = 1; i <= liQ; i++) {
//         document.write(`<li>${item} ${i}</li>`)
//     }
//     document.write(`</ul>`);
// }
//
// list("!@#", 100)

// // #gEFoxMMO
// function arrayList(array) {
//     document.write(`<ul>`);
//     for (let arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// arrayList([1, "okten", true]);

// // #bovDJDTIjt
// function objectArray(users) {
//     for (let user of users) {
//         document.write(`<div style="text-align: center">ID: ${user.id}, NAME: ${user.name}, AGE: ${user.age}</div> <br>`);
//     }
// }
//
// objectArray([{ id: 1, name: "Alex", age: 22 }, { id: 2, name: "Ann", age: 25 }]);

// // #pghbnSB
// function lessNum(array) {
//     let min = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i];
//         }
//     }
//     return min;
// }

// function lessNum(array) {
//     let min = array[0];
//     for (let num of array) {
//         if (num < min) {
//             min = num;
//         }
//     }
//     return min;
// }
// console.log(lessNum([34, -500, 10, 42, -10, 7, -228, 1]));

// // #EKRNVPM
// function sum(arr) {
//     let summary = 0;
//     for (let element of arr) {
//         summary += element;
//     }
//     return summary;
// }
//
// console.log(sum([1, 2, 3, 4, 5]));

// function sum(arr) {
//     let summary = 0;
//     for (let i = 0; i < arr.length; i++) {
//         summary += arr[i];
//     }
//     return summary;
// }
//
// console.log(sum([10, 20, 30, 40]));

// // #kpsbSQCt2Lf
// function swap(arr, index1, index2) {
//     let temp = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temp;
//     return arr;
// }
//
// console.log(swap([2, 3, 4, 5, 6, 7, 8], 3, 5));

// // #mkGDenYnNjn
// function exchange(sumUAH,currencyValues,exchangeCurrency) {
//     for (let currency of currencyValues) {
//         if (currency.currency === exchangeCurrency) {
//             return sumUAH / currency.value;
//         }
//     }
// }
//
// console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));