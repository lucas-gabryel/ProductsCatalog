const sectionProdutos = document.getElementById('produtos')
/* console.log(sectionProdutos) */

for(let produto of dataProdutos){
    sectionProdutos.innerHTML += `
        <div class="produto">
            <div>
                <img id="img" src="${produto.img}">
            </div>
            <h2 id="titulo">${produto.title}</h2>
            <p><span>R$ <span id="preco">${produto.price}</span></span> à vista</p>
        </div>`
}
