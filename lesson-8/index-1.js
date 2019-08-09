// function makeArmy(n) {
//     const soldiers = [];
//     let serialNum = 0;
//
//     for (; serialNum < n; serialNum++) {
//         soldiers.push(soldier(serialNum))
//     }
//     return soldiers;
// }
//
// function soldier(serial) {
//     /// closure
//     return () => {
//         debugger
//         console.log(serial)
//         return serial;
//     }
// }
//
//
// const army = makeArmy(5);
// army[3]()

// function makeArmy(n) {
//     let soldiers = [];
//     let serialNum = 0;
//     for (; serialNum < n; serialNum++) {
//
//         soldiers.push(soldier(serialNum));
//     }
//     return soldiers;
// }
//
// function soldier(n) {
//     let age = 33;
//     return function () {
//         let name = 'Igor';
//     debugger
//         console.log(n, name, age);
//     }
// }
//
// const army = makeArmy(4);
// army[2]();

let a = 1;

function fn() {
debugger
    let b = 2;
    return () => {
        console.log(a)
    }
}

fn();
