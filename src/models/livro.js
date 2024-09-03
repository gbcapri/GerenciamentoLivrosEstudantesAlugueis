/*
Livro
id (número único)
título (string)
autor (string)
ano (número)
gênero (string)
*/

let nextId = 1;

const model = (body, id = nextId++) => {
  if (
    body.titulo != undefined &&
    body.titulo != "" &&
    body.autor != undefined &&
    body.autor != "" &&
    body.genero != undefined &&
    body.genero != "" &&
    !isNaN(Number(body.ano))
  ) {
    return {
      id,
      titulo: body.titulo,
      autor: body.autor,
      genero: body.genero,
      ano: body.ano,
    };
  }
};

module.exports = model;
