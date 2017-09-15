const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyparser.json());
app.use(cors());

let id = 1;

const data = {
    list: [
        {
            id: id++,            
            text: "one",
            status: "pending"
        },
        {
            id: id++,     
            text: "two",
            status: "pending"
        },
        {
            id: id++,     
            text: "three",
            status: "pending"
        }
    ]
};

app.post('/tasks', function (req, res) {
    let result = {};
    let status = 200;
    if(data.list.filter(function(x) { return x.text === req.body.text }).length === 0) {
        const obj = {
            id: id++,
            text: req.body.text,
            status: 'pending'
        };
        data.list.push(obj);
        result = obj;
    } else {
        result.error = 'item already in list';
        status = 409;
    }        
    res.status(status).send(JSON.stringify(result));
});

app.get('/tasks', function (req, res) {
  res.send(JSON.stringify(data));
})

app.put('/tasks/:id', function (req, res) {
    let result = {};
    let status = 200;
    if(req.body.status) {
        const obj = data.list.filter(function(item, i) { 
            if(item.id == req.params.id) {
                item.status = req.body.status;
                data.list[i] = item;
                return true;
            }
            return false;
        });
        if(obj && obj.length) {
            result = obj[0];
        } else {
            result.message = 'no task exist for id'
        }
    } else {
        result.error = 'missing request body';
        status = 400;
    }    
    res.status(status).send(JSON.stringify(result));
});

app.delete('/tasks/:id', function (req, res) {
    let result = {};
    let status = 200;
    let deleted;
    data.list.filter(function(item, i) { 
        if(item.id == req.params.id) {
            data.list.splice(i, 1);
            deleted = true;
        }
        return false;
    });
    if(deleted) {
        result.message = 'task deleted';
    } else {
        result.message = 'no task exist for id';
        status = 404;
    }
    res.status(status).send(JSON.stringify(result));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})