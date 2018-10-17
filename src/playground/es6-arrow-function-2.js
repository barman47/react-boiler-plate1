// arguments object - no longer bound with arrow functions

const add =  (a, b) => {
    //console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 1001));

// this keywoard - no longer bound

const user = {
    name: 'Dominic',
    cities: ['Abuja', 'Umuahia', 'Suleja'],
    printPlacesLived () {
        return this.cities.map((city) => this.name + ' has lived in '+ city);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2, 4, 5],
    multiplyBy: 6,
    multiply () {
        return this.numbers.map((number) => number * 6);
    }
}

console.log(multiplier.multiply());