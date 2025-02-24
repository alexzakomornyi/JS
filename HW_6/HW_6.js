// // #dFeorS3m7u
// let str = 'hello world';
// console.log(str.length);
// let str2 = 'lorem ipsum';
// console.log(str2.length);
// let str3 = 'javascript is cool';
// console.log(str3.length);

// // #8lld9HMxXWB
// console.log('hello world'.toUpperCase());
// console.log('lorem ipsum'.toUpperCase());
// console.log('javascript is cool'.toUpperCase());

// // #ClDsAm7xba7
// console.log('HELLO WORLD'.toLowerCase());
// console.log('LOREM IPSUM'.toLowerCase());
// console.log('JAVASCRIPT IS COOL'.toLowerCase());

// // #0b89BkYZwu
// let str = ' dirty string   ';
// console.log(str.trim());

// // #bfoJuse4ZzP
// function stringToArray(str) {
//     return str.split(' ');
// }
//
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str);
// console.log(arr);

// // #Rbr5kEQ
// function numbersToStrings(array) {
//     return array.map(String);
// }
//
// let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// console.log(numbersToStrings(numbers));

// // #5hqyKTfmc
// function sortNums(array, direction) {
//     if (direction === 'ascending') {
//         return array.sort((a, b) => a - b);
//     } else if (direction === 'descending') {
//         return array.sort((a, b) => b - a);
//     }
//     return array;
// }
//
// let nums = [11, 21, 3];
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));

// // #yo06d74c1C
// let coursesAndDurationArray = [
//     { title: 'JavaScript Complex', monthDuration: 5 },
//     { title: 'Java Complex', monthDuration: 6 },
//     { title: 'Python Complex', monthDuration: 6 },
//     { title: 'QA Complex', monthDuration: 4 },
//     { title: 'FullStack', monthDuration: 7 },
//     { title: 'Frontend', monthDuration: 4 }
// ];
//
// function sortCourses() {
//     return coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// }
// console.log(sortCourses());
//
// function filterCourses() {
//     return coursesAndDurationArray.filter(course => course.monthDuration > 5);
// }
// console.log(filterCourses());
//
// function addIdToCourses() {
//     return coursesAndDurationArray.map((course, index) => ({ id: index + 1, ...course }));
// }
// console.log(addIdToCourses());

// // #bolvdlhP
// function createDeck() {
//     let suits = ['spade', 'diamond', 'heart', 'clubs'];
//     let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
//     let colors = { spade: 'black', clubs: 'black', diamond: 'red', heart: 'red' };
//
//     let deck = [];
//     for (let suit of suits) {
//         for (let value of values) {
//             deck.push({ cardSuit: suit, value: value, color: colors[suit] });
//         }
//     }
//     return deck;
// }
//
// let deck = createDeck();
//
// console.log(deck.find(card => card.cardSuit === 'spade' && card.value === 'ace'));
//
// console.log(deck.filter(card => card.value === '6'));
//
// console.log(deck.filter(card => card.color === 'red'));
//
// console.log(deck.filter(card => card.cardSuit === 'diamond'));
//
// console.log(deck.filter(card => card.cardSuit === 'clubs' && ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value)));

// // #EP5I1UUzAX
// function groupBySuit(deck) {
//     return deck.reduce((acc, card) => {
//         acc[card.cardSuit].push(card);
//         return acc;
//     }, { spade: [], diamond: [], heart: [], clubs: [] });
// }
//
// console.log(groupBySuit(deck));

// // #4LJn7zBx
// let coursesArray = [
//     { title: 'Course 1', modules: ['html', 'css', 'sass'] },
//     { title: 'Course 2', modules: ['js', 'react'] },
//     { title: 'Course 3', modules: ['node', 'docker', 'sass'] },
//     { title: 'Course 4', modules: ['docker', 'angular'] }
// ];
//
// function findSassCourses() {
//     return coursesArray.filter(course => course.modules.includes('sass'));
// }
// console.log(findSassCourses());
//
// function findDockerCourses() {
//     return coursesArray.filter(course => course.modules.includes('docker'));
// }
// console.log(findDockerCourses());

