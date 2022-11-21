#! /usr/bin/env node
//allow us to run our code globally as well as from the command line later.

const fs = require('fs')

fs.readFile(__dirname + '/info.json', 'utf8', function(err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
        return data
    }
})
