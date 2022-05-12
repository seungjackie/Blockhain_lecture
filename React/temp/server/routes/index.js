const express = require('express');
const router = express.Router();
const { sequelize, User } = require('../models');


// force : false => 초기화 할것인지 ? ,, true => 데이터 초기화
sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });


router.get('/test', async (req, res) => {
    try {
    let _user = await User.findAll();
    console.log(_user);
    res.send({ user : _user});
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post('/add', (req, res) => {
    const _user = User.create({
        nick: 'aa',
        password: 'sasdsaf'
    });
    try {
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post('/test2', (req,res) => {
    const sql = 'INSERT INTO users(name, age, married, comment)';
    const params = [req.query.name, req.query.age, req.query.married, req.query.comment]
    db.query('INSERT INTO users(name, age, married, comment)', (err, data) => {
        if(!err) res.send({ products : data});
        else res.send(err);
    })
})

router.get('/BoardDelete', (req,res) => {
    const sql = 'DELETE FROM `users` WHERE `id` = ?';
    const params = req.query.id
    db.query(sql, params, (err, data) => {
        console.log(data);
        if(!err) {
            res.send(data)
        } else {
            res.send(err)
        }
    })
})

router.post('/BoardUpdate', (req, res) => {
    const sql = 'UPDATE `table1` SET `title` = ?, `content` = ?, `writer` = ?, `write_date` = ? WHERE `idx` = ?';
    const params = [req.query.title, req.query.content, req.query.writer, req.query.write_date, req.query.idx]
    console.log(`= = =>req ${util.inspect(req.query)}`)
    db.query(sql, params, (err, data) => {
        if(!err) {
            res.send(data)
        } else {
            res.send(err)
        }
    })
})
 
router.get('/users', (req,res) => {
	// sql query 문
    const sql = 'SELECT id, name, age, married, comment, created_at FROM `users` WHERE `id` = ?';
    // 전달받은 parameter 값
    const params = req.query.id
    db.query(sql, params, (err, data) => {
        if(!err) {
            res.send(data)
        } else {
            res.send(err)
        }
    })
})

module.exports = router;