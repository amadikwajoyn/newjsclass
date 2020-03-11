// object literal

let user = {
    name: 'Amadikwa Joy',
    location: 'Nigeria',
    age: 23,
    color:"Dark in complexion"
};

console.log(user);
console.log(user.name);

user.age = 28;
console.log(user.age);
//using square branket notations

const key = 'location';

console.log(user['name']);

user['name'] = 'Treasure Christain';
console.log(user['name']);


//the type of operator

console.log(typeof user);



//adding methods to objects

let student = {
    name: 'Joy Nmesomachi',
    age: 27,
    department: 'Computer Scinece',
    level: 'HND2',
    login: function(){
        console.log('User Logged in Successfully...')
    },
    logout: function(){
        console.log('User logged out Successfully...');
    }
};

student.login();
student.logout();


//using the 'this' method
let site = {
    name: 'Bluntgist',
    author: 'Joy Sweetheart',
    blogTitle: 'Am an Advocate',
    // using an object inside an array
    blogs: [
        {
            title: 'Things fall apart',
            post: 'I do advocate for women inclusion in tech'
        }, {
            title: 'Bunny Boy',
            post:'But why is it so difficult to find atleast 100 women in tech industry'}
        ],
    login: function(){
        console.log('Author logged in Successfully...');
    },
    logout: function(){
        console.log('Author logged out successfully...');
    },
    logBlog: function(){
        console.log(`This author: ${this.author} have just written the following blog posts `);
        this.blogs.forEach(blog=>{
            console.log(blog.title);
            console.log(blog.post);
        })
    },
    //for shorthand regular function
    errorMessage(){
        console.log('Login Details are Incorrect...');
    }
}


site.logBlog();
site.errorMessage();


//accessing the math object
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area))

const random = Math.random();

console.log(random);
console.log(Math.round(random *100000343440));