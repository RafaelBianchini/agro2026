// ====== Botão Voltar ao Topo ======

// 1. Pegar o botão pelo ID
const btnVoltarAoTopo = document.getElementById("btnVoltarAoTopo");

// 2. Adicionar um "ouvinte" de evento de rolagem na janela (window)
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btnVoltarAoTopo.style.display = "flex"; // Usa flex para centralizar o SVG
    } else {
        btnVoltarAoTopo.style.display = "none";
    }
};

// 3. Adicionar um "ouvinte" de evento de clique no botão
btnVoltarAoTopo.addEventListener("click", function(e) {
    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ====== Fim Botão Voltar ao Topo ======


// ====== Alternador de Tema ======

// 1. Pegar o botão alternador de tema pelo ID
const btnAlternarTema = document.getElementById("btnAlternarTema");

// 2. Função para aplicar o tema e atualizar o ícone
function aplicarTema(tema) {
    if (tema === "dark") {
        document.body.classList.add("dark-mode");
        // Ícone do sol para o modo escuro
        btnAlternarTema.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16">
                <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M3.05 4.343a.5.5 0 0 1 .707 0L4.464 5.757a.5.5 0 0 1-.707.707L3.05 4.343a.5.5 0 0 1 0-.707"/>
            </svg>
        `;
        localStorage.setItem("tema", "dark");
    } else {
        document.body.classList.remove("dark-mode");
        // Ícone da lua para o modo claro
        btnAlternarTema.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16">
                <path d="M9.53 10.038a7.02 7.02 0 0 1 .411-1.075 7.02 7.02 0 0 1 .288-.621 7.02 7.02 0 0 1 .23-1.127A7.02 7.02 0 0 1 10.966 6H13a.5.5 0 0 0 0-1h-.083a7.02 7.02 0 0 1-.58-2.617 7.02 7.02 0 0 1-.226-1.077 7.02 7.02 0 0 1-.286-.622 7.02 7.02 0 0 1-.41-.892c-.179-.344-.457-.754-.803-1.018a.75.75 0 0 0-.001-.002a.5.5 0 0 0-.256-.47a.5.5 0 0 0-.546.108A7.014 7.014 0 0 0 7.9 0.05a7.043 7.043 0 0 0-.74.062a7.07 7.07 0 0 0-.616.142A7.065 7.065 0 0 0 5.437.452a7.042 7.042 0 0 0-.965.733.5.5 0 0 0-.001.001a.75.75 0 0 0-.803 1.018c-.346.264-.624.674-.803 1.018a7.02 7.02 0 0 1-.41.892 7.02 7.02 0 0 1-.286.622 7.02 7.02 0 0 1-.23 1.127 7.02 7.02 0 0 1-.288 1.075 7.02 7.02 0 0 1-.411 1.075 7.02 7.02 0 0 1-.23 1.127 7.02 7.02 0 0 1-.288.621 7.02 7.02 0 0 1-.411.892a.5.5 0 0 0-.256.47a.5.5 0 0 0 .546.108 7.014 7.014 0 0 0 2.215-1.579a7.043 7.043 0 0 0 .74-.062a7.07 7.07 0 0 0 .616-.142A7.065 7.065 0 0 0 10.563 15.548a7.042 7.042 0 0 0 .965-.733.5.5 0 0 0 .001-.001a.75.75 0 0 0 .803-1.018c.346-.264.624-.674.803-1.018a7.02 7.02 0 0 1-.41-.892 7.02 7.02 0 0 1-.286-.622 7.02 7.02 0 0 1-.23-1.127 7.02 7.02 0 0 1-.288-1.075z"/>
            </svg>
        `;
        localStorage.setItem("tema", "light");
    }
}

// 3. Verificar a preferência de tema do usuário ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    const temaSalvo = localStorage.getItem("tema"); // Pega o tema salvo no localStorage
    // **Ajuste principal aqui:** Se o tema salvo for "dark", aplica-o. Caso contrário (se não houver salvo ou for "light"), inicia SEMPRE com "light".
    if (temaSalvo === "dark") {
        aplicarTema("dark");
    } else {
        aplicarTema("light"); // Inicia sempre no modo claro, a menos que explicitamente salvo como dark
    }
});

// 4. Adicionar um "ouvinte" de evento de clique no botão de alternar tema
btnAlternarTema.addEventListener("click", function() {
    if (document.body.classList.contains("dark-mode")) {
        aplicarTema("light");
    } else {
        aplicarTema("dark");
    }
});

// ====== Fim Alternador de Tema ======