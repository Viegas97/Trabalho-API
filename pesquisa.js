async function fetchProducts() {
    return fetch('https://diwserver.vps.webdock.cloud/products/category/Footwear - Shoes')
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Ocorreu um erro ao buscar os produtos:', error);
        });
}

window.onload = function() {
    var resultadosHTML = '';
    var resultados = JSON.parse(localStorage.getItem('resultadosPesquisa'));
    if (resultados) {
        for (var i = 0; i < resultados.length; i++) {
            resultadosHTML += criarCardProduto(resultados[i]);
        }
    }

    var resultadosContainer = document.getElementById('resultadosContainer');
    resultadosContainer.innerHTML = resultadosHTML;
};

function criarCardProduto(produto) {
    var cardHTML = `
        <div class="card">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
        </div>
    `;
    return cardHTML;
}