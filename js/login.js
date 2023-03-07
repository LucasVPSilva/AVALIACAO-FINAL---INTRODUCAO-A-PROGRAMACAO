// PÁGINA DE LOGIN

function loginUsuario(event) {
    event.preventDefault();

    const form = document.getElementById("login");

    const listaArmazenada = JSON.parse(localStorage.getItem("listaDeUsuarios") ?? "[]");


    const usuarioCadastrado = listaArmazenada.find((usuario) => usuario.emailLogin === form.emailLogin.value && usuario.senhaLogin === form.senhaLogin.value);
    if (!usuarioCadastrado) {
        alert("Usuário não Localizado! Verifique e-mail ou senha!");
        form.reset();
        return;
    }

    alert(`Seja bem vindo`);

    localStorage.setItem("usuarioAtivo", JSON.stringify(usuarioCadastrado));
    window.location.href = "./anotacoes.html";
}


















































// document.getElementById("loginUsuario").addEventListener("submit", function (e) {
//     e.preventDefault()

//     const email = document.getElementById("emailInput").value;
//     const senha = document.getElementById("passwordInput").value;

//     const account = getAccount(email);

//     if (!account) {
//         alert("Verifique o usuário e/ou a senha!")
//         return;
//     }

//     if (account) {
//         if (account.senha !== senha) {
//             alert("Verifique o usuário e/ou a senha!")
//             return;
//         }


//         window.location.href = "./anotacoes.html"


//     }
// })




// function getAccount(key) {
//     const account = localStorage.getItem(key);

//     if (account) {
//         return JSON.parse(account);
//     }

//     return "";
// }