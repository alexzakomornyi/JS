// // #AiN5CoUQ
function deepClone(obj) {
    if (obj === null) return null;
    if (obj === undefined) return undefined;
    if (typeof obj === 'number' && isNaN(obj)) return NaN;
    if (typeof obj !== 'object') return obj;

    let clone = Array.isArray(obj) ? [] : {};

    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'function') {
                clone[key] = obj[key].bind(clone);
            } else {
                clone[key] = deepClone(obj[key]);
            }
        }
    }
    return clone;
}

let obj = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        zip: 12345
    },
    greet: function () {
        return "Hello, " + this.name;
    }
};

let clonedObj = deepClone(obj);
console.log(clonedObj);
console.log(clonedObj.greet());

// // #iz6emEsP2BA
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let transformedArray = coursesAndDurationArray.map((course, index) => ({id: index + 1, ...course}));

console.log(transformedArray);
