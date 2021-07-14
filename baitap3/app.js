//bai1
// let number = prompt("Nhap mot day so cach nhau boi dau , : ").split(",");
// let tong = 0;
// for (let i = 0; i < number.length; i++) {
//     tong += Number(number[i]);
// }
// alert(`Tong day so la ${tong}`);

//bai2
// let number = prompt("Nhap mot day so cach nhau boi dau , : ").split(",");
// console.log(number);
// let arr = [];
// for (let i = 0; i < number.length; i++) {
//     arr.push(Number(number[i]));
// }
// arr.sort();
// alert(arr[0]);

//bai3
// const arr = [3, 4, 6, -9, 10, -88, 2];
// let number = Number(prompt("Nhap mot so : "));
// let temp = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (number == arr[i]) {
//         temp++;
//     }
// }
// if (temp == 0) {
//     alert(`${number} is NOT found in my array`);
// }
// else {
//     alert(`${number} is FOUND in my array`);
// }

//bai4
// let arr = [5, 7, 300, 90, 24, 50, 75];
// console.log(`Hello, my name is Minh and here are my sheeps sizes: ${arr}`);
// console.log(`Now my biggest sheep has size ${Math.max.apply(Math, arr)}, let's shave it`);
// arr.splice(arr.indexOf(Math.max.apply(Math, arr)), 1, 8);
// console.log(`After shearing, here is my flock ${arr}`);
// for (let i = 1; i <= 4; i++) {
//     console.log(`MONTH ${i}`);
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] += 50;
//     }
//     console.log(`One month has passed, my sheeps have grown, here are their sizes: ${arr}`);
//     console.log(`Now my biggest sheep has size ${Math.max.apply(Math, arr)}, let's shave it`);
//     arr.splice(arr.indexOf(Math.max.apply(Math, arr)), 1, 8);
//     console.log(`After shearing, here is my flock ${arr}`);
// }
// let tong = 0;
// for (let i = 0; i < arr.length; i++) {
//     tong += arr[i];
// }
// console.log(`My flock has size in total: ${tong}`);
// console.log(`I would get ${tong} * 2$ = ${tong * 2}`);

//bai5
// let names = prompt("Enter a sequence of names : ").split(", ");
// let arr = [];
// for (let i = 0; i < names.length; i++) {
//     arr.push(`<${names[i]}>`);
// }
// alert(`${names} => ${arr}`);

//bai6
// let numbers = prompt("Enter a sequence of numbers : ").split(",");
// let arr = [];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 != 0) {
//         arr.push(numbers[i]);
//     }
// }
// console.log(numbers);
// console.log(arr);
// alert(`${numbers} => ${arr}`);