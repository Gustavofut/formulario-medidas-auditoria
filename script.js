const URL_SCRIPT = "1UJ8hSAotsDUqodT__LE4tU7vB-o3hVvhOI3loUFgOOQ";

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

