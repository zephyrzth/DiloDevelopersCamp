const {MongoClient, ObjectID} = require('mongodb');
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';
MongoClient.connect(connectionURL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error, client) => {
        if (error) {
            return console.log('unable to connect');
        }
        const db = client.db(databaseName);
        // Mulai bermain2 dengan database
        // db.collection('users').insertOne({
        //     name: 'Lukman',
        //     age: 24,
        //     status: 'single'
        // }, (error, result) => {
        //     if (error) {
        //         return console.log('Terjadi kesalahan');
        //     }
        //     console.log(result.ops);
        //     console.log(result.insertedCount);
        //     console.log(result.insertedId);
        // });
        // db.collection('users').insertMany([
        //     {
        //         name: 'Joni',
        //         age: 27,
        //         status: 'single'
        //     },
        //     {
        //         name: 'Jono',
        //         age: 34,
        //         status: 'married'
        //     }
        // ], (error, result) => {
        //     if (error) {
        //         return console.log('Terjadi kesalahan');
        //     }
        //     console.log(result.ops);
        //     console.log(result.insertedCount);
        //     console.log(result.insertedId);
        // })
        db.collection('users').findOne(
            {_id: new ObjectID("5de5128257a02a52084baf74")},
            (error, task) => {
                console.log(task);
            }
        )
    }
);