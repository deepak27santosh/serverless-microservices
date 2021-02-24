const AWS = require('aws-sdk');
const sns = new AWS.SNS();

module.exports = {
  async publish(messageObj){
    console.log('inside sns-resolver');
    const params = {
        Message: JSON.stringify(messageObj),
        TopicArn: 'arn:aws:sns:us-east-1:836509539324:snsdemo'
      };
      try {
          const data = await sns.publish(params).promise();
          console.log('data', data);
          return data;
      } catch (error) {
          console.error('Error in the publish call of sns resolver', error);
      }
  }
}