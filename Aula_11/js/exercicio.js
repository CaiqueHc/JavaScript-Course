let varA    = "A";
let varB    = "B";
let varC    = "C";
let varTemp = "" ;

varTemp = varA;
varA = varB;
varB = varC;
varC = varTemp;

console.log(varA, varB, varC); // C A B
