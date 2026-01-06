const URL_SCRIPT = "https://script.google.com/macros/s/AKfycbxKdBzhphE8AekdIS-Mmfz7VI67SZOrjgGOEaQgHOO511LSuAvoYIOEh5Gzedhi3mA2/exec";

function salvar() {
  const dados = {
    responsavel: document.getElementById("responsavel").value,
    nf: document.getElementById("nf").value,
    codigo: document.getElementById("codigo").value,
    tamanho: document.getElementById("tamanho").value,
    altura: document.getElementById("altura").value,
    largura: document.getElementById("largura").value
  };

  if (!dados.codigo || !dados.tamanho) {
    alert("Preencha Código e Tamanho");
    return;
  }

  fetch(URL_SCRIPT, {
    method: "POST",
    body: JSON.stringify(dados)
  })
  .then(res => res.text())
  .then(msg => {
    document.getElementById("mensagem").innerText = msg;

    // LIMPA SOMENTE SKU
    document.getElementById("codigo").value = "";
    document.getElementById("tamanho").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("largura").value = "";
    document.getElementById("codigo").focus();
  });
}


