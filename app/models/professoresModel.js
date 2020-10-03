module.exports = {
    getProfessores: function (connection, callback) {
      let sql = 'select * from professores';
      let results = connection().query(sql, callback);
  
      return results;
    },
    saveProfessor: function (professor, connection, callback) {
      let results = connection().query('insert into professores set ?', professor, callback);
      return results;
    },
    deleteProfessor: function (id, connection, callback) {
      let sql = `delete from professor where id = ${id}`;
      let results = connection().query(sql, callback);
  
      return results;
    },
  };
  