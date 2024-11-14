
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    alert('Pré-matrícula realizada com sucesso!');
    // Você pode adicionar mais lógica aqui, como enviar os dados do formulário via AJAX
});
