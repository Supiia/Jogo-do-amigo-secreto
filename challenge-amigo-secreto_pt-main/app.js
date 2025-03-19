var amigos = [];

function adicionarAmigo() {
    var nome = document.getElementById("amigo").value; // Obtém o valor do input
    if (nome) { // Se o nome não estiver vazio
        amigos.push(nome); // Adiciona o nome à lista
        document.getElementById("amigo").value = ""; // Limpa o campo de input
        atualizarLista(); // Atualiza a lista de amigos
    } else {
        alert("Por favor, insira um nome.");
    }
}

function atualizarLista() {
    var lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    for (var i = 0; i < amigos.length; i++) {
        lista.innerHTML += "<li>" + amigos[i] + "</li>"; // Adiciona cada amigo como item de lista
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione pelo menos um amigo.");
    } else {
        var sorteado = amigos[Math.floor(Math.random() * amigos.length)]; // Sorteia aleatoriamente
        document.getElementById("resultado").innerHTML = "Amigo sorteado: " + sorteado; // Exibe o sorteado
    }
}
