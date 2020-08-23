const getAll = Model => async (request, response) => {
  const results = await Model.findAll();
  response.status(200).json(results);
};

module.exports = { getAll };
