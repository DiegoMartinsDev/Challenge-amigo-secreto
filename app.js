
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    
    const listaAmigos = document.getElementById('listaAmigos');

    
    const itensLista = listaAmigos.getElementsByTagName('li');
    for (let item of itensLista) {
        
        const nomeExistente = item.textContent.split('Remover')[0].trim();
        if (nomeExistente === nomeAmigo) {
            alert('Este nome já foi adicionado. Insira um nome diferente.');
            return; 
        }
    }

    
    const novoItem = document.createElement('li');
    novoItem.textContent = nomeAmigo;

    
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.classList.add('button-remove');
    botaoRemover.onclick = function () {
        listaAmigos.removeChild(novoItem); 
    };

    
    novoItem.appendChild(botaoRemover);

    
    listaAmigos.appendChild(novoItem);

    
    inputAmigo.value = '';
}


function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos').children;
    const resultado = document.getElementById('resultado');

    
    if (listaAmigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear.');
        return;
    }

    
    resultado.innerHTML = 
    setTimeout(() => {
        
        const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
        const amigoSorteado = listaAmigos[indiceSorteado].textContent;

        
        const nomeAmigo = amigoSorteado.split('Remover')[0].trim();

        // Exibe o resultado
        resultado.innerHTML = `O amigo secreto é: <strong>${nomeAmigo}</strong></li>`;
    }, ); 
}
