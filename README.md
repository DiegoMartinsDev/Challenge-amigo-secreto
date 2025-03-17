Link do deploy: https://diegomartinsdev.github.io/Challenge-amigo-secreto/


// Aqui se inicia o código e é a Função para adicionar um amigo à lista

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();
    
// Aqui Verifica se o campo está vazio
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome válido.');
        return;}
        
// Aqui Obtém a lista de amigos
    const listaAmigos = document.getElementById('listaAmigos');
    
// Aqui Verifica se o nome já existe na lista
    const itensLista = listaAmigos.getElementsByTagName('li');
    for (let item of itensLista) {
// Aqui Extrai o nome do item da lista (ignorando o botão "Remover")
        const nomeExistente = item.textContent.split('Remover')[0].trim();
        if (nomeExistente === nomeAmigo) {
            alert('Este nome já foi adicionado. Insira um nome diferente.');
            return; // Interrompe a função se o nome já existir}
    }
// Aqui Cria um novo item da lista (<li>)
    const novoItem = document.createElement('li');
    novoItem.textContent = nomeAmigo;

// Aqui Cria um botão "Remover" para o item da lista
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.classList.add('button-remove');
    botaoRemover.onclick = function () {
        listaAmigos.removeChild(novoItem); // Remove o item da lista
    };

// Aqui Adiciona o botão "Remover" ao item da lista
    novoItem.appendChild(botaoRemover);

// Aqui Adiciona o item à lista de amigos
    listaAmigos.appendChild(novoItem);

// Aqui Limpa o campo de entrada
    inputAmigo.value = '';}

//Aqui é a Função para sortear um amigo secreto
    function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos').children;
    const resultado = document.getElementById('resultado');

//Aqui  Verifica se há nomes na lista
    if (listaAmigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear.');
        return;
    }

// aqui é a parte do sorteio
    resultado.innerHTML = 
    setTimeout(() => {
        // Sorteia um nome aleatório
        const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
        const amigoSorteado = listaAmigos[indiceSorteado].textContent;

// Aqui Extrai o nome do amigo
        const nomeAmigo = amigoSorteado.split('Remover')[0].trim();

// Aqui Exibe o resultado
        resultado.innerHTML = `O amigo secreto é: <strong>${nomeAmigo}</strong></li>`;
    }, ); 
}
