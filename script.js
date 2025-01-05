const produtos = [
    {
        nome: "Produto 1",
        preco: "99,99",
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Produto 2",
        preco: "149,99",
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Produto 3",
        preco: "199,99",
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Produto 4",
        preco: "89,99",
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Produto 5",
        preco: "129,99",
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Produto 6",
        preco: "79,99",
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Produto 7",
        preco: "99,99",
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Produto 8",
        preco: "139,99",
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Produto 9",
        preco: "59,99",
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Produto 10",
        preco: "49,99",
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Produto 11",
        preco: "69,99",
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Produto 12",
        preco: "169,99",
        imagem: "https://via.placeholder.com/150"
    }
];

function carregarProdutos() {
    const lista = document.querySelector('.produtos-lista');
    produtos.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');
        produtoDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>Preço: R$ ${produto.preco}</p>
            <button>Comprar</button>
        `;
        lista.appendChild(produtoDiv);
    });
}

window.onload = carregarProdutos;