


document.getElementById("loginUsuario").addEventListener("submit", function (e) {
    e.preventDefault()

    const email = document.getElementById("emailInput").value;
    const senha = document.getElementById("passwordInput").value;

    const account = getAccount(email);

    if (!account) {
        alert("Verifique o usuário e/ou a senha!")
        return;
    }

    if (account) {
        if (account.senha !== senha) {
            alert("Verifique o usuário e/ou a senha!")
            return;
        }


        window.location.href = "./anotacoes.html"


    }
})




function getAccount(key) {
    const account = localStorage.getItem(key);

    if (account) {
        return JSON.parse(account);
    }

    return "";
}


// ANOTACOES 