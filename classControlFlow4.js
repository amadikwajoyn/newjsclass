//if statement

let password = "passe@";

if( password.length >= 8){
    console.log('Hola, is strong');
} 

// the if else if statemenyt
if (password.length>= 12) {
    console.log('The password is very strong');
} else if(password.length >=8) {
    console.log('Password is strong');
} else {
    console.log('Password is not long enough');
}


// the logical if else if statement

if (password.length >= 12 && password.includes('@') ) {
    console.log('The password is very strong');
} else if(password.length >=8 || password.includes('@')) {
    console.log('Password is strong enough');
} else {
    console.log('Password is not strong');
}


// logical not statement


let user = false;

if(!user){
    console.log('You must be a Unique user');
}

