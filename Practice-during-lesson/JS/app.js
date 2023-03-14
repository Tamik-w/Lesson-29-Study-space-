// -1

// let time = 3023;

// setTimeout(() => {alert(`Hello, you need to wait ${time} milis. before this board will appeared`)}, time)

// -2

// let a;
// setTimeout(() => {a = 10}, 1000)
// setTimeout(() => alert(a), 1000)

// -3

// let a;
// let promise = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         a = prompt('Enter your number: ')
//         for(let i = 0; i <= a; i++){
//             setTimeout(() => alert(`num is ${i}`), i * 1000)
//         }
//         resolve(a);
//         reject(new Error('Error'));
//     }, 2000);
// });

// -4 (method | .then() |)

// let a;
// let promise = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         a = 5;
//         resolve(a)
//         reject(new Error('Error'));
//     }, 1000);
// });
//  promise.then(
//         function (result) {console.log(result);},
//         function (error) {console.log(error);},
//  );

// let promise1 = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         const user = {
//             name: 'aaa',
//             age: 24,
//             status: 'admin',
//         };
//         resolve(user)
//         reject(new Error('Error'));
//     }, 3000);
// });
//  promise1.then (        
//     function (result) {console.log(result);},
//     function (error) {console.log(error);},
//  );

// SHORT FORM

// let a;
// let promise = new Promise(function(resolve,reject){
//     a = {
//         name: 'aaa',
//         age: 24,
//         status: 'admin',
//     };
//     resolve(a)
//     reject(new Error('Error'));
// }, 1000)
//  promise.then(console.log, console.log)

// -5 (method | .catch() |)

// let promise = new Promise(function(resolve,reject){
//     setTimeout(() => reject(new Error('Error')), 1000)
// });
//  promise.catch(console.log);

// -6 (method | .finally() |)

// let age;
// let promise = new Promise(function(resolve,reject){
//     age = '25';
//     if(age >= 18){
//         resolve('Show this movie')
//     }else {
//         reject('You can`t watch it')
//     };
// }, 2000);
//  promise.finally(() => console.log('Show advertising'))
//  .then(console.log, console.log)

// -7 (FETCH)

// fetch('https://jsonplaceholder.typicode.com/photos/5')
//     .then(response => response.json())
//     .then(json => console.log(json))

// -8 (JSON)

// function getData (url) {
//     let result = fetch(url);
//     result.then(response => {
//             if(response.ok){
//                 return response.json();
//             } 
//             throw new Error(`Error: ${response.status}`);
//         })
//     .then(data => console.log('Data: ', data))
//     .catch(error => console.log(error.message))
// }

// getData('https://jsonplaceholder.typicode.com/posts');

// -9 (ASYNC, AWAIT)

// async function getAsincData(url){
//     try{
//         let result = await fetch(url);
//         if(result.ok){
//             let response = result.json();
//             console.log('Data: ', response)
//         } else {
//             throw new Error(`Error: ${result.status}`)
//         }
//     } catch(error){
//         console.log(error.message)
//     }
// }
// getAsincData('https://jsonplaceholder.typicode.com/photo')

// -10(HTML)

// function hello(){
//     alert(`hello`);
// }

// let btn = document.querySelector('.hi');
// btn.onclick = function(){
//     alert('Hello')
// }

// document.addEventListener('click', function(event){
//     const width  = `${Math.round(Math.random() * 500)}px`
//     const height  = `${Math.round(Math.random() * 500)}px`
//     const color = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`
//     document.getElementById('number-box').innerHTML = `WIDTH: ${width},     HEIGHT: ${height},      COLOR: ${color}`;
//     console.log(width, height, color);
//     event.target.style.backgroundColor = color;
//     event.target.style.width = width;
//     event.target.style.height = height;
// })

// const generateSize = (event) => {
//     const width = `${Math.round(Math.random() * 1000)}px`;
//     const height = `${Math.round(Math.random() * 1000)}px`;

//     event.target.style.width = width
//     event.target.style.height = height
// }

// document.addEventListener('click', generateSize)

// let page = document.querySelector('.block');
// page.addEventListener('mouseover', lastQuestion);
// function lastQuestion (event) {
//     alert('aaaa')
//     document.getElementById('number-box').innerHTML = `Red Box`
//     page.removeEventListener('mouseover', lastQuestion)
// }

// -11(.filter())

// const players = [
//     {name: 'Ronaldo', age: 37,
//      teams: ['Madrid', 'United']
//     },
//     {name: 'Salah', age: 30,
//      teams: ['Roma', 'Liverpool']
//     },
//     {name: 'Haaland', age: 22,
//      teams: ['Dortmund', 'City']
//     },
//     {name: 'Bruyne', age: 31,
//      teams: ['Wolfsburg', 'City']
//     },
// ]

// console.table(
//     players.filter(
//         players => players.teams.includes('Liverpool')
//     )
// );