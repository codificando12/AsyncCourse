const promise = new Promise(function (resolve, reject){

});

const cows = 15;

const countCows = new Promise(function (resolve, reject) {
    if (cows > 15) {
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject("There now enought cows on the farm");
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error)
}).finally(() => console.log("Finally"))

