//bai 1
// let products = [
//     product1 = {
//         id: 1,
//         name: "Xiaomi portable charger 20000mah",
//         brand: "Xiaomi",
//         price: 428,
//         Color: "White",
//         Category: "Charger"
//     },
//     product2 = {
//         id: 2,
//         name: "VSmart Active 1",
//         brand: "VSmart",
//         price: 5487,
//         Color: "Black",
//         Category: "Phone"
//     },
//     product3 = {
//         id: 3,
//         name: "IPhone X",
//         brand: "Apple",
//         price: 21490,
//         Color: "Gray",
//         Category: "Phone"
//     },
//     product4 = {
//         id: 4,
//         name: "Samsung Galaxy A9",
//         brand: "Samsung",
//         price: 8490,
//         Color: "Blue",
//         Category: "Phone"
//     },
// ];

//1.1
// for (let i = 0; i < products.length; i++) {
//     console.log(`Name: ${products[i].name}`);
//     console.log(`Price: ${products[i].price}`);
//     console.log("=======================");
// }

//1.2
// for (let i = 0; i < products.length; i++) {
//     console.log(`Name: ${products[i].name}`);
//     console.log(`Price: ${products[i].price}`);
//     console.log("=======================");
// }
// let pos = Number(prompt("Enter product position: "));

// for (let i = 0; i < products.length; i++) {
//     if (i == pos - 1) {
//         console.log(`Name: ${products[i].name}`);
//         console.log(`Brand: ${products[i].brand}`);
//         console.log(`Price: ${products[i].price}`);
//         console.log(`Color: ${products[i].Color}`);
//         console.log(`Category: ${products[i].Category}`);
//     }
// }

//1.3
// let cate = prompt("Enter your category:");
// for (let i = 0; i < products.length; i++) {
//     if (cate == products[i].Category) {
//         console.log(`Name: ${products[i].name}`);
//         console.log(`Price: ${products[i].price}`);
//         console.log("=======================");
//     }
// }

//1.4 + 1.5
// product1['Providers'] = ["Phukienzero", "Dientuccc"];
// product2['Providers'] = ["Tgdd", "ddghn", "vhstore"];
// product3['Providers'] = ["Tgdd"];
// product4['Providers'] = ["Tgdd"];
// for (let i = 0; i < products.length; i++) {
//     console.log(`Name: ${products[i].name}`);
//     console.log(`Price: ${products[i].price}`);
//     console.log(`Providers: ${products[i].Providers}`);
//     console.log("=======================");
// }
// let provider = prompt("Enter provider:");
// console.clear();
// for (let i = 0; i < products.length; i++) {
//     for (let j = 0; j < products[i].Providers.length; j++)
//         if (provider == products[i].Providers[j]) {
//             console.log(`Name: ${products[i].name}`);
//             console.log(`Brand: ${products[i].brand}`);
//             console.log(`Price: ${products[i].price}`);
//             console.log(`Color: ${products[i].Color}`);
//             console.log(`Category: ${products[i].Category}`);
//             console.log(`Privider: ${products[i].Providers}`)
//             console.log("=======================");
//         }
// }

//bai2
//2.1
let fe = [
    html = {
        name: "HTML",
        Complete: false
    },
    css = {
        name: "CSS",
        Complete: false
    },
    js = {
        name: "Basics of JavaScript",
        Complete: false
    },
    npm = {
        name: "Node Package Manager",
        Complete: false
    },
    git = {
        name: "Git",
        Complete: false
    }
];


console.log("Hi there, this is your leaning tasks to front-end developer career:")
function show() {
    for (let i in fe) {
        if (fe[i].Complete == false)
            console.log(`[ ] ${Number(i) + 1}.${fe[i].name}`)
        else
            console.log(`[X] ${Number(i) + 1}.${fe[i].name}`)
    }
}
show();
let command = prompt("Enter your command (New, Delete, Update, Complete)");
if (command == "New") {
    let add = prompt("Enter new task");
    add = {
        name: add,
        Complete: false
    }
    console.clear()
    fe.push(add);
    show();
}
else if (command == "Update") {
    let pos = Number(prompt("Enter position"))
    let title = prompt("Enter new title")
    fe[pos - 1].name = title;
    console.clear();
    show();
}
else if (command == "Complete") {
    let pos = Number(prompt("Enter position"))
    fe[pos - 1].Complete = true;
    console.clear();
    show();
}
else if (command == "Delete") {
    let pos = Number(prompt("Enter position"))
    fe.splice(pos - 1, 1)
    console.clear();
    show();
}