// var a = 1;
// let b = 2;

// {
//     try {
//         console.log(a, b);
//     } catch (error) {}
//     let b = 3;
//     console.log(a, b);
// }

// console.log(a, b);

// () => {
//     console.log(a);
//     var a = 5;
//     let b = 6;
//     console.log(a, b);
// };

// console.log(a, b);


// Apartado B

/*
Sin tocar ninguno de los console.log anteriores, 
modifica ligeramente el código para que muestre la siguiente secuencia:
1 3
1 3
1 2
5
5 6
1 2
*/

var a = 1;
let b = 2;

{
    let b = 3;
    try {
        console.log(a, b);
    } catch (error) {}

    console.log(a, b);
}

console.log(a, b);

(() => {
    var a = 5;
    console.log(a);

    let b = 6;
    console.log(a, b);
})();

console.log(a, b);