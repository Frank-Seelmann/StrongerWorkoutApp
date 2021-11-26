const Users = require("./users");
const { client } = require('./mongo');

const addOwnerPipeline = [
    {
        "$lookup": {
            from: "users",
            localField: 'user_handle',
            foreignField: 'handle',
            as: 'user',
        }
    },
    { $unwind: "$user" },
    { $project: { "owner.password": 0 } }
];

const collection = client.db(process.env.MONGO_DB).collection('Task');
module.exports.collection = collection;

module.exports.GetAll = function GetAll() { return collection.find().toArray(); }

module.exports.GetFeed = async function (handle) {
    //  The "MongoDB" way to do things. (Should test with a large `following` array)
    const user = await Users.collection.findOne({ handle });
    if (!user) {
        throw { code: 404, msg: 'No such user' };
    }
    const targets = user.following.filter(x => x.isApproved).map(x => x.handle).concat(handle)
    const query = collection.aggregate([
        { $match: { user_handle: { $in: targets } } },
    ].concat(addOwnerPipeline));
    return query.toArray();
}

module.exports.Add = async function Add(Task) {
    const response = await collection.insertOne(Task);
    Task.id = response.insertedId;

    return { ...Task };
}