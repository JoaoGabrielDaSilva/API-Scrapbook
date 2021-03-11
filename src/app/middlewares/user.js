function validateData(request, response, next) {
  const { name, email } = request.body;

  if (!name || !email) {
    return response.status(400).json({
      message: 'invalid data',
    });
  }

  next();
}

function validateId(request, response, next) {
  const { uid } = request.params;
  const parsed = Number.parseInt(uid);

  if (Number.isNaN(parsed)) {
    return response.status(400).json({
      message: 'invalid ID',
    });
  }

  request.userId = parsed;

  next();
}

async function validateUserExists(request, response, next) {
  const user = await User.findByPk(request.userId);

  if (!user) {
    return response.status(404).json({
      message: 'user not found',
    });
  }

  request.user = user;

  next();
}

export { validateData, validateId, validateUserExists };
