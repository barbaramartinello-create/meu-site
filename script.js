const botao = document.getElementById("btnMensagem");

botao.addEventListener("click", () => {
    alert(
        "Obrigado por visitar a TechVision 🚀"
    );
});

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    alert(
        "Mensagem enviada com sucesso!"
    );

    formulario.reset();

});
