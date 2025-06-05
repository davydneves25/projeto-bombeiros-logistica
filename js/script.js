const capacidadeVeiculo = 50;

function calcularPeso() {
    const itensObrigatorios = document.querySelectorAll(
        ".peso-item-obrigatorio"
    );

    let pesoObrigatorio = 0;
    for (let i = 0; i < itensObrigatorios.length; i++) {
        pesoObrigatorio += parseFloat(itensObrigatorios[i].textContent);
    }

    document.getElementById("peso-obrigatorio").textContent = pesoObrigatorio;

    const itensOpcionais = document.querySelectorAll(".peso-item-opcional");

    let pesoOpcional = 0;
    for (let i = 0; i < itensOpcionais.length; i++) {
        const pesoSpan = itensOpcionais[i];

        const itemContainer = pesoSpan.closest(".d-flex");

        const checkbox = itemContainer.querySelector('input[type="checkbox"]');

        if (checkbox.checked) {
            pesoOpcional += parseFloat(pesoSpan.textContent);
        }
    }
    document.getElementById("peso-opcional").textContent = pesoOpcional;

    total = pesoObrigatorio + pesoOpcional;
    document.getElementById("peso-total").textContent = total;

    document.getElementById("capacidade-veiculo").textContent =
        capacidadeVeiculo;

    let excesso = total - capacidadeVeiculo;
    if (excesso > 0) {
        document.getElementById("alerta").classList.remove("d-none");
        document.getElementById("alerta").classList.add("d-flex");
        document.getElementById("excesso").textContent = excesso;

        document.getElementById("confirmar").disabled = true;
    } else {
        document.getElementById("alerta").classList.remove("d-flex");
        document.getElementById("alerta").classList.add("d-none");

        let folga = capacidadeVeiculo - total;
        document.getElementById("folga").textContent = folga;

        document.getElementById("confirmar").disabled = false;
    }

    porcentagem = (total / capacidadeVeiculo) * 100;
    if (porcentagem > 100) {
        porcentagem = 100;
    }

    document.getElementById("porcentagem-capacidade").style.width =
        porcentagem + "%";

    if (porcentagem > 75) {
        document
            .getElementById("porcentagem-capacidade")
            .classList.remove("bg-success");
        document
            .getElementById("porcentagem-capacidade")
            .classList.remove("bg-warning");

        document
            .getElementById("porcentagem-capacidade")
            .classList.add("bg-danger");
    } else if (porcentagem > 50) {
        document
            .getElementById("porcentagem-capacidade")
            .classList.remove("bg-success");
        document
            .getElementById("porcentagem-capacidade")
            .classList.remove("bg-danger");

        document
            .getElementById("porcentagem-capacidade")
            .classList.add("bg-warning");
    } else {
        document
            .getElementById("porcentagem-capacidade")
            .classList.remove("bg-danger");
        document
            .getElementById("porcentagem-capacidade")
            .classList.remove("bg-warning");

        document
            .getElementById("porcentagem-capacidade")
            .classList.add("bg-success");
    }
}

calcularPeso();
