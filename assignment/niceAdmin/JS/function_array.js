function sum(a,b){
    return a+b;
}

let subt = function(a,b){
    return a-b;
}

let square = a => a*a;

let mul = (a,b) => {
   return a*b;

}

console.log(sum(10,5), subt(10,5), square(4), mul(2,4))
// array methods

let alphabets = ['A', 'B', 'C'];

alphabets.push('D');
console.log(alphabets);

alphabets.shift();
console.log(alphabets);
alphabets.unshift('A');
console.log(alphabets);

console.log(alphabets.slice(0,2))
alphabets.splice(5,0,'E')
console.log(alphabets)
alphabets.splice(0,1,'A')
console.log(alphabets)

