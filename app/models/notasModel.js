const getNotas = (connection, callback) => {
  let sql = 'select * from estudantes';
  let results = connection().query(sql, callback);

  return results;
};

const getNotaId = (id, connection, callback) => {
  let sql = `select * from estudantes where id = ${id}`;
  let results = connection().query(sql, callback);

  return results;
};

module.exports = getNotas;
module.exports = getNotaId;
