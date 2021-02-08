const AWS = require('aws-sdk');
const dynamoDBClient = new AWS.DynamoDB.DocumentClient();

module.exports = {
  async getRecord(table, id){
    console.log('inside dynamo-resolver');
    const params = {
      TableName: table,
      Key: {
        id
      }
    }
    try {
      const data = await dynamoDBClient.get(params).promise();
      return {
        statusCode: 200,
        body: data.Item
      };
    } catch (error) {
      console.error('Error in the getRecord call of dynamo resolver', error);
      return {
        statusCode: 500,
        body: JSON.stringify(
          {
            message: 'Error in the resolver'
          },
          null,
          2
        )
      };
    }
  }
}