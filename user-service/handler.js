const dynamoResolver = require("dynamo-resolver");
const snsResolver = require("sns-resolver");
module.exports = {
   getUser: async (event) => {
    console.log("Received call in Users");
    const record = await dynamoResolver.getRecord('users', '1');
    const userRecord = record.body;
    await snsResolver.publish(userRecord);
    return {
      statusCode: 200,
      body: JSON.stringify(
        record.body,
        null,
        2
      )
    };
   },
   sendUserInfo: async (event) => {
    console.log('inside sendUserInfo');
    const message = event.Records[0].Sns.Message;
    console.log('From SNS:', message);
    return {
      statusCode: 200,
    };
   }
};