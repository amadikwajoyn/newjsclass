const title = "Women TechMakers Owerri";
const author = "Amadikwa Joy N";
const members = 300;

// concatenation Way 
result = author + ' is the lead for ' + title + ' tech community with about ' + members + ' members.';
console.log(result);

// complete string way 
//here we use the basties `` and ${} to escape the string
result = `${author} is the lead for ${title} tech community with about ${members} members.`;
console.log(result);


// creating html templates 
let html = `
    <h2> ${title}</h2>
    <p> ${author} </p>
    <span> This tech community have ${members} members.</span>
`;
console.log(html);