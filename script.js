async function fetchProducts() {
    return fetch('https://diwserver.vps.webdock.cloud/products')
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Ocorreu um erro ao buscar os produtos:', error);
        });
}

function updateCards(products) {

    //vetor para preencher os cards
    for (let i = 0; i < products.length; i++) {

        const card = document.getElementById('card' + (i + 1));
        card.querySelector('h3').innerText = products[i].title;
        card.querySelector('img.card-img-top').src = products[i].image;
        card.querySelector('p.card-text').innerText = `R$ ${products[i].price}`;
    }
}

//var botao = document.getElementById('botao-pesquisa');
//botao.addEventListener('click', teste);


fetchProducts()
    .then(products => {
        updateCards(products.products);
    });

let products_shoes = 'https://diwserver.vps.webdock.cloud/products/category/Footwear - Shoes'



function realizarPesquisa() {
    var pesquisaInput = document.getElementById('pesquisaInput').value;
    console.log('zz')
    window.location.href = 'Pesquisa.html?query=' + pesquisaInput;
}

function exibirResultados(resultados) {

    for (var i = 0; i < resultados.length; i++) {
        criarCard(resultados[i]);
    }
}

function criarCard(products_shoes) {
    let resultados = document.getElementById(resultados);

    resultados.innerHTML += `<div class="card">
        <img src="${products_shoes.imagem}" alt="${products_shoes.nome}">
        <h3>${products_shoes.nome}</h3>
        <p>${products_shoes.descricao}</p>
    </div>`
        ;
}