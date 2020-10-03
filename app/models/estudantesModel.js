module.exports = {
  getNotas: function (connection, callback) {
    let sql = 'select * from estudantes';
    let results = connection().query(sql, callback);

    return results;
  },

  getNotasId: function (id, connection, callback) {
    let sql = `select * from estudantes where id = ${id}`;
    let results = connection().query(sql, callback);

    return results;
  },

  saveEstudante: function (estudante, connection, callback) {
    let results = connection().query('insert into estudantes set ?', estudante, callback);
    return results;
  },
};
