let resultados = '';
let sectionProdutos = document.getElementById('produtos');

function pesquisar() {
    resultados = ''
    let campoPesquisa = document.getElementById('input-pesquisa').value;
    
    if(!campoPesquisa){
        sectionProdutos.innerHTML = `<p>Nenhum produto encontrado. Digite algum produto, tamanho ou cor.</p>`
    };
    
    campoPesquisa = campoPesquisa.toLowerCase();
    
    
    let title = '';
    let size = '';
    let color = '';
    
    for(let produto of dataProdutos){
        title = produto.title.toLowerCase();
        size = produto.size.toLowerCase();
        color = produto.color.toLowerCase();
    
        if(title.includes(campoPesquisa) || size.includes(campoPesquisa) || color.includes(campoPesquisa)) {
            resultados += `
                <div class="produto">
                    <div>
                        <img id="img" src="${produto.img}">
                    </div>
                    <h2 id="titulo">${produto.title}</h2>
                    <p><span>R$ <span id="preco">${produto.price}</span></span> à vista</p>
                </div>`;
        };
    
    };
    
    if(!resultados){
        resultados = `<p>Nenhum produto encontrado.</p>`
    };
    
    sectionProdutos.innerHTML = resultados;
}

for(let produto of dataProdutos){
    resultados += `
        <div class="produto">
            <div>
                <img id="img" src="${produto.img}">
            </div>
            <h2 id="titulo">${produto.title}</h2>
            <p><span>R$ <span id="preco">${produto.price}</span></span> à vista</p>
        </div>`;
    };

sectionProdutos.innerHTML = resultados;
