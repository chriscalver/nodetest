const accountSid = '';
const authToken = '';
const client = require('twilio')(accountSid, authToken);



client.messages
  .create({
     body: 'Fuck you3',
     from: '+12512701067',
     to: '+15197099549'
   })
   .then(message => console.log(message.status))
