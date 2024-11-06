const form = document.getElementById('form-contato');
const inputNomeContato = document.getElementById('nome-contato');
const inputTelefone = document.getElementById('telefone');
const inputEmail = document.getElementById('email');
let linhas = '';
const telefonesAdicionados = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (telefonesAdicionados.includes(inputTelefone.value)) {
        alert(`Este numero : ${inputTelefone.value} ja foi adionado anteriormente.`);
    } else {

        telefonesAdicionados.push(inputTelefone.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += `<td>${inputEmail.value}</td>`;
        linha += `</tr>`;

        linhas += linha;

        const corpoTabela = document.querySelector(`tbody`);
        corpoTabela.innerHTML = linhas;
    }



    inputNomeContato.value = '';
    inputTelefone.value = '';
    inputEmail.value = '';
});
