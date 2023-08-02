const { ObjectId } = require('mongodb');
const connect = require('./connectionMongo');

const getAll = async () => {
    connection = await connect();
    
    const r = await connection.collection('tasks').find().toArray();

    return r;
};

const createTask = async (task) => {
    const { title } = task;

    const dateUTC = new Date(Date.now()).toUTCString();

    const myTask = {
        title: title,
        status: "pending",
        created_at: dateUTC
    }

    connection = await connect();

    return connection.collection('tasks').insertOne(myTask);;
}

const deleteTask = async (id) => {
    const connection = await connect();

    return connection.collection('tasks').deleteOne({ _id: new ObjectId(id) });}

const updateTask = async (id, task) => {
    const { title, status } = task;

    const connection = await connect();

    return connection.collection('tasks').updateOne( { _id: new ObjectId(id) }, { $set: {title: title, status: status}});
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};