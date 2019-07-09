// let style = `
//   position: absolute;
//   top: -999px;
//   left: 0px;
//   right: auto;
//   bottom: auto;
//   border: 0px;
//   box-sizing: content-box;
//   word-wrap: break-word;
//   overflow: hidden;
//   height: 0px !important;
//   min-height: 0px !important;
//   font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
//   font-size: 12px;
//   font-weight: 400;
//   font-style: normal;
//   letter-spacing: 0px;
//   text-transform: none;
//   word-spacing: 0px;
//   text-indent: 0px;
//   line-height: 20px;
//   width: 191px;
// `;
//
// function stylesToObject(styleStr) {
//     return styleStr
//         .split(';')
//         .map(ruleStr => ruleStr.trim())
//         .filter(Boolean)
//         .reduce((styleObj, ruleStr) => {
//             const [key, value] = ruleStr.split(':');
//             return {...styleObj, [key.trim()]: value.trim()}
//         }, {});
// }
//
// console.log(stylesToObject(style))
//
// const sum = [1, 2, 3, 4, 5].reduce((acc, item) => {
//     acc += item;
//     return acc;
// }, 0);
//
// console.log(sum);

const user1 = {
    name: 'Igor',
    info: {
        age: 33
    }
}

const user2 = {
    name: 'Igor',
    info: {
         male: true
    }
}

function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    if (obj1 === null || obj2 === null) {
        return false
    }
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return false
    }

    let keysObj1 = Object.keys(obj1); // ['age'']
    let keysObj2 = Object.keys(obj2);// ['male']

    if(keysObj1.length !== keysObj2.length){
        return false;
    }

    for (let keyOfObj1 of keysObj1) {
        // deepEqual(33, undefined)

        if (!deepEqual(obj1[keyOfObj1], obj2[keyOfObj1])) {
            return false;
        }
    }
    return keysObj1.every((key)=>deepEqual(obj1[key], obj2[key]));

}

console.log(deepEqual(user1, user2))
