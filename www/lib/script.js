// cadastro pessoa e curso
$(document).on("click", "#cadastrar", function(){
  let parametros = {
    "nome":$("#nome").val(),
    "curso":$("#curso").val()
  };
  $.ajax({
    type: "post",
    url: "https://www.jussimarleal.com.br/exemplo_api/pessoa",
    data: parametros,
    success: function(data) {
      alert(data);
      $("#nome").val(""),
      $("#curso").val("")
    },
    error: function() {
      alert:("Erro ao cadastrar!");
    }
  });
});

//buscar cadastro
$(document).on("click", "#buscar", function(){
  $.ajax({
    type: "get",
    dataType: "json",
    url: "https://www.jussimarleal.com.br/exemplo_api/pessoa/"+$("#id").val(),
    success: function(data) {
      $("#nome").val(data.nome),
      $("#curso").val(data.curso)
    },
    error: function() {
      alert:("Erro ao buscar!");
    }
  });
});

// alterar pessoa e curso
$(document).on("click", "#alterar", function(){
  let parametros = {
    "nome":$("#nome").val(),
    "curso":$("#curso").val()
  };
  $.ajax({
    type: "put",
    url: "https://www.jussimarleal.com.br/exemplo_api/pessoa/"+$("#id").val(),
    data: parametros,
    success: function(data) {
      alert(data);
      $("#nome").val(""),
      $("#curso").val("")
    },
    error: function() {
      alert:("Erro ao alterar!");
    }
  });
});

// deletar pessoa e curso
$(document).on("click", "#deletar", function(){
  $.ajax({
    type: "delete",
    url: "https://www.jussimarleal.com.br/exemplo_api/pessoa/"+$("#id").val(),
    success: function(data) {
      alert(data);
      $("#nome").val(""),
      $("#curso").val("")
    },
    error: function() {
      alert:("Erro ao deletar!");
    }
  });
});