class Animal {
    constructor(name) {
        this.name = name;
    }
    show() {
        console.log("Animal:", this.name);
    }
}
class Dog extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }
    showDog() {
        super.show();
        console.log("Color:", this.color);
    }
}
class Cat extends Animal {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    showCat() {
        super.show();
        console.log("Age:", this.age);
    }
}
let dog1 = new Dog("Tommy", "Brown");
dog1.showDog();
let cat1 = new Cat("Kitty", 2);
cat1.showCat();


class College {
    constructor(name) {
        this.name = name;
    }
    show() {
        console.log("College:", this.name);
    }
}
class Student extends College {
    constructor(name, course) {
        super(name);
        this.course = course;
    }
    showStudent() {
        super.show();
        console.log("Course:", this.course);
    }
}
class Staff extends College {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    showStaff() {
        super.show();
        console.log("Subject:", this.subject);
    }
}
let stu1 = new Student("ABC College", "BCA");
stu1.showStudent();
let staff1 = new Staff("ABC College", "Java");
staff1.showStaff();


class Mobile {
    constructor(name) {
        this.name = name;
    }
    show() {
        console.log("Mobile:", this.name);
    }
}
class Android extends Mobile {
    constructor(name, version) {
        super(name);
        this.version = version;
    }
    showAndroid() {
        super.show();
        console.log("Version:", this.version);
    }
}
class Iphone extends Mobile {
    constructor(name, storage) {
        super(name);
        this.storage = storage;
    }
    showIphone() {
        super.show();
        console.log("Storage:", this.storage);
    }
}
let android1 = new Android("Samsung", "Android 15");
android1.showAndroid();
let iphone1 = new Iphone("iPhone 15", "128GB");
iphone1.showIphone();


class Company {
    constructor(name) {
        this.name = name;
    }
    show() {
        console.log("Company:", this.name);
    }
}
class Developer extends Company {
    constructor(name, language) {
        super(name);
        this.language = language;
    }
    showDeveloper() {
        super.show();
        console.log("Language:", this.language);
    }
}
class Manager extends Company {
    constructor(name, team) {
        super(name);
        this.team = team;
    }

    showManager() {
        super.show();
        console.log("Team:", this.team);
    }
}
let dev1 = new Developer("Infosys", "Python");
dev1.showDeveloper();
let man1 = new Manager("Infosys", 10);
man1.showManager();


class Food {
    constructor(name) {
        this.name = name;
    }
    show() {
        console.log("Food:", this.name);
    }
}
class Pizza extends Food {
    constructor(name, size) {
        super(name);
        this.size = size;
    }
    showPizza() {
        super.show();
        console.log("Size:", this.size);
    }
}
class Burger extends Food {
    constructor(name, price) {
        super(name);
        this.price = price;
    }
    showBurger() {
        super.show();
        console.log("Price:", this.price);
    }
}
let p = new Pizza("Cheese Pizza", "Medium");
p.showPizza();
let br = new Burger("Chicken Burger", 150);
br.showBurger();
