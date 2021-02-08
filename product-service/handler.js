const dynamoResolver = require("dynamo-resolver");
module.exports.hello = async event => {
  console.log("Received call in Products");
  const record = await dynamoResolver.getRecord('products', '3');
  return {
    statusCode: 200,
    body: JSON.stringify(
      record.body,
      null,
      2
    )
  };
};