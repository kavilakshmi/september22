console.log("Variables and datatypes")

const numex = 1;
var strex = "hi";
let _bool = true;
let _null = null;
let _undef;

console.log(numex, strex, _bool, _null, _undef);

let arr = [numex, strex, _bool, _null, _undef];

let obj = {
    'numex': numex,
    'strex': strex,
    'bool': _bool,
    '_null': _null,
    'undef': _undef
};

console.log(arr);
console.log(obj);

console.log("Operators");
console.log("Arith - Operators");
console.log(1+1,1+"2", "hi"+"hdhhf", 1-1, 1-"2s", 1-'3', 3 * '8s', 2/'3');

console.log("logical - Operators");
console.log("1==1 && 1==='1' -> ", 1 == 1 && 1 === '1', "1==1 || 1==='1' ->", 1 == 1 || 1 === '1',"!(1==='1') ->" , !(1==='1'));

console.log("assignment - Operators");
let a = 10;
let b;
b=a;

console.log(b);
b += a;

console.log(b);

console.log('Comparision operator');
console.log('10<5 = ', 10 < 5, '100==100 = ', 100 == 100, ' 10>5 = ', 10 > 5, '!10 = ', !10, '10<=10 = ',10<=10)

console.log('string ops')
const name1 = 'kavi';
let edu = 'BE';

console.log(name1+' '+edu);
console.log('1+"1"= ', 1+"1");
console.log("kavi's pet cat");

console.log('array examples');
let numarr = [1,2,3,4]

numarr[4]=5
numarr[5] = [1,23,3]
numarr[6]= []
numarr[7]= {}
numarr[8]= obj
console.log(numarr)

delete numarr[4]
console.log(numarr)
console.log(numarr[100])
console.log(numarr[4])
console.log('length of array', numarr.length)


