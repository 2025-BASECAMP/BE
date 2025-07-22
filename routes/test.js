const db = require("../config/db");

var express = require('express');
var router = express.Router();

/* 테스트용 */
router.get('/', (req, res) => {
    res.send('테스트');
});

router.get('/db', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM users ORDER BY uid');
        res.json(result.rows);
    } catch (error) {
        console.error('DB 쿼리 오류:', error);
        res.status(500).send('DB 쿼리 중 오류 발생');
    }
});

module.exports = router;