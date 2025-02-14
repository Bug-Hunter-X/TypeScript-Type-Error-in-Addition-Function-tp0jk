function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

let result = 1;
let num1 = 1;
let num2 = "2";
if(isNumber(num2)){
    result = add(num1, num2);
}
console.log(result); // This will log 1 because type guard prevents error. 