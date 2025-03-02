let users = [];
users.push(new User(1, 'John', 'Doe', 'john@example.com', '123-456'));
users.push(new User(2, 'Jane', 'Doe', 'jane@example.com', '234-567'));
users.push(new User(3, 'Alice', 'Smith', 'alice@example.com', '345-678'));
users.push(new User(4, 'Bob', 'Brown', 'bob@example.com', '456-789'));
users.push(new User(5, 'Charlie', 'Davis', 'charlie@example.com', '567-890'));
users.push(new User(6, 'Eve', 'Evans', 'eve@example.com', '678-901'));
users.push(new User(7, 'Frank', 'Miller', 'frank@example.com', '789-012'));
users.push(new User(8, 'Grace', 'Wilson', 'grace@example.com', '890-123'));
users.push(new User(9, 'Henry', 'Taylor', 'henry@example.com', '901-234'));
users.push(new User(10, 'Ivy', 'Anderson', 'ivy@example.com', '012-345'));

// // #XjJuucOMR0
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}


console.log(users);

// // #2ikXsE2WiKZ
function filterEvenUsers(users) {
    return users.filter(function(user) {
        return user.id % 2 === 0;
    });
}

let evenUsers = filterEvenUsers(users);
console.log(evenUsers);

// // #pOeHKct
function sortUsersById(users) {
    return users.sort(function(a, b) {
        return a.id - b.id;
    });
}

let sortedUsers = sortUsersById(users);
console.log(sortedUsers);

// // #nkMXISv
function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [];
clients.push(new Client(1, 'John', 'Doe', 'john@example.com', '123-456', ['item1', 'item2']));
clients.push(new Client(2, 'Jane', 'Doe', 'jane@example.com', '234-567', ['item3']));
clients.push(new Client(3, 'Alice', 'Smith', 'alice@example.com', '345-678', ['item4', 'item5', 'item6']));
clients.push(new Client(4, 'Bob', 'Brown', 'bob@example.com', '456-789', ['item7']));
clients.push(new Client(5, 'Charlie', 'Davis', 'charlie@example.com', '567-890', ['item8', 'item9']));
clients.push(new Client(6, 'Eve', 'Evans', 'eve@example.com', '678-901', ['item10', 'item11']));
clients.push(new Client(7, 'Frank', 'Miller', 'frank@example.com', '789-012', ['item12']));
clients.push(new Client(8, 'Grace', 'Wilson', 'grace@example.com', '890-123', ['item13', 'item14']));
clients.push(new Client(9, 'Henry', 'Taylor', 'henry@example.com', '901-234', ['item15']));
clients.push(new Client(10, 'Ivy', 'Anderson', 'ivy@example.com', '012-345', ['item16', 'item17', 'item18']));

console.log(clients);

// // #8abtVjRv
function sortClientsByOrder(clients) {
    return clients.sort(function(a, b) {
        return a.order.length - b.order.length;
    });
}

let sortedClients = sortClientsByOrder(clients);
console.log(sortedClients);

// // #vV9a6584I5
function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function() {
        console.log('Їдемо зі швидкістю ' + this.maxSpeed + ' км/год');
    };

    this.info = function() {
        console.log('Модель - ' + this.model);
        console.log('Виробник - ' + this.manufacturer);
        console.log('Рік випуску - ' + this.year);
        console.log('Максимальна швидкість - ' + this.maxSpeed);
        console.log('Об\'єм двигуна - ' + this.engineVolume);
    };

    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
    };

    this.changeYear = function(newValue) {
        this.year = newValue;
    };

    this.addDriver = function(driver) {
        this.driver = driver;
    };
}

let car = new Car('Model S', 'Tesla', 2022, 250, 2.0);
car.drive();
car.info();
car.increaseMaxSpeed(20);
car.changeYear(2023);
car.addDriver({ name: 'John Doe', experience: 5 });

console.log(car);

// // #5kla3yMpgp
class CarClass {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log('Їдемо зі швидкістю ' + this.maxSpeed + ' км/год');
    }

    info() {
        console.log('Модель - ' + this.model);
        console.log('Виробник - ' + this.manufacturer);
        console.log('Рік випуску - ' + this.year);
        console.log('Максимальна швидкість - ' + this.maxSpeed);
        console.log('Об\'єм двигуна - ' + this.engineVolume);
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let car2 = new CarClass('Mustang', 'Ford', 2020, 280, 5.0);
car2.drive();
car2.info();
car2.increaseMaxSpeed(30);
car2.changeYear(2022);
car2.addDriver({ name: 'Mike Ross', experience: 10 });

console.log(car2);

// // #gsKLAsNWM
Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

Array.prototype.myFilter = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

// Тестуємо
let numbers = [1, 2, 3, 4, 5];

numbers.myForEach(function(num) {
    console.log('Число:', num);
});

let evenNumbers = numbers.myFilter(function(num) {
    return num % 2 === 0;
});

console.log('Парні числа:', evenNumbers);
