// let i= 3
// while(i<=12){
//     console.log(i);
//     i = i+3
// }


// let i = 10
// while(i>=5){
//     console.log(i);
//     i--
// }


// let num = 120
// while(num>=60){
//     console.log(num);
//     num = num-20  
// }


// let num = 345
// while(num>0){
// let id = num%10
// console.log("last number",id);
// num = parseInt(num/10);
// console.log("num",num);
// }


// Display the digits in given number in reverse order
// let num = 345
// while(num!=0){
//     let id = num%10
//     console.log(id);
//     num = parseInt(num/10)
// }


// Count the digits in given number
// let num = 3452
// let count = 0
// while(num!=0){
//     let id = num%10
//     count = count +1
//     num = parseInt(num/10)
// }
// console.log("count:",count);


// Sum of digits
// let num =123
// let sum = 0
// while(num>0){
//     let id = num%10;
//     sum = sum +id
//     num = parseInt(num/10)
// }
// console.log(sum);


// Print reverse string in variable
// let num = 234
// let rev = 0
// while(num!=0){
//     let ld = num%10
//     rev = rev*10+ld
//     num = parseInt(num/10)
// }
// console.log(rev);


// let num = 2102
// let temp = num
// let rev = 0
// while(num!=0){
//     let ld = num%10
//     rev = rev*10+ld
//     num = parseInt(num/10)
// }
// if(rev==temp){
//     console.log(rev,"is palindrome");
// }else{
//     console.log(rev,"is not palindrome");
// }


// Print even numbers
// let num = 2345
// while(num!=0){
//     let ld = num%10
//     if(ld%2==0){
//         console.log(ld);
//     }
//     num = parseInt(num/10)
// }


// Count odd numbers
// let num = 123456789
// let count = 0
// while(num!=0){
//     let ld = num%10
//     if(ld%2==1){
//         count= count+1
//     }
//     num = parseInt(num/10)
// }
// console.log("count of odd digits",count);


// Print largest digit in given number
// let num = 23134
// let max = 0
// while(num!=0){
//     let ld = num%10
//     if(ld>max){
//         max = ld
//     }
//     num = parseInt(num/10)
// }
// console.log(max);


// Smallest number
// let num = 23134
// let min = 9
// while(num!=0){
//     let ld = num%10
//     if(ld<min){
//         min = ld
//     }
//     num = parseInt(num/10)
// }
// console.log(min);


// 1. Find the average of digits in a given number.
// let num = 123
// let sum = 0
// while(num!=0){
//     let ld = num%10
//     sum = sum+ld
//     num = parseInt(num/10)
// }
// console.log(sum);


// 2. Find the average of digits in a given number.
// let num = 624
// let sum = 0
// let count = 0
// while(num!=0){
//     let ld = num%10
//     count = count+1
//     sum = sum + ld
//     num = parseInt(num/10)
// }
// let avg = sum/count
// console.log(avg);


// 3. Find the sum of the first digit and the last digit of a given number.
// let num = 9361
// let ld = num%10
// while(num!=0){
//     let fd = num%10
//     num = parseInt(num/10)
// }
// console.log(ld+fd);


// 4. Find the average of digits that are divisible by 5 in a given number.
// let num = 125755
// let sum = 0
// let count = 0
// while(num!=0){
//     let ld = num%10
//     num = parseInt(num/10)
//     if(ld%5==0){
//         sum = sum+ld
//         count = count +1
//     }
// }
// console.log(sum/count);


// 5. Find the difference between the largest digit and the smallest digit in a given number.
// let num = 9361
// let max = 0
// let min = 9
// while(num!=0){
//     let ld = num%10
//     if(ld>max){
//         max = ld
//     }
//      if(ld<min){
//         min = ld
//     }
//     num = parseInt(num/10)
// }
// console.log("max",max);
// console.log("min",min);
// console.log("differnece",max-min);
