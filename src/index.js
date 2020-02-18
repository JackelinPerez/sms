// const express = require('express');
// const device = require('express-device');
// const app = express();

// app.use(device.capture())
// app.get('/', (req, res)=>{
//     res.send('katapulta '+req.device.type);
// })
// app.listen(3001,()=>{
//     console.log('Server on port 3001');
// })

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set region
AWS.config.update({
    accessKeyId: 'AKIAQOXZO5CZF4DIV25P',
    secretAccessKey:'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',
    region: 'us-east-1'

});

// Create publish parameters
var params = {
  Message: 'hello jakie sms', /* required */
  PhoneNumber: '+51922863121',
  MessageAttributes: {
    'AWS.SNS.SMS.SenderID': {
        'DataType': 'String',
        'StringValue': 'lala'
        }
    }
};

// Create promise and SNS service object
var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();

// Handle promise's fulfilled/rejected states
publishTextPromise.then(
  function(data) {
    console.log(`Message ${params.Message} send sent to the topic ${params.TopicArn}`);
    console.log("MessageID is " + data.MessageId);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });