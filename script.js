// Pequena animação de entrada das seções

const secoes = document.querySelectorAll(".conteudo");

const observador = new IntersectionObserver(
    (entradas) => {
        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {
                entrada.target.classList.add("aparecer");
            }

        });
    },
    {
        threshold: 0.15
    }
);

secoes.forEach((secao) => {
    observador.observe(secao);
});