// let todos = [
//     {
//         text: 'todo 1',
//         completed: false,
//     },
//     {
//         text:'todo 2',
//         completed: true,
//     }
// ];

// const generateTodos = function (todo) {
//     const p = document.createElement('p');
//     p.textContent = todo.text;
//     return p;
// } 

// const renderTodos = function (todos) {
//     // Clear div before update
//     document.querySelector('#todos').innerHTML = ""
//     todos.forEach(todo => document.querySelector('#todos').appendChild(generateTodos(todo)));
// }

// save todo from input
// const saveTodo = function (params) {
    
// };

// document.querySelector('#new-todos').addEventListener('submit', function (e) {
//     e.preventDefault();
//     todos.push({
//         text: document.getElementById("cobatext").value,
//         completed: false
//     });
//     renderTodos(todos);
//     document.getElementById('cobatext').value('');
// })

// renderTodos(todos);


// ES6
const users = {
    name: 'Dhana',
    age: 20,
};

let {name, age} = users;
console.log(name);
