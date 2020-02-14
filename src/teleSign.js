var TeleSignSDK = require('telesignsdk');

const customerId = "F91BD280-C624-464C-A368-51F89ED455BB";
const apiKey = "q/Ctr2LjLqpyPYwSCeFNNFg8ls6xvKTfuOgqyvVWs1se4RsL6e/gkzviM4rhUfLyEoYZ+6ULzH4Fo8M3cK0kUw==";
const rest_endpoint = "https://rest-api.telesign.com";
const timeout = 10*1000; // 10 secs

const client = new TeleSignSDK( customerId,
    apiKey,
    rest_endpoint,
    timeout // optional
    // userAgent
);

const phoneNumber = "51922863121";
const message = "You're scheduled for a dentist appointment at 2:30PM.";
const messageType = "MKT";

console.log("## MessagingClient.message ##");

function messageCallback(error, responseBody) {
    if (error === null) {
        console.log(`Messaging response for messaging phone number: ${phoneNumber}` +
            ` => code: ${responseBody['status']['code']}` +
            `, description: ${responseBody['status']['description']}`);
    } else {
        console.error("Unable to send message. " + error);
    }
}
client.sms.message(messageCallback, phoneNumber, message, messageType);
