// #67kfznmiMl
let array = ['a', "b", `c`, 1, 0, 3.1415, NaN, undefined, true, false];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);

// #LARqoUj5I
let firsBook = {
    title: "Harry Potter and the Philosopher's Stone",
    pageCount: 223,
    genre: "fantasy"
};

let secondBook = {
    title: "All Quiet on the Western Front",
    pageCount: 250,
    genre: "war novel"
};

let thirdBook = {
    title: "The Last Wish",
    pageCount: 288,
    genre: "fantasy"
};

// #sA3Gg1sCp
let fourthBook = {
    title: "Dracula",
    pageCount: 418,
    genres: ["gothic", "horror"],
    author: [{name: "Bram Stoker", age: 64}]
};

let fifthBook = {
    title: "The Lord of the Rings",
    pageCount: 1077,
    genres: ["high fantasy", "adventure"],
    author: [{name: "J. R. R. Tolkien", age: 81}]
};

let sixthBook = {
    title: "The Legend of Sleepy Hollow",
    pageCount: 50,
    genres: ["children's book", "gothic horror"],
    author: [{name: "Washington Irving", age: 76}]
};

// #jCHFnEbdmFd
let usersEssence = [
    {name: "Oleksii", lastname: "Melnikov", username: "Alex", password: 12345, email: "alex@gmail.com", gender: "male", phoneNum: 380971234567, role: "admin", isActive: true, friends: ["Ivan228", "Ann"]},
    {name: "Ivan", lastname: "Petrov", username: "Ivan228", password: 67890, email: "ivan@gmail.com", gender: "male", phoneNum: 380977654321, role: "user", isActive: true, friends: ["Alex", "Ann"]},
    {name: "Anna", lastname: "Ivanova", username: "Ann", password: 15243, email: "anna@gmail.com", gender: "female", phoneNum: 380971726354, role: "user", isActive: false, friends: ["Alex", "Ivan228"]},
];
console.log(usersEssence[0].password);
console.log(usersEssence[1].password);
console.log(usersEssence[2].password);

// #coYydZuaeEB
let temperature = [
    {day: "Monday", morningT: 2, dayT: 6, eveningT: -9},
    {day: "Tuesday", morningT: 0, dayT: 3, eveningT: -8},
    {day: "Wednesday", morningT: 2, dayT: 4, eveningT: -7},
    {day: "Thursday", morningT: 5, dayT: 8,eveningT: -4},
    {day: "Friday", morningT: 4, dayT: 6, eveningT: -4},
    {day: "Saturday", morningT: 2, dayT: 5, eveningT: -4},
    {day: "Sunday", morningT: 2, dayT: 4, eveningT: -5}
];

// #bAUsaq6LI
let x = -3;
if (x === 0) {
    console.log("Невірно");
} else {
    console.log("Вірно");
}

// #3ckURgvs
let time = 1;
if (time >= 0 && time <= 15) {
    console.log("First quarter");
} else if (time > 15 && time <= 30) {
    console.log("Second quarter");
} else if (time > 30 && time <= 45) {
    console.log("Third quarter");
} else if (time > 45 && time <= 59) {
    console.log("Fourth quarter");
} else {
    console.log("????");
}

// #UMoNq4biWGe
let day = 11;
if (day >= 1 && day <= 10) {
    console.log("First decade");
} else if (day > 10 && day <= 20){
    console.log("Second decade");
} else if (day > 20 && day <= 31) {
    console.log("Third decade");
} else {
    console.log("?????");
}

// #KzrtqyQ
let weekDay = +prompt("Enter the number of the day of the week:");
switch (weekDay) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log('Tuesday');
        break;

    case 3:
        console.log('Wednesday');
        break;

    case 4:
        console.log('Thursday');
        break;

    case 5:
        console.log('Friday');
        break;

    case 6:
        console.log('Saturday');
        break;

    case 7:
        console.log('Sunday');
        break;

    default:
        console.log("???");
}

// #uwsz1RnTQJ1
let firstNum = +prompt("Enter the first number:");
let secondNum = +prompt("Enter the second number:");
if (firstNum < secondNum) {
    console.log(secondNum);
} else if (firstNum > secondNum) {
    console.log(firstNum);
} else if (firstNum === secondNum) {
    console.log("The numbers are equal");
} else {
    console.log("???");
}

// #uwsz1RnTQJ1
let xx = "";
if (xx === 0) {
    xx = "default";
} else if (xx === -0) {
    xx = "default";
} else if (xx === null) {
    xx = "default";
} else if (xx === undefined) {
    xx = "default";
} else if (xx === false) {
    xx = "default";
} else if (xx === "") {
    xx = "default";
}

console.log(xx);

// #awLXL6TBzg
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log("Super!");
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log("Super!");
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log("Super!");
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log("Super!");
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log("Super!");
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log("Super!");
}







