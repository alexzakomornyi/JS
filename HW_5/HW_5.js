// // #I2XsG6f
// const recSquare = (a, b) => a * b;
// console.log(recSquare(5, 10));

// // #ETGAxbEn8l
// const circleRadius = r => Math.PI * (r * r);
// console.log(circleRadius(2));

// // #Mbiz5K4yFe7
// const cylinderSquare = (r, h) => 2 * Math.PI * r * (h + r);
// console.log(cylinderSquare(3, 7));

// // #SIdMd0hQ
// const arrayRec = array => array.forEach(el => console.log(el));
// arrayRec([1, 2, 3, "hello"]);

// // #59g0IsA
// const textAdd = txt => document.write(`<p>${txt}</p>`);
// textAdd(`Hello!`);

// // #hOL6126
// const list = item => document.write(`
//     <ul>
//         <li>${item}</li>
//         <li>${item}</li>
//         <li>${item}</li>
//     </ul>
// `);
// list("HELLO, OKTEN!");

// // #0Kxco1edSN
// const listWithCount = (item, liQ) => {
//     document.write(`<ul>`);
//     for (let i = 1; i <= liQ; i++) document.write(`<li>${item} ${i}</li>`);
//     document.write(`</ul>`);
// };
// listWithCount("!@#", 10);

// // #gEFoxMMO
// const arrayList = array => {
//     document.write(`<ul>`);
//     array.forEach(el => document.write(`<li>${el}</li>`));
//     document.write(`</ul>`);
// };
// arrayList([1, "okten", true]);

// // #bovDJDTIjt
// const objectArray = users => users.forEach(user =>
//     document.write(`<div style="text-align: center">ID: ${user.id}, NAME: ${user.name}, AGE: ${user.age}</div> <br>`)
// );
// objectArray([{ id: 1, name: "Alex", age: 22 }, { id: 2, name: "Ann", age: 25 }]);

// // #pghbnSB
// const lessNum = array => Math.min(...array);
// console.log(lessNum([34, -500, 10, 42, -10, 7, -228, 1]));

// // #EKRNVPM
// const sum = arr => arr.reduce((acc, num) => acc + num, 0);
// console.log(sum([1, 2, 3, 4, 5]));

// // #kpsbSQCt2Lf
// const swap = (arr, index1, index2) => (
//     [arr[index1], arr[index2]] = [arr[index2], arr[index1]], arr
// );
// console.log(swap([2, 3, 4, 5, 6, 7, 8], 3, 5));

// // #mkGDenYnNjn
// const exchange = (sumUAH, currencyValues, exchangeCurrency) =>
//     sumUAH / currencyValues.find(curr => curr.currency === exchangeCurrency).value;
//
// console.log(exchange(10000, [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }], 'USD'));