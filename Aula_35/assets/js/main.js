function setResult(){
    const result = document.querySelector('.container'); // pega o elemento
    const div = document.createElement('div'); // cria um novo elemento
    const elementos = [ {tag: 'p', texto: 'Frase 1'},
                        {tag: 'div', texto: 'Frase 2'},
                        {tag: 'footer', texto: 'Frase 3'},
                        {tag: 'section', texto: 'Frase 4'}];
    
    // neste looping pega o tamanho do objeto e monta o laço
    for (let index = 0; index < elementos.length; index++) {
        // armazena valor por desestruturação
        let {tag, texto} = elementos[index];
        let elementoHtml = document.createElement(tag);
        elementoHtml.innerText = texto;
        div.appendChild(elementoHtml)

        /*
         * Esta é uma forma de fazer, porém existe outra forma mais "bonita"
         *
         * let elementoHtml = document.createElement(elementos[index]['tag']); // cria o elemento com a tag do objeto
         * elementoHtml.innerHTML = elementos[index]['texto']; // acrescenta o texto baseado no que veio do objeto
         * result.appendChild(elementoHtml); // adiciona o texto no html
         * 
         */
        
    };
    result.appendChild(div);
};

setResult();