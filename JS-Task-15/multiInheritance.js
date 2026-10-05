class Fruit {
    constructor(name) {
        this.name = name;
    }
    show() {
        console.log("Fruit:", this.name);
    }
}
class Apple extends Fruit {
    constructor(name, color) {
        super(name);
        this.color = color;
    }
    showApple() {
        super.show();
        console.log("Color:", this.color);
    }
}
class Mango extends Fruit {
    constructor(name, taste) {
        super(name);
        this.taste = taste;
    }
    showMango() {
        super.show();
        console.log("Taste:", this.taste);
    }
}
let a = new Apple("Apple", "Red");
a.showApple();
let m = new Mango("Mango", "Sweet");
m.showMango();


class House {
    constructor(name) {
        this.name = name;
    }
    show() {
        console.log("House:", this.name);
    }
}
class Kitchen extends House {
    constructor(name, size) {
        super(name);
        this.size = size;
    }
    showKitchen() {
        super.show();
        console.log("Size:", this.size);
    }
}
class Bedroom extends House {
    constructor(name, beds) {
        super(name);
        this.beds = beds;
    }
    showBedroom() {
        super.show();
        console.log("Beds:", this.beds);
    }
}
let k = new Kitchen("My House", "Large");
k.showKitchen();
let bed = new Bedroom("My House", 2);
bed.showBedroom();


class Animal {
    constructor(name) {
        this.name = name;
    }
    show() {
        console.log("Animal:", this.name);
    }
}
class Lion extends Animal {
    constructor(name, place) {
        super(name);
        this.place = place;
    }
    showLion() {
        super.show();
        console.log("Place:", this.place);
    }
}
class Elephant extends Animal {
    constructor(name, weight) {
        super(name);
        this.weight = weight;
    }
    showElephant() {
        super.show();
        console.log("Weight:", this.weight);
    }
}
let l = new Lion("Lion", "Forest");
l.showLion();
let e = new Elephant("Elephant", "500kg");
e.showElephant();


class Shop {
    constructor(name) {
        this.name = name;
    }
    show() {
        console.log("Shop:", this.name);
    }
}
class Clothes extends Shop {
    constructor(name, price) {
        super(name);
        this.price = price;
    }
    showClothes() {
        super.show();
        console.log("Price:", this.price);
    }
}
class Shoes extends Shop {
    constructor(name, size) {
        super(name);
        this.size = size;
    }
    showShoes() {
        super.show();
        console.log("Size:", this.size);
    }
}
let cl = new Clothes("T-Shirt", 500);
cl.showClothes();
let sh = new Shoes("Nike", 9);
sh.showShoes();


class Game {
    constructor(name) {
        this.name = name;
    }
    show() {
        console.log("Game:", this.name);
    }
}
class Cricket extends Game {
    constructor(name, players) {
        super(name);
        this.players = players;
    }
    showCricket() {
        super.show();
        console.log("Players:", this.players);
    }
}
class Football extends Game {
    constructor(name, time) {
        super(name);
        this.time = time;
    }
    showFootball() {
        super.show();
        console.log("Time:", this.time);
    }
}
let cr = new Cricket("Cricket", 11);
cr.showCricket();
let fb = new Football("Football", "90 minutes");
fb.showFootball();
