const massive = require('massive');
const chalk = require('chalk');

// variables from the process environment
const {
    CONNECTION_STRING
} = process.env;

// export the function to connect to the database
exports.connect = app => {
    // connect to the database and receive and instance
    massive(CONNECTION_STRING)
        .then(dbInstance => {
            // set the instance onto the app
            app.set('db', dbInstance);
            // log that that was a successful connection
            console.log(chalk.cyan('Database Connection: Success!'))
        })
        .catch(error => {
            // catch the error if there is a failure
            if (error) throw error;
        });
};