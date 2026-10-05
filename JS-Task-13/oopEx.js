// MathematicalOperations task
// class MathematicalOperation {
//     static addition() {
//         let a = 10;
//         let b = 20;
//         console.log(a+b);
//     };

//     static substraction(c,d) {
//         console.log(c-d);
//     };

//     static multiplication(){
//         let e = 20;
//         let f = 2;
//         return e*f;
//     };

//     static division(g,h) {
//         return g/h;
//     };
// };
// MathematicalOperation.addition();
// MathematicalOperation.substraction(20,5);
// let mul = MathematicalOperation.multiplication();
// console.log(mul);
// let div = MathematicalOperation.division(10,20);
// console.log(div)


// check weather a num is positive or negative or zero
// without input and without return
// function evaluate() {
//   let a = 12;
//   if (a > 0) {
//     console.log("positive");
//   } else if (a < 0) {
//     console.log("negative");
//   } else {
//     console.log("zero");
//   }
// }
// evaluate();


// without input and with return
// function prime() {
//   let a = 5;
//   c = 0;
//   for (let i = 1; i <= a; i++) {
//     if (5 % i == 0) {
//       c = c + 1;
//     }
//   }
//   if (c == 2) {
//     return "prime";
//   } else {
//     return "not prime";
//   }
// }
// let b = prime();
// console.log(b);


//Write a function to find the factorial of a number.
// with input and without retun
// function fact(a) {
//   fact = 1;
//   for (let i = a; i >= 1; i--) {
//     fact = fact * i;
//   }
//   console.log(fact);
// }
// fact(5);


// with input and with return
// Check whether the triangle is Equilateral, Isosceles or Scalene based on its sides
// class Triangle {
//   static checktriangle(a1, a2, a3) {
//     if (a1 == a2 && a2 == a3) {
//       return "given triangle is equilateral";
//     } else if (a1 == a2 || a1 == a3 || a2 == a3) {
//       return "given triangle is Isosceles";
//     } else {
//       return "given triangle is Scalene";
//     }
//   }
// }
// let mytriangle = Triangle.checktriangle(60, 60, 60);
// console.log(mytriangle);
