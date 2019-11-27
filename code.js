// NOTE
/* Kalau var bisa didefinisikan/dideklarasikan lagi, jadi rawan, misal
var a = 5;
var a = 10; // Valid
*/

// let city = "Surabaya";
// let province = "Jawa Timur";
// let no = 123;
// let status = true; // or false

// let address = city + ", " + province;
// //console.log(address);

// let age = 20;
// let ageMin = age - 1;
// let ageDiv = age / 2;
// let ageTime = age * 2;
// let birthDay = age + 1;
// //console.log(birthDay, ageMin);

// // Conditional
// let statusSaya = 'jomblo';
// if (statusSaya === 'jomblo') {
//     console.log('banyak duit');
// } else if (statusSaya === 'friendzone') {
//     console.log('friendzone')
// } else {
//     console.log('dikit duit');
// }

// let result = 80;
// if (result >= 50 && result <= 70) {
//     console.log('Out');
// } else {
//     console.log('Selamat anda lulus');
// }

// let isMale = false;
// let isFemale = false;
// if (isMale && isFemale) {
//     console.log('masuk if');
// } else if (isMale || isFemale) {
//     console.log('masuk else if');
// } else {
//     console.log('masuk else');
// }

// let name = 'John'; // global
// let age = undefined;
// const getName = function () {
//     console.log(name);
//     age = 25; // local
//     console.log(age+1);
// }

// getName();
// console.log(age);

// const add = function (x, y, z) {
//     return x + y + z;
// }

// let result = add(3, 5, 7);
// console.log(result)

// const getScore = function (name = 'John', score = 80) {
//     return `${name} Score: ${score}`;
// }
// let text = getScore(undefined, 50);
// console.log(text);

// Text Concatination
// let firstName = 'Lukman';
// let lastName = 'Hakim';
// const age = function () {
//     return 25;
// }
// let fullName = `Nama saya ${firstName} ${lastName}. Usia saya ${age() - 2}`;
// console.log(fullName);


// OBJECT

// let myBook = {
//     title: 'How I Meet Your Mother',
//     author: 'John F. Doe',
//     pageCount: 326,
// }
// myBook['title'] = 'I Believe I Can Fly';
// myBook.title = 'I Believe I Can Fly';

// console.log(`
//     Judul buku      : ${myBook.title}
//     Pengarang       : ${myBook.author}
//     Jumlah halaman  : ${myBook.pageCount}
// `);

// const getBook = function (book) {
//     console.log(`Judul Buku ${book.title}`);
// }
// getBook(myBook);

// let myAccount = {
//     name: 'John Doe',
//     expense: 0,
//     income: 0,
// }
// const { name: hisName } = myAccount
// console.log(hisName);

// let addExpense = function (account, amount) {
//     account.expense = account.expense + amount;
//     console.log(account)
// }
// console.log(addExpense(myAccount, 500))



// STRING METHODS

// let name = 'John';
// console.log(name.length);
// console.log(name.toUpperCase());

// let password = 'coba123';
// console.log(password.includes('a1'));

// let num = 514.123;
// console.log(Math.floor(num)); // Bulat ke bawah
// console.log(Math.round(num)); // Bulat ke terdekat
// console.log(Math.ceil(num)); // Bulat ke atas


// ARRAY
// let emptyArray = [];
// let age = [23, 24, 25];
// let mixed = ['john', 25, true];
// let nameList = [
//     'John', 
//     'Doe',
//     'Randy'
// ];
// // console.log(nameList[nameList.length-1]);
// nameList.push(4); // Insert at end
// nameList.unshift(5); // Insert at start
// nameList.splice(1, 0, 'Haloo'); // Insert at designated location (karena 0 artinya tidak delete apapun tapi malah ditambah)
// nameList.pop(); // Delete at end
// nameList.shift(); // Delete at start
// nameList.splice(1, 1, 76); // Replace character
// // splice (posisi, jumlah yg mau dihapus (sejak dari posisi), value)

// console.log(nameList);


// LOOPING ARRAY
// let activities = ['Tidur', 'Ngoding', 'PUBG'];
// let index = activities.indexOf('PUBG')
// console.log(index);

// activities.forEach(function (value, index) {
//     console.log(`
//     Value : ${value}
//     Index : ${index}
//     `);
// });

// for (let count = 0; count < activities.length; count++) {
//     console.log(count, activities[count]);
// }

const notes = [
    {
        title: 'Chicken Dinner',
        body: true,
    },
    {
        title: 'Ban Pan',
        body: false,
    }
]

const index = notes.findIndex(function (value, index) {
    return value.title === 'Chicken Dinner';
})
// console.log(notes[0].title === 'Chicken Dinner');

// console.log(index);

const findNote = function (notes, noteTitle) {
    return notes.find(function (value, index) {
        return value.title.toLowerCase() === noteTitle.toLowerCase();
    })
}

const note = findNote(notes, 'ban pan');
// console.log(note);

const getTitle = function (notes) { 
    return notes.filter(function (note) {
        console.log(note);
        return !note.completed;
    })
}
console.log(notes);

console.log(notes.filter(notes => notes.body));

