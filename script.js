function verificarInputs() {
    let nome = document.querySelector("#nome").value;
    let email = document.querySelector("#email").value;
    let idade = document.querySelector("#idade").value;
    let Cargo = document.querySelector("#Cargo").value;
    let opcoesRadio = document.querySelectorAll("input[type=radio]").value;
    let areaDeInteresse = document.querySelector("#Area-de-interesse").value;
    let opcoesCheckBox = document.querySelectorAll("input[type=checkbox]").value;
    let textarea = document.querySelector("#outros").value;
}

if (nome == " " || email == " " || idade == " " || Cargo == " " || opcoesRadio == " " || areaDeInteresse == " " || opcoesCheckBox == " " || textarea == " ") {
    alert("Preencha todos os campos!");
} else {
    formularioEnviado();

}