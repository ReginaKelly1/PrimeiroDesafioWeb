
document.addEventListener('DOMContentLoaded', function() {
    const reservaForm = document.getElementById('reservaForm');
    const vagasList = document.getElementById('vagasList');

    reservaForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const placa = document.getElementById('placa').value;
        const nome = document.getElementById('nome').value;
        const apartamento = document.getElementById('apartamento').value;
        const bloco = document.getElementById('bloco').value;
        const modelo = document.getElementById('modelo').value;
        const cor = document.getElementById('cor').value;
        const vaga = document.getElementById('vaga').value;

        const reserva = {
            placa,
            nome,
            apartamento,
            bloco,
            modelo,
            cor,
            vaga
        };

        console.log(reserva);
        alert('Cadastro realizado com sucesso!');
        limparFormulario();
    });

    function limparFormulario() {
        reservaForm.reset();
    }

    // Simulando vagas cadastradas
    const vagasCadastradas = [
        { placa: 'HYSR202', nome: 'Kelly Regina', apartamento: '202', bloco: 'A', modelo: 'Onix', cor: 'Amarelo', vaga: 3 },
        { placa: 'SRF5841', nome: 'Maria Eduarda', apartamento: '203', bloco: 'B', modelo: 'Fiat Toro', cor: 'Vermelho', vaga: 6 }
    ];

    // Listando as vagas cadastradas
    vagasCadastradas.forEach(function(reserva) {
        const listItem = document.createElement('li');
        listItem.textContent = `Vaga ${reserva.vaga}: ${reserva.modelo} (${reserva.placa}) - ${reserva.nome}`;
        vagasList.appendChild(listItem);
    });
});
