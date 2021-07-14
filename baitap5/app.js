//ss1+2
//1
//1.1
//invalid names khi khai báo thiếu tên biến, khai báo trùng tên, khai báo thừa, thiếu dấu ','. Khai báo sai quy tắc. 
//VD: let 1a, let let = 5 (không được khai báo biến là let), num = 5(num chưa được khai báo)
//1.2
// dùng typeof để check data type

//2
//2.1
//var và const là các từ khóa dùng để khai báo biến trong js
//2.2
//let sử dụng trong function scope còn var sử dụng cho global scope
//2.3
//let và const không khai báo lại được nhưng let có thể gán lại giá trị const thì ko
//2.4
//var là khi khai báo một biến toàn cục có thể dùng mọi nơi
//let là khai báo biến cục bộ chỉ dùng trong hàm của nó
//const khai báo một hằng số không thay đổi và cũng là biến cục bộ
//3
//3.1+3.2
//boolean là một loại kiểu dữ liệu trả về true hoặc false

//ss3+4
//1
//cách 1
// function swap(a, b) {
//     var temp;
//     temp = this.a;
//     this.a = this.b;
//     this.b = temp;
//     return this;
// }
// var a = 5,
//     b = 6;
// console.log(a, b);
// swap(a, b);
// console.log(a, b);
//cách 2
// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// a; // => 2
// b; // => 1

// 2
// const s = 'Hello beauty there';
// a = s.split(" ")
// console.log(a);

// 3
// const a = [4, 5, 7, -8];
// console.log(a);
// console.log(...a);

// 4
// const product = {
//     name: 'Xiaomi rice cooker',
//     price: 1700,
//     brand:'Xiaomi',
//     color: 'white'
// };
// for (let x in product) {
//     console.log(x);
// }
// // 4.1 x là property
// // 4.2
// for(var i in product)
// {
//     console.log(`${i}: ${product[i]}`);
// }

//5
// const task = {
//         subject: "Implement login feature",
//         createdBy: "Hoang Ngoc Duc",
//         assignTo: "Nguyen Phuong Nam",
//         dueDate: "2019-10-08T18:00:24+0000",
//         expectedHours: 0.5,
//     };
// console.log(`${task.dueDate}, ${task.subject}, ${task.assignTo}`);

//6
//const jobSearch = {}
//lớp ngoài cùng là hits là một array
//sử dụng vòng for(let i = 0;i<jobSearch.length;i++) rồi gọi đến các thuộc tính.
//VD: jobSearch[i].title để gọi đến title của từng đối tượng

//Reiview
//1
// let shop = [{
//     id: 1,
//     items: "Jeans"
// },
// {
//     id: 2,
//     items: "T-shirt"
// },
// {
//     id: 3,
//     items: "Socks"
// }
// ]

// function show() {
//     console.log(`The current items are: `);
//     for (let i in shop) {
//         console.log(`${shop[i].id}. ${shop[i].items}`);
//     }
// }
// let n = 0
// let nhap = prompt("Hi there, Welcome to shop admin panel, what do you want (C, R, U, D): ");
// if (nhap == "C") {
//     let add = prompt("Enter new task");
//     add = {
//         id: Number(shop.length) + 1,
//         items: add,
//     }
//     console.clear()
//     shop.push(add);
//     show();
// }
// else if (nhap == "R") {
//     console.clear();
//     show();
// } else if (nhap == "U") {
//     let pos = Number(prompt("Enter position"))
//     let newName = prompt("Enter the name of the new item")
//     shop[pos - 1].items = newName;
//     console.clear();
//     show();
// } else if (nhap == "D") {
//     var pos = Number(prompt(`Enter position: `));
//     shop.splice(pos - 1, 1);
//     console.clear();
//     show();
// } else
//     console.log("This command is not supported");

//ss5
//1
// var input = prompt(`Nhap chuoi bat ki: `);
// if (input.indexOf("Java") == 0) console.log(true);
// else console.log(false);

//2
// function findMaxDiff(n) {
//     let m = Math.abs(n[0]) + Math.abs(n[1]);
//     if (n.length <= 1)
//         return 0;
//     else {
//         for (let i = 0; i < n.length; i++) {
//             let t = Math.abs(n[i]) + Math.abs(n[i + 1]);
//             if (t > m)
//                 m = t;
//         }
//     }
//     return m;
// }
// var a = [1, -10, 5, 18, -9, 5];
// console.log(`MaxDiff cua n : ${findMaxDiff(a)}`);

//3
// function first(arr, n) {
//     if (n <= arr.length)
//         return arr[0];
//     else if (n > arr.length)
//         return arr;
//     else if (n <= 0)
//         return [];
// }
// let arr = [9, 15, 12, 35, 15, 20, 68, 45, 47];
// let n = 15;
// console.log(first(arr, n));

//4
// function checkInt(a, b) {
//     if ((a > 0 && b < 0) || (a < 0 && b > 0))
//         return true;
//     else
//         return false;

// }
// var a = Number(prompt("Number 1"));
// var b = Number(prompt("Number 2"));
// console.log(checkInt(a, b));

//5
// function nhap(n) {
//     if (n > 13)
//         return Math.abs(13 - n) * 2;
//     else
//         return Math.abs(13 - n);
// }
// var input = Number(prompt('Enter number: '));
// console.log(nhap(input));

//6
// function max(array) {
//     let t = 0;
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++)
//             if (t < Math.abs(arr[i] - arr[j]))
//                 t = Math.abs(arr[i] - arr[j]);

//     }
//     return t;
// }
// let arr = [1, 2, 3, 8, 9];
// console.log(`${max(arr)}`);