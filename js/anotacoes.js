//////// FORMULARIO DE ANOTACOES


const usuarioAtivo = JSON.parse(localStorage.getItem("usuarioAtivo"));
const listaAnotacao = JSON.parse(localStorage.getItem('listaAnotacao') ?? '[]')




console.log(listaAnotacao);
console.log(usuarioAtivo);

usuarioAtivo.listaDeLembretes.forEach((lembrete, indexe) => {
    console.log(lembrete.dataInf);
})


function cadastrarAnotacoes(eventoSubmit) {


    const form = document.querySelector("#formAnotacoes");

    const anotacao = {
        dataInf: form.dataInf.value,
        corrida: form.corrida.value,
        piloto: form.piloto.value,
        posicaoChegada: form.posicaoChegada.value,
        pontuacaoPiloto: form.pontuacaoPiloto.value,
        observacoesDaCorrida: form.observacoesDaCorrida.value,
    }

    listaAnotacao.push(anotacao);
    usuarioAtivo.listaDeLembretes.push(anotacao)

    localStorage.setItem('listaAnotacao', JSON.stringify(listaAnotacao))
    localStorage.setItem('usuarioAtivo', JSON.stringify(usuarioAtivo))
}



const anotacoesSalvas = JSON.parse(localStorage.getItem('listaAnotacao') ?? '[]');

const tBody = document.querySelector('#tBody');

usuarioAtivo.listaDeLembretes.forEach((lembrete, indexe) => {

    const tr = document.createElement('tr');
    tBody.appendChild(tr);

    const td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = lembrete.dataInf;


    const td2 = document.createElement('td');
    tr.appendChild(td2);
    td2.textContent = lembrete.corrida;

    const td3 = document.createElement('td');
    tr.appendChild(td3);
    td3.textContent = lembrete.piloto;

    const td4 = document.createElement('td');
    tr.appendChild(td4);
    td4.textContent = lembrete.posicaoChegada;

    const td5 = document.createElement('td');
    tr.appendChild(td5);
    td5.textContent = lembrete.pontuacaoPiloto;

    const td6 = document.createElement('td');
    tr.appendChild(td6);
    td6.textContent = lembrete.observacoesDaCorrida;

    const td7 = document.createElement('button');
    tr.appendChild(td7);
    td7.setAttribute('style', 'text-align:center; padding: 2px; background-color: red; margin: 10px; cursor: pointer; border-radius:5px');
    td7.textContent = 'EXCLUIR'


    const td8 = document.createElement('button');
    tr.appendChild(td8);
    td8.setAttribute('style', 'color:white; text-align:center; padding: 2px; background-color: green; margin: 10px; cursor: pointer; border-radius:5px');
    td8.textContent = 'EDITAR'


});



// function removerAnotacao(idAnotacao) {

//     const indiceAnotacao = listaAnotacao.findIdex((dev) => dev.id === idAnotacao)

//     if (indiceAnotacao === -1) {
//         alert('Não foi localizado a anotação!')
//         return
//     }

//     listaAnotacao.splice(indiceAnotacao, 1)
//     localStorage.setItem('listaAnotacao', JSON.stringify(listaAnotacao))

// }



