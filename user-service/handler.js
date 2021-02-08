const dynamoResolver = require("dynamo-resolver");
module.exports.hello = async event => {
  console.log("Received call in Users");
  const record = await dynamoResolver.getRecord('users', '1');
  return {
    statusCode: 200,
    body: JSON.stringify(
      record.body,
      null,
      2
    )
  };
};