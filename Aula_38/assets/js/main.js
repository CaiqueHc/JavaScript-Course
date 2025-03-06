function main(){
    const div = document.querySelector(".container");
    const paragrafos = div.querySelectorAll("p");

    const bodyStyle = getComputedStyle(document.body); // pega os estilos do body
    const colorStyles = bodyStyle.backgroundColor; // pega a cor 

    for (let p of paragrafos){
        // Manipulação do CSS. backgroundColor é uma propriedade padrão 
        // essa propriedade está contida na variavel paragrafo
        p.style.backgroundColor = colorStyles;
        p.style.color = "#FFFFFF";
    };
};

main();