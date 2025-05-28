/*document guarda varios valores, representa nosso documento em html*/

 var elementosDuvida = document.querySelectorAll(".duvida")

 elementosDuvida.forEach(function(duvida){
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })
 })

