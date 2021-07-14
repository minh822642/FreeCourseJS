//bai1
//a
// for (let i = 0; i < 7; i++) {
//     console.log(i);
// }

//b
// let n = Number(prompt("Enter a number"));
// for (let i = 0; i < n; i++) {
//     console.log(i);
// }

//c
// let n = Number(prompt("Enter n"));
// for (let i = 3; i < n; i++) {
//     console.log(i);
// }

//d
// let n = Number(prompt("Enter n"));
// let c = prompt("Enter c");
// for (let i = c; i < n; i++) {
//     console.log(i);
// }

//e
// let n = Number(prompt("Enter n"));
// let c = Number(prompt("Enter c"));
// for (let i = c; i < n; i += 3) {
//     console.log(i);
// }

//f
// let n = Number(prompt("Enter n"));
// let c = Number(prompt("Enter c"));
// let s = Number(prompt("Enter s"));
// for (let i = c; i < n; i += s) {
//     console.log(i);
// }

//bai2
// let n = Number(prompt("Enter n"));
// let h = 1;
// for (let i = 1; i <= n; i++) {
//     h *= i;
// }
// console.log(h);

//bai3
// let age = Number(prompt("How old are you?"));
// while (age > 0) {
//     if (age < 14) {
//         alert("You are not old enough to view this content");
//     } else {
//         alert("Enjoy!");
//     }
// }

//bai4
// let x = Number(prompt("Enter a number"));
// while (x >= 0 && x < 10) {
//     if (x < 5) {
//         alert("Lower half of 9");
//     } else {
//         alert("Higher half of 9");
//     }
// }

//bai5
// let n = Number(prompt("n = "));
// let x = Number(prompt("x = "));
// while (x >= 0 && x < n) {
//     if (x < n / 2) {
//         alert(`${x} is in lower half of ${n}`);
//     } else {
//         alert(`${x} is in higher half of ${n}`);
//     }
// }

//bai6
// let x = Number(prompt("x = "));
// if (x % 2 == 0) {
//     alert(`${x} is an even number`);
// } else {
//     alert(`${x} is an odd number`);
// }

//bai7
//a
// let l = 0, h = 0, n = 6;
// for (let i = 0; i < n; i++) {
//     if (i < n / 2) {
//         l++;
//     } else {
//         h++;
//     }
// }
// for (let i = 0; i < l; i++) {
//     console.log("L");
// }
// for (let i = 0; i < h; i++) {
//     console.log("H");
// }

//b
// let l = 0, h = 0;
// let n = Number(prompt("Enter the total number of L's and H's"));
// for (let i = 0; i < n; i++) {
//     if (i < n / 2) {
//         l++;
//     } else {
//         h++;
//     }
// }
// for (let i = 0; i < l; i++) {
//     console.log("L");
// }
// for (let i = 0; i < h; i++) {
//     console.log("H");
// }

//c
// let n = 8;
// for (let i = 0; i < 8; i++) {
//     if (i % 2 == 0) {
//         console.log("0");
//     } else {
//         console.log("1");
//     }
// }

//d
// let n = Number(prompt("Enter the total number of 1's and 0's"));
// for (let i = 0; i < n; i++) {
//     if (i % 2 == 0) {
//         console.log("0");
//     } else {
//         console.log("1");
//     }
// }

//bai8
// let w = Number(prompt("Enter your weight in kg"));
// let h = Number(prompt("Enter your height in cm"));
// let mh = h / 100;
// let bmi = w / (mh ** 2);
// alert(`Your BMI is ${bmi}`);
// while (bmi > 0) {
//     if (bmi < 16) {
//         alert("You are severely underweight");
//     } else if (bmi < 18.5) {
//         alert("You are underweight");
//     } else if (bmi < 25) {
//         alert("You are normal");
//     } else if (bmi < 30) {
//         alert("You are overweight");
//     } else {
//         alert("You are obese");
//     }
// }


