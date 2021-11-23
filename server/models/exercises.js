const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('Exercises');
module.exports.collection = collection;

module.exports.GetAll = function GetAll() { return collection.find().toArray(); }

module.exports.Add = async function Add(Exercise) {
    const response = await collection.insertOne(Exercise);
    Exercise.id = response.insertedId;

    return { ...Exercise };
}