'use strict';

//Zadanie 1
var a = 'Hello';
var b = 'World';
var c = a + ' ' + b;
console.log(c);

//Zadanie 2
var multiply = function multiply(d) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    return d * e;
};
multiply(5, 6);
console.log(multiply(3));
console.log(multiply(2, 5));

//Zadanie 3
var average = function average() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var sum = 0;
    for (var i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum / args.length;
};

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

//Zadanie 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average.apply(undefined, grades);
console.log(average.apply(undefined, grades));

//Zadanie 5
var mix = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = mix[2],
    lastName = mix[4];

console.log(firstName);
console.log(lastName);
