import {Menu} from './menu.js';

let menu1 = new Menu(
    document.querySelector('.menu1'),
    'Front End',
    ['Angular', 'React', 'Vue']
)

let menu2 = new Menu(
    document.querySelector('.menu2'),
    'Back End',
    ['Express', 'Koa', 'NestJS', 'Sails', 'Happy']
)
menu1.open();
setTimeout(()=> {
    menu1.close();
    menu2.hide();
}, 5000);
