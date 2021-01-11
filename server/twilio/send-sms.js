const accountSid = 'AC6a68e028f129956f150f8d18ccda84f4';
const authToken = '66fdedde52b0839edde261ac41e1d901';

// add one more param of name for the project
const sendSms = (phone, message, sender) => {
    const client = require('twilio')(accountSid, authToken); 
    // Make a template for the message
    client.messages
    .create({
        body: message,
        // for project, replace sender with '+14242971525' from env file
        from: sender,
        to: phone
    })
    .then(message => console.log(message.sid)); 
    }
    module.exports = sendSms;

// make a function that will format all info into message