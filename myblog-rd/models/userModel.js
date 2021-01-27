const db = require('../models/db');

module.exports = {
    getByNameAndPwd(username, password){
        return db.query('select * from t_user where username=? and password=?', [username, password]);
    },   
    saveUser(username, password, nickname){
        return db.query('insert into t_user set ?', {
            username, 
          password, 
          nickname,
        });
    },
}