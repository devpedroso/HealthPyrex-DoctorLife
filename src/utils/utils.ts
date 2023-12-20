export const getFormatDateDescriptionMonth = (date) => {
  let dataString = date;
  let data = new Date(dataString);

  let dia = ("0" + data.getDate()).slice(-2);
  let mesNumero = data.getMonth(); // Mês como número (0 a 11)
  let ano = data.getFullYear();

  // Array de nomes dos meses
  let meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  let mesNome = meses[mesNumero];

  let dataFormatada = dia + " " + mesNome + " de " + ano;

  return dataFormatada;
};

export const getFormatDate = (date) => {
  let dataString = date;
  let data = new Date(dataString);

  let dia = ("0" + data.getDate()).slice(-2);
  let mes = ("0" + (data.getMonth() + 1)).slice(-2);
  let ano = data.getFullYear();

  let dataFormatada = dia + "/" + mes + "/" + ano;

  return dataFormatada;
};

export const getHoursDate = (date) => {
  let dataString = date;
  let data = new Date(dataString);

  let horas = ("0" + data.getHours()).slice(-2);
  let minutos = ("0" + data.getMinutes()).slice(-2);
  let segundos = ("0" + data.getSeconds()).slice(-2);

  let horasFormatadas = horas + ":" + minutos + ":" + segundos;

  return horasFormatadas;
};
