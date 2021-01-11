const express = require('express');
const router = express.Router();
// const pool = require('../modules/pool.js');
const sendSms = require('../twilio/send-sms')

// 
router.get('/', (req, res) => {
    // Send back user object from the session (previously queried from the database)
    let to = '+16125592973'

    let body = 'Test Message Success!'
  
    const from = '+14242971525';
  
    sendSms(to, body, from );
    res.send('Success');
  });

// router.post('/', rejectUnauthorized, (req,res) => {
//   let appointment = req.body; // date, time, barber name
//   // This is a separate GET on client side
//   // To get barber name, drop down list will do a GET req from db
//   // on componentDidMount using `SELECT * FROM user WHERE is_barber = true
//   // ORDER BY first_name`
//   const from = '+14242971525';
//   let user = req.user_id; // person's info when confirm is clicked
//   // to get barber name, join
//   const sqlText = `SELECT first_name phone_number FROM user WHERE id = $1;`
//   Pool.query(sqlText, [user])
//   .then(result => {
//     console.log(result.rows)
//     // adjust array position once i get information from db
//     sendSms(result.rows[0],appointment, result.rows[1])
//   })
// })

module.exports = router;

