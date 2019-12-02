// Inisialisasi express
const express = require('express');
const db = require('../db/db');
const bodyParser = require('body-parser');

// Setup express app
const app = express();

// Parse incoming req data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

let name = 'coba';
app.get('/api/hello', (req, res) => {
    res.status(200).send({
        success: true,
        message: `Hello ${name}`
    })
})

app.get('/api/todos', (req, res) => {
    res.status(200).send({
        success: true,
        message: 'Todos has been loaded',
        //data: db // atau db (sesuai variabel)
        db,
    })
});

app.get('/ping', (req, res) => {
    res.send({ ping: 'pong' });
});

app.post('/api/todos', ({ body }, res) => {
    if (!body.title) {
        return res.status(400).send({
            success: false,
            message: 'Tolong isi title.',
        });
    } else if (!body.description) {
        return res.status(400).send({
            success: false,
            message: 'Tolong isi description'
        })
    }
    const todo = {
        id: db[db.length - 1].id + 1,
        title: body.title,
        description: body.description
    }
    db.push(todo);
    return res.status(201).send({
        success: true,
        message: "todos updated",
        data: todo,
    });
});

app.get('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const currentTodo = db.find(todo => todo.id === id);
    if (currentTodo) {
        return res.status(200).send({
            success: true,
            message: 'Todo successfully loaded!',
            data: currentTodo
        })
    }

    // db.map((todo) => {
    //     if (todo.id === id) {
    //         return res.status(200).send({
    //             success: true,
    //             message: 'Todo successfully loaded!',
    //             data: todo
    //         })
    //     }
    // })


    return res.status(404).send({
        success: false,
        message: 'Todo not found.'
    })
})

app.delete('/api/todos/:id', (req, res) => {
    const currentId = parseInt(req.params.id);
    const currentIndex = db.findIndex(({ id }) => id === currentId);
    if (currentIndex >= 0) {
        db.splice(currentIndex, 1);
        res.send(db);
    } else {
        res.sendStatus(404);
    }
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(
        `Server running on port ${PORT}`
    );
});