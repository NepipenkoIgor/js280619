// const div = document.querySelector('div');
// const spans = div.querySelectorAll('span');
// const specialSpan = div.querySelectorAll('span:nth-child(1) > img');
// const spanTitle = div.querySelector('span[class=title]');
// const spanData = div.querySelector('span[data-val]');
// console.log(specialSpan);

// function handler(event) {
//     console.log('From script', event.target)
// }
// const button = document.querySelector('button');
// button.addEventListener('click',handler);

// button.addEventListener('click', () => {
//     console.log('TS is awesome')
// });

// setTimeout(()=>{
//     button.removeEventListener('click', handler);
// }, 5000);


// button.addEventListener('mouseenter', ()=>{
//     console.log('on button')
// })
//
//
// button.addEventListener('mouseleave', ()=>{
//     console.log('leave button')
// })

// const button = document.querySelector('button');
// button.addEventListener('contextmenu', (e) => {
//     e.preventDefault();
//     console.log('JS is awesome')
// })
// const main = document.querySelector('main');
// const button = document.querySelector('button');
// document.body.addEventListener('click', (e) => {
//    console.log(e.target.tagName, e.currentTarget.tagName, e.myProp)
// });
//
// main.addEventListener('click', (e) => {
//     console.log(e.target.tagName, e.currentTarget.tagName)
// });
//
// button.addEventListener('click', (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     e.myProp = 'JS'
//     console.log(e.target.tagName, e.currentTarget.tagName)
// });


// function bubbling(e) {
//     console.log('Bubbling', e.currentTarget.tagName)
// }
//
// function capture(e) {
//     console.log('Capture',e.target.tagName, e.currentTarget.tagName)
// }
//
// document.body.addEventListener('dblclick', capture, true);
// document.body.addEventListener('dblclick', bubbling);
//
//
// main.addEventListener('click', capture, true);
// main.addEventListener('click', bubbling);
//
// button.addEventListener('click', capture, true);
// button.addEventListener('click', bubbling);
//
// setTimeout(()=>{
//     let ev = new Event('click');
//     button.dispatchEvent(ev);
// }, 5000);
// const divs = document.querySelectorAll('div');
// for(const div of divs) {
//     div.addEventListener('stream', (e)=>{
//         console.log(e.currentTarget, e.detail);
//         e.currentTarget.insertAdjacentHTML('beforeend', `<span>${e.detail.name}</span>`)
//     });
// }
//
//
//
//
// button.addEventListener('click', (e)=>{
//     const customEvent = new CustomEvent('stream', {detail: {name: 'Igor', age: 33} });
//     for(const div of divs) {
//         div.dispatchEvent(customEvent);
//     }
// });




