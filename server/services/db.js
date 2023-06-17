let mysql = require('mysql');

//create a connection to the MySQL database
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '106Hamm0nd!',
    database: 'book_reviews_blog_db'
});

//connect to the MySQL database server
connection.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
});


module.exports = connection;