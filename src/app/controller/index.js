const fs = require('fs')
const path = require('path')

/*
    fs allows working with the node's file system
    path works with folder / directory paths
    .readdirSysnc he reads a directory __dirname is this directory I'm working on
    .filter is used to ignore files that start with. and the index.js file, which in this case is this
    .forEach to require each file and pass the app to each one
    and with that each new controller created is automatically added to the project
*/
module.exports = app => {
    fs
        .readdirSync(__dirname)
        .filter(file => ((file.indexOf('.')) !== 0 && (file !== "index.js")))
        .forEach(file => require(path.resolve(__dirname, file))(app))
}