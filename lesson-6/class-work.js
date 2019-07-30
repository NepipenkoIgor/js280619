const button1 = document.querySelector('.btn1');
const button2 = document.querySelector('.btn2');
var age = 33;
let count = 0;
const handler1 = createCounter('Button1');
button1.addEventListener('click', () => handler1());
button2.addEventListener('click', createCounter('Button2'));


// eslint-disable-next-line no-unused-vars
function createCounter(name) {
    let count = 0;
    return () => {
        console.log(name, ++count);
    }
}

