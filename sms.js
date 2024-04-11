const accountSid = 'ACf76bded57f46773c000ffad822e56c99';
const authToken = 'bacbc31ad47193403298ca0dfa13e881';
const client = require('twilio')(accountSid, authToken);



client.messages
  .create({
     body: 'Fuck you3',
     from: '+12512701067',
     to: '+15197099549'
   })
   .then(message => console.log(message.status))
