//  let li = document.querySelector('li#webpack');
// console.log(li.__proto__)
// let ul = document.querySelector('ul');
// console.log(ul.__proto__)
// console.log(ul.toString())
// if(ul.contains(li)) {
//     console.log('It is my LI ')
// }
// let a1 = {
//     a: 1,
//     [Symbol.toStringTag]: 'JS is awesome'
// };
// console.log(a1);
// console.log(a1.toString());
// if(ul.contains(li)){
//     let parentUl = el.closest('li');
//     console.log(parentUl);
// }
//let topics = ["flutter", "ReacNativ", "Vue"];


let ulJS = document.querySelector('#js ul');

let fragment = document.createDocumentFragment();

let li1 = document.createElement('li');
li1.innerHTML = '<span>NodeJS</span>';

let li2 = document.createElement('li');
li2.innerHTML = '<span>Express</span>';

let li3 = document.createElement('li');
li3.classList.add('green')
li3.innerHTML = '<span>Koa</span>';


setTimeout(() => {
    fragment.append(li1, li2, li3);
    ulJS.appendChild(fragment);
}, 5000)

setTimeout(() => {
    ulJS.querySelector('.green').innerHTML = 'Dart';
}, 10000)

// const strForParsing = ulJS.dataset.additionList.replace(/'/g,'"');
// console.log(ulJS.dataset)
//
// let htmlStr = JSON.parse(strForParsing).reduce((htmlStr, topic) => {
//     htmlStr += `<li>${topic}</li>`;
//     return htmlStr;
// }, '');
// setTimeout(() => {
//     ulJS.insertAdjacentHTML('beforeend', htmlStr);
// }, 5000)
//
//
// console.log(ulJS)
// let divTS = document.querySelector('#ts')
// setTimeout(() => {
//     divTS.innerHTML = divJS.innerHTML;
//     console.log(divTS)
// }, 5000)


// let listElementsArr = [...document.querySelectorAll('li')];
// let isNGClass = listElementsArr.forEach((li) => {
//     console.log(li.innerHTML)
// });
// for (let li of listElements) {
//     if(!li.matches('.ng')){
//         continue;
//     }
//     console.log(li);
// }

// for (let i = 0; i < listElements.length; i++) {
//     if(!listElements[i].matches('.ng')){
//        continue;
//     }
//     console.log(listElements[i]);
// }
