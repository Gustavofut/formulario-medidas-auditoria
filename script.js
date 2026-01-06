const URL_SCRIPT = "https://script.google.com/macros/s/AKfycbwIsQYdD_5cceJkuLAVVK1tUpsRd8Wwgg7RZCpbZxPFJYxCsBrQAL1YmHPfwZsMwfr3/exec";

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

 function salvar() {

  const params = new URLSearchParams();
  params.append("responsavel", document.getElementById("responsavel").value);
  params.append("nf", document.getElementById("nf").value);
  params.append("codigo", document.getElementById("codigo").value);
  params.append("tamanho", document.getElementById("tamanho").value);
  params.append("altura", document.getElementById("altura").value);
  params.append("largura", document.getElementById("largura").value);

 function aposEnviar() {

  document.getElementById("f_responsavel").value =
    document.getElementById("responsavel").value;

  document.getElementById("f_nf").value =
    document.getElementById("nf").value;

  document.getElementById("f_codigo").value =
    document.getElementById("codigo").value;

  document.getElementById("f_tamanho").value =
    document.getElementById("tamanho").value;

  document.getElementById("f_altura").value =
    document.getElementById("altura").value;

  document.getElementById("f_largura").value =
    document.getElementById("largura").value;

  document.getElementById("mensagem").innerText =
    "Medição enviada com sucesso";

  // limpa só SKU
  document.getElementById("codigo").value = "";
  document.getElementById("tamanho").value = "";
  document.getElementById("altura").value = "";
  document.getElementById("largura").value = "";
  document.getElementById("codigo").focus();
}

  .then(res => res.text())
  .then(msg => {
    document.getElementById("mensagem").innerText = msg;

    // limpa só os campos do SKU
    document.getElementById("codigo").value = "";
    document.getElementById("tamanho").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("largura").value = "";
    document.getElementById("codigo").focus();
  })
  .catch(err => {
    alert("Erro ao enviar");
    console.error(err);
  });
}

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









