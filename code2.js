// DOM
// Melakukan manipulasi dom HTML

// QUERY
// Query Selector
const element = document.querySelector('p');
//console.log(element);

element.textContent = `${element.textContent} I'm from Surabaya`;
//console.log(element);

const newParagraph = document.createElement('p');
newParagraph.textContent = 'Hey!';
document.querySelector('p').appendChild(newParagraph);

// Handling user interaction
document.querySelector('button').addEventListener('click', function(e) {
    e.target.textContent = 'Button Clicked';
    console.log(e.target);
})

document.querySelector('input').addEventListener('input', function (e) {
    console.log(e.target.value);
})

document.querySelector('#cobacek').addEventListener('change', function (e) {
    console.log(e.target.checked);
})

document.querySelector('#cobaselect').addEventListener('change', function (e) {
    console.log(e.target.value);
})

// DATA STORAGE
localStorage.setItem('username', 'Dhana');
console.log(localStorage.getItem('username'));
let myBook = {
    title: 'How I Meet Your Mother',
    author: 'John F. Doe',
    pageCount: 326,
}
localStorage.setItem('users', JSON.stringify(myBook));
console.log(JSON.parse(localStorage.getItem('users')));

