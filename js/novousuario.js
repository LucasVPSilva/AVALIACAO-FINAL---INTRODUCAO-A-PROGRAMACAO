


// CRIAR CONTA



const users = JSON.parse(localStorage.getItem('listaUsers') ?? '[]')


document.addEventListener('DOMContentLoaded', () => { })


function cadastrarUsuario(eventoSubmit) {
    eventoSubmit.preventDefault()

    const form = document.querySelector("#formularioCadastro");

    const userExiste = users.some((user) => user.email === form.emailCompleto.value)

    const email = document.getElementById("emailCompleto").value;
    const senha = document.getElementById("senhaLogin").value;
    const nome = document.getElementById("nomeCompleto").value;

    if (email.length < 5) {
        alert("E-mail invalido! Gentileza preencher com um e-mail válido!")
        return;
    }

    if (userExiste) {
        alert('Já existe um usuário com esse email')
        return;
    }


    const user = {
        nome: form.nomeCompleto.value,
        dataNascimento: form.dataNascimento.value,
        email: form.emailCompleto.value,
        senha: form.senhaLogin.value,
        equipe: form.equipeTorcida.value,

    }

    users.push(user)

    //JASON.stringfy converte qualquer valor (number, object...) para uma string

    localStorage.setItem('listaUsers', JSON.stringify(users))
    alert(`Contra criada com sucesso, seja bem-vindo ${nome}!`);
    navegarParaLista()

}


function navegarParaLista() {
    window.location.href = "./anotacoes.html"
}








