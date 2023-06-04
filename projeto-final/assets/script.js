function addCards(){
  var biografias = {
    bio01: {

        nome: "Programaria",

        imagem: "./assets/img/programaria.jpg",
  
        descricao:
  
            "Cursos de Introdução a Programação para mulheres de FrontEnd#1, FrontEnd#2 e BackEnd com bolsa de estudo integral.",
  
          saibaMais:

           "Acesse: programaria.org",
  },

  bio02: {

    
    nome: "Reprograma",

    imagem: "./assets/img/reprograma.jpg",

    descricao:

        "Cursos gratuitos de capacitação profissional em programação front-end e back-end.",

      saibaMais:

        "Acesse: reprograma.com.br",
  },

  bio03: {

    nome: "Womakers",

    imagem: "./assets/img/womakers.jpg",

    descricao:

        "Treinamentos para mulheres na tecnologia, com cursos sobre Computação em Nuvem, Segurança, DevOps, Programação, Ciência de Dados e outros.",

      saibaMais:

        "Acesse: womakerscode.org",
  },

};

var content = document.getElementById ("cards-content");

    for (var bio in biografias) {
      content.innerHTML +=
        '<div class="cards">' +
        '<img class="imagem" src="' +
        biografias[bio].imagem +
        '"/>' +
        "<details>" +
        '<summary class="nome">' +
        biografias[bio].nome +
        "</summary>" +
        '<p class="descricao">' +
        biografias[bio].descricao +
        "</p>" +
        '<p class="saibaMais"><a>'+
        biografias[bio].saibaMais +
        "</a></p>" +
        "</details>" +
        "</div>";
    }
}

addCards();