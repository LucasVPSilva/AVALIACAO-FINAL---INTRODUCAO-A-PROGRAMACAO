



// CRIAR CONTA

function signup(event) {
    event.preventDefault();

    const form = document.getElementById("formularioCadastro");


    const listaDeUsuarios = JSON.parse(localStorage.getItem("listaDeUsuarios") ?? "[]");


    const email = document.getElementById("emailLogin").value;
    const senha = document.getElementById("senhaLogin").value

    if (email.length < 5) {
        alert("E-mail invalido! Gentileza preencher com um e-mail válido!")
        return;
    }

    if (senha.length < 5) {
        alert("Senha invalida! Gentileza preencher com uma senha com mais de 4 digitos")
        return;
    }

    const usuarioExiste = listaDeUsuarios.some((usuario) => usuario.emailLogin === form.emailLogin.value);
    if (usuarioExiste) {
        alert("E-mail invalido! Gentileza preencher com um e-mail válido!");

        return;
    }

    alert("Usuário cadastrado com sucesso!");


    const usuario = {
        nomeCompleto: form.nomeCompleto.value,
        emailLogin: form.emailLogin.value,
        senhaLogin: form.senhaLogin.value,
        listaDeLembretes: [],
    };



    listaDeUsuarios.push(usuario);
    localStorage.setItem("listaDeUsuarios", JSON.stringify(listaDeUsuarios));

    window.location.href = "index.html";

}















// const listaDeUsuarios = JSON.parse(localStorage.getItem("listaDeUsuarios") ?? "[]");

// function cadastrarUsuario(event) {
//     event.preventDefault();

//     const form = document.getElementById("formularioCadastro");


//     const usuarioExiste = listaDeUsuarios.some((usuario) => usuario.email === form.emailCompleto.value);

//     const email = document.getElementById("emailCompleto").value;
//     const senha = document.getElementById("senhaLogin").value

//     if (email.length < 5) {
//         alert("E-mail invalido! Gentileza preencher com um e-mail válido!")
//         return;
//     }

//     if (senha.length < 5) {
//         alert("Senha invalida! Gentileza preencher com uma senha com mais de 4 digitos")
//         return;
//     }


//     if (usuarioExiste) {
//         alert("E-mail já cadastrado! Realizar o cadastro com outro e-mail");
//         return;
//     }

//     const usuario = {
//         nome: form.nomeCompleto.value,
//         dataNascimento: form.dataNascimento.value,
//         email: form.emailCompleto.value,
//         senha: form.senhaLogin.value,
//         equipe: form.equipeTorcida.value,
//         listaDeLembretes: [],
//     };

//     listaDeUsuarios.push(usuario);
//     localStorage.setItem("listaDeUsuarios", JSON.stringify(listaDeUsuarios));
//     alert("Usuário cadastrado com sucesso!");
//     window.location.href = "./index.html";
//     form.reset();
// }













// const users = JSON.parse(localStorage.getItem('listaUsers') ?? '[]')


// document.addEventListener('DOMContentLoaded', () => { })


// function cadastrarUsuario(eventoSubmit) {
//     eventoSubmit.preventDefault()

//     const form = document.querySelector("#formularioCadastro");

//     const userExiste = users.some((user) => user.email === form.emailCompleto.value)

//     const email = document.getElementById("emailCompleto").value;
//     const senha = document.getElementById("senhaLogin").value;
//     const nome = document.getElementById("nomeCompleto").value;

//     if (email.length < 5) {
//         alert("E-mail invalido! Gentileza preencher com um e-mail válido!")
//         return;
//     }

//     if (userExiste) {
//         alert('Já existe um usuário com esse email')
//         return;
//     }


//     const user = {
//         nome: form.nomeCompleto.value,
//         dataNascimento: form.dataNascimento.value,
//         email: form.emailCompleto.value,
//         senha: form.senhaLogin.value,
//         equipe: form.equipeTorcida.value,

//     }

//     users.push(user)

//     //JASON.stringfy converte qualquer valor (number, object...) para uma string

//     localStorage.setItem('listaUsers', JSON.stringify(users))
//     alert(`Contra criada com sucesso, seja bem-vindo ${nome}!`);
//     navegarParaLista()

// }


// function navegarParaLista() {
//     window.location.href = "./anotacoes.html"
// }






