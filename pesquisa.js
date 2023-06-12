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
    console.log('https://diwserver.vps.webdock.cloud/products/category/Footwear - Shoes')
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

function criarCard(products_shoes) {
    let resultados = document.getElementById(resultados);

    resultados.innerHTML += `<div class="card">
        <img src="${products_shoes.imagem}" alt="${products_shoes.nome}">
        <h3>${products_shoes.nome}</h3>
        <p>${products_shoes.descricao}</p>
    </div>`
        ;
}