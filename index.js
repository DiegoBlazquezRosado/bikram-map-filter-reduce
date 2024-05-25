//Arrays Map
const numbers = [4, 5, 6, 7, 8, 9, 10];

const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

const staff = [
    {
        name: 'Pepe',
        role: 'The Boss',
        hobbies: ['leer', 'ver pelis']
    },
    {
        name: 'Ana',
        role: 'becaria',
        hobbies: ['nadar', 'bailar']
    },
    {
        name: 'Luis',
        role: 'programador',
        hobbies: ['dormir', 'comprar']
    },
    {
        name: 'Carlos',
        role: 'secretario',
        hobbies: ['futbol', 'queso']
    }
  ];


//Arrays Filter
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const foodList2 =[
    {
        name: 'Tempeh',
        isVeggie: true
    },
    {
        name: 'Cheesbacon burguer',
        isVeggie: false
    },
    {
        name: 'Tofu burguer',
        isVeggie: true
    },
    {
        name: 'Entrecot',
        isVeggie: false
    }
];

const inventory = [
    {
        name: 'Mobile phone',
        price: 199
    },
    {
        name: 'TV Samsung',
        price: 459
    },
    {
        name: 'Viaje a Cancún',
        price: 600
    },
    {
        name: 'Mascarilla',
        price: 1
    }
  ];
  
//Arrays Reduce  
const numeros3 = [39, 2, 4, 25, 62];

const sentenceElements = [
    'Me',
    'llamo',
    'Diego',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
];

const books = [
    {
        name: ' JS for dummies',
        author: 'Emily A. Vander Veer',
        price: 20,
        category: 'code'
    },
    {
        name: 'Don Quijote de la Mancha',
        author: 'Cervantes',
        price: 14,
        category: 'novel'
    },
    {
        name: 'Juego de tronos',
        author: 'George R. Martin',
        price: 32,
        category: 'Fantasy'
    },
    {
        name: 'javascript the good parts',
        author: 'Douglas Crockford',
        price: 40,
        category: 'code'
    }
];
  
//Ejercicios Map
//Ejercicio 1
const elevadoFunction = (n) => {return n**n};
const elevados = () => {
    let elevadoMap = numbers.map(elevadoFunction);
    return elevadoMap;
}

//Ejercicio 2
const foodFunction = (food, index) => {
    switch(index){
        case 0: 
        return `Como soy de Italia, amo comer ${food}`;
        case 1:
        return `Como soy de Japón, amo comer ${food}`;
        case 2:
        return `Como soy de Valencia, amo comer ${food}`;
        default:
        return `Aunque no como carne, el ${food} es sabroso`;
    }
}
let result2 = foodList.map(foodFunction);

//Ejercicio 3
const staffFunction = (obj) => {
    switch(obj.name){
        case 'Pepe':
            return `${obj.name} es ${obj.role} y le gusta ${obj.hobbies[0]} y ${obj.hobbies[1]}`;
        case 'Ana':
            return `${obj.name} es ${obj.role} y le gusta ${obj.hobbies[0]} y ${obj.hobbies[1]}`;
        case 'Luis':
            return `${obj.name} es ${obj.role} y le gusta ${obj.hobbies[0]} y ${obj.hobbies[1]}`;
        case 'Carlos':
            return `${obj.name} es ${obj.role} y le gusta ${obj.hobbies[0]} y ${obj.hobbies[1]}`;
    }
}
let result3 = staff.map(staffFunction);

//Ejercicios Filter
//Ejercicio 4
const soloImparesFunction = (n) => {
    return n%2 !== 0;
}
let result4 = numbers2.filter(soloImparesFunction);

//Ejercicio 5
const foodFilterFunction = (food) => { return food.isVeggie === true }
const foodMapFunction = (food) => {
        switch (food.name) {
            case 'Tempeh':
                return `Que rico ${food.name} me voy a comer!`;
            case 'Tofu burguer':
                return `Que rica ${food.name} me voy a comer!`;  
        }
}
let result5 = foodList2.filter(foodFilterFunction).map(foodMapFunction);

//Ejercicio 6
const inventoryFilter = (product) => {
    return product.price > 300;
}
const inventoryMapFunction = (product) => {
    return product.name;
}
let result6 = inventory.filter(inventoryFilter).map(inventoryMapFunction);

//Ejercicios Reduce
//Ejercicio 7
const multiplicacionFunction = (accumulator, currentValue) => {
    return accumulator * currentValue;
} 
let result7 = numeros3.reduce(multiplicacionFunction);

//Ejercicio 8
const concatenarString = (accumulator, currentValue) => {
    return `${accumulator} ${currentValue}`;
}
let result8 = sentenceElements.reduce(concatenarString);

//Ejercicio 9
const codeFilter = (libro) => {
    return libro.category === 'code';
}
const codeMap = (libro) => {
    return libro.price;
}
const codeReduce = (accumulator, currentValue) => {
    return accumulator + currentValue;
}
let result9 = books.filter(codeFilter).map(codeMap).reduce(codeReduce);