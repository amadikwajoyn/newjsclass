let names = ['Joy', 'Gospel', 'Chigaze'];
let ages = [33,43,23,45];
let random = ['Joy', 'Amadikwa', 45,56];

console.log(names[0]);

//array methods

result = names.join(' ');
// result = names.join('-');
// result = names.join('+');
console.log(result);

result = names.indexOf('Joy');
console.log(result);

result = names.concat(ages);
console.log(result);

result = names.concat(['Amadikwa', 'Nmesomachi', 'Treasure']);
console.log(result);


result = names.push('Uzunma');
console.log(result);
console.log(names);

result = names.pop();
console.log(names);