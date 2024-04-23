import express from 'express'

const app = express();
const port = 3000;

const userData = [
    {
        "id": 1,
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "username": "johndoe",
        "isActive": true,
        "address": {
            "street": "123 Main St",
            "city": "Anytown",
            "state": "CA",
            "zip": "12345"
        },
        "phone": "+1 (555) 555-5555"
    },
    {
        "id": 2,
        "firstName": "Jane",
        "lastName": "Smith",
        "email": "jane.smith@example.com",
        "username": "janesmith",
        "isActive": false,
        "address": {
            "street": "456 Elm St",
            "city": "Springfield",
            "state": "NY",
            "zip": "54321"
        },
        "phone": "+1 (888) 888-8888"
    }
]

app.get('/', (req, res) => {
    res.send(userData);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
