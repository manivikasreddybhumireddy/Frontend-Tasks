class School {
    constructor(schoolName) {
        this.schoolName = schoolName;
    }
    showSchool() {
        console.log("School: " + this.schoolName);
    }
}
class Student extends School {
    constructor(schoolName, studentName) {
        super(schoolName);
        this.studentName = studentName;
    }
    showStudent() {
        super.showSchool();
        console.log("Student: " + this.studentName);
    }
}
let stu1 = new Student("Narayana School", "Rahul");
stu1.showStudent();


class Shop {
    constructor(shopName) {
        this.shopName = shopName;
    }
    showShop() {
        console.log("Shop: " + this.shopName);
    }
}
class Product extends Shop {
    constructor(shopName, productName) {
        super(shopName);
        this.productName = productName;
    }
    showProduct() {
        super.showShop();
        console.log("Product: " + this.productName);
    }
}
let product1 = new Product("Reliance Mart", "Laptop");
product1.showProduct();


class Restaurant {
    constructor(restaurantName) {
        this.restaurantName = restaurantName;
    }
    showRestaurant() {
        console.log("Restaurant: " + this.restaurantName);
    }
}
class Order extends Restaurant {
    constructor(restaurantName, foodName) {
        super(restaurantName);
        this.foodName = foodName;
    }
    showOrder() {
        super.showRestaurant();
        console.log("Food: " + this.foodName);
    }
}
let order1 = new Order("Paradise", "Biryani");
order1.showOrder();


class Library {
    constructor(libraryName) {
        this.libraryName = libraryName;
    }
    showLibrary() {
        console.log("Library: " + this.libraryName);
    }
}
class Book extends Library {
    constructor(libraryName, bookName) {
        super(libraryName);
        this.bookName = bookName;
    }
    showBook() {
        super.showLibrary();
        console.log("Book: " + this.bookName);
    }
}
let book1 = new Book("City Library", "Wings of Fire");
book1.showBook();
