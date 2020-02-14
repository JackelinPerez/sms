const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: '03807540',
  apiSecret: 'qBUAM2wYTlUoJSYe',
});

const from = 'Nexmo';
const to = '51922863121';
const text = 'Hello from Nexmo';

nexmo.message.sendSms(from, to, text);