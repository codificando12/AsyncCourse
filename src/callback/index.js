// un callback es una funcion que pasa otra funcion como argumennto.

function sum (val1, val2) {
    return val1 + val2;
};

function calc (val1, val2, callback) {
    return callback (val1, val2);
}

console.log(calc(2, 4, sum));

setTimeout(function () {
    console.log("Hola JavaScript")
}, 2000);

function gretting (name) {
    console.log(`Hola, ${name}`)
}

setTimeout(gretting, 2000, "Emilio")