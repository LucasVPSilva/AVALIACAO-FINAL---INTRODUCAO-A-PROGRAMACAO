

const listaUsers = JSON.parse(localStorage.getItem('listaUsers'));



////// FORMULARIO DE ANOTACOES


const listaAnotacao = JSON.parse(localStorage.getItem('listaAnotacao') ?? '[]')

function cadastrarAnotacoes(eventoSubmit) {



    const form = document.querySelector("#formAnotacoes");

    const anotacao = {
        id: proximoId(),
        dataInf: form.dataInf.value,
        corrida: form.corrida.value,
        piloto: form.piloto.value,
        posicaoChegada: form.posicaoChegada.value,
        pontuacaoPiloto: form.pontuacaoPiloto.value,
        observacoesDaCorrida: form.observacoesDaCorrida.value,
    }

    listaAnotacao.unshift(anotacao)
    console.log(listaAnotacao);


    localStorage.setItem('listaAnotacao', JSON.stringify(listaAnotacao))
    localStorage.setItem('ultimoId', anotacao.id)
    // anotacoes.push(anotacao)
    // alert(`pronto`);

    // //JASON.stringfy converte qualquer valor (number, object...) para uma string
    // console.log(anotacao.dataInf.value)
    // localStorage.setItem('anotacoes', JSON.stringify(anotacoes))


}


function proximoId() {
    alert('testando');
    let ultimoId = Number(localStorage.getItem('ultimoId') ?? '0');
    return ++ultimoId
}






const anotacoesSalvas = JSON.parse(localStorage.getItem('listaAnotacao') ?? '[]');

const tBody = document.querySelector('#tBody');

for (const anotacaoTabela of anotacoesSalvas) {

    const tr = document.createElement('tr');
    tBody.appendChild(tr);

    const td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = anotacaoTabela.dataInf;

    const td2 = document.createElement('td');
    tr.appendChild(td2);
    td2.textContent = anotacaoTabela.corrida;

    const td3 = document.createElement('td');
    tr.appendChild(td3);
    td3.textContent = anotacaoTabela.piloto;

    const td4 = document.createElement('td');
    tr.appendChild(td4);
    td4.textContent = anotacaoTabela.posicaoChegada;

    const td5 = document.createElement('td');
    tr.appendChild(td5);
    td5.textContent = anotacaoTabela.pontuacaoPiloto;

    const td6 = document.createElement('td');
    tr.appendChild(td6);
    td6.textContent = anotacaoTabela.observacoesDaCorrida;

    const td7 = document.createElement('button');
    tr.appendChild(td7);
    td7.setAttribute('style', 'text-align:center; padding: 2px; background-color: red; margin: 10px; cursor: pointer; border-radius:5px');
    td7.textContent = 'EXCLUIR'
    td7.onclick = () => {
        removerAnotacao(anotacaoTabela.id)
    }

    const td8 = document.createElement('button');
    tr.appendChild(td8);
    td8.setAttribute('style', 'color:white; text-align:center; padding: 2px; background-color: green; margin: 10px; cursor: pointer; border-radius:5px');
    td8.textContent = 'EDITAR'




}



function removerAnotacao(idAnotacao) {

    const indiceAnotacao = listaAnotacao.findIdex((dev) => dev.id === idAnotacao)

    if (indiceAnotacao === -1) {
        alert('Não foi localizado a anotação!')
        return
    }

    listaAnotacao.splice(indiceAnotacao, 1)
    localStorage.setItem('listaAnotacao', JSON.stringify(listaAnotacao))

}

