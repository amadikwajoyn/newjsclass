
const bill1 = function(products1, tax1){
    let total1 = 0;
    for (let i = 0; i < products1.length; i++) {
        total1 += products1[i] + products1[i] * tax1;
    };
     
    return total1;
};

console.log(bill1([23,34,45], 0.4));


//arrow functions
const greeting = ()=> 'good morning guys';

console.log(greeting());


const greet = () => 'hello, world';

console.log(greet());

const bill = (products, tax ) => {
    let total = 0;
    for(let i=0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log(bill([203,43,56],0.5));


// for call back function 

const myFunc = callBackFunct => {
    let number = 23;
    callBackFunct(number);
};

myFunc(number=> console.log(number));


// using innerhtml function
const ul = document.querySelector('.people');
const students = ['Joy', 'Amadikwa', 'Nmesomachi', 'Treasure', 'Cynthia', 'Ugo', 'Normsoh', 'Chigaze'];

//declare the html format element
let htmls =  ``;
students.forEach(student=>{
    htmls += `<li style ="color: red; font-size:20px;">${student}</li>` ;
});

ul.innerHTML = htmls;

