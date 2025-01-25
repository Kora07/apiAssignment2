const express = require('express');
const app = express();

require('dotenv').config();
const isAdmin = process.env.IS_ADMIN;
console.log(isAdmin)

app.get('/', (request, response) => {
    if (isAdmin === 'true') {
        response.send("Admin permissions granted");
    } else {
        response.send("Admin permissions denied");
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000.")
});
