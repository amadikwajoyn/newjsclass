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