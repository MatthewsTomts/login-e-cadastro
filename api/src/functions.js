function obterDataFormatada() {
    var dataAtual = new Date();
    var dia = String(dataAtual.getDate()).padStart(2, '0'); // Garante que o dia tenha sempre dois dígitos
    var mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Garante que o mês tenha sempre dois dígitos
    var ano = dataAtual.getFullYear();
  
    return ano + '/' + mes + '/' + dia;
  }


module.exports = {
    obterDataFormatada
};