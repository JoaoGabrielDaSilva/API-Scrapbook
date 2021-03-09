export default (request, response, next) => {
  const body = request.body;
  const erros = [];
  for (let value in body) {
    if (!body[value]) {
      erros.push(value);
    }
  }

  if (erros.length > 0) {
    return response.json({
      erro: `erro de preenchimento nos seguintes campos: ${erros}`,
    });
  }

  next();
};
