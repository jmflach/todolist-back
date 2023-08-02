
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

let singleton;

async function connect () {
    if (singleton) return singleton;
    
    const client = new MongoClient(process.env.MONGO_HOST);

    await client.connect();

    singleton = client.db(process.env.MONGO_DB);

    return singleton;
}

connection = connect();

module.exports = connect;