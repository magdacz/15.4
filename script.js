//Zadanie 1
const a = 'Hello';
const b = 'World';
const c =`${a} ${b}`;
console.log(c);

//Zadanie 2
const multiply = (d, e = 2) => d * e;
multiply(5, 6);
console.log(multiply(3));
console.log(multiply(2, 5));

//Zadanie 3
const average = (...args) => {
   let sum = 0;
    for (let i  = 0; i < args.length; i++) {
        sum += args[i];
}
    return sum / args.length;
} 

console.log(average(1));
console.log(average(1, 3)); 
console.log(average(1, 3, 6, 6)); 


//Zadanie 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average(...grades);
console.log(average(...grades));  

//Zadanie 5
const mix = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstName, , lastName] = mix;
console.log(firstName);
console.log(lastName);



