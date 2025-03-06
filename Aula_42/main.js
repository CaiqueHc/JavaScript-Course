function main(numero) {

    if (typeof (numero) === "number") {
        if (numero % 3 === 0 && numero % 5 === 0) {
            return "FIZZBUZZ"
        } else if (numero % 3 === 0) {
            return "FIZZ"
        } else if (numero % 5 === 0) {
            return "BUZZ"
        } else {
        return numero
    };
    } else { 
        return "is not a number"; 
};
};

for (let index = 0; index <= 100; index++) {
    console.log(main(index))
};