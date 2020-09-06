const express = require('express');
const app = express();
app.get('/Produtos', (request, response) =>{
    let produtos = [];
    for (let i = 1; i <= 15; i++) {
        let produto = { Nome: 'Produto '+i, Preco: (Math.random() * 50).toFixed(2)}
        produtos.push(produto)
    }
    return response.send(produtos);
    
});

app.listen('3333');

// node src/index.js