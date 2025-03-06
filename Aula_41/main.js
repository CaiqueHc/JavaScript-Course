function main(num1, num2) {
    return num1 > num2 ? num1 : num2;
};

// Arrow function
const main2 = (x, y) => x > y ? x : y;

console.log(main(1, 2));
console.log(main2(5, 2));

