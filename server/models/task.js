const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('Task');
module.exports.collection = collection;

module.exports.GetAll = function GetAll() { return collection.find().toArray(); }

module.exports.Add = async function Add(Task) {
    const response = await collection.insertOne(Task);
    Task.id = response.insertedId;

    return { ...Task };
}