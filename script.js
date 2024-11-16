
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    alert('Pré-matrícula realizada com sucesso!');
    // Você pode adicionar mais lógica aqui, como enviar os dados do formulário via AJAX
})

const menu = document.querySelector('#meu')
const navegacao = document.getElementById('oculto')
const nav = document.getElementById('navegacao')

menu.addEventListener('click', ()=>{
    navegacao.classList.toggle('revelarNavegacao')
    nav.classList.toggle('mudarAltura')
})



const faqs = document.querySelectorAll('.faq')

faqs.forEach((faq) => {   
    faq.addEventListener('click', ()=> {
        faq.classList.toggle('active');
    });
});