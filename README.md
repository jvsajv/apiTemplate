# apiTemplate
🌐💻  This is an API model made in javaScript and using a postgreSql database

## Whats is it for
This is a basic API template in nodejs, using postgresql as a database, it is very useful to start developing an api with this structure. It avoids the initial configuration whenever it is necessary to start a new project.

## How to use
Just download the repository, add the files to your root folder, and install the node's dependencies:

```
  npm install
  # if you like to use nodemon, run this command too
  npm install --only-dev
```

Now you need to create a file ```.env``` and insert into

```env
  PORT="port that will run you api"
```

If you don't wanna use nodemon, edit package.json, change this row:

```json
  "start": "nodemon src/index.js"
```
to this row:

```json
  "start": "node src/index.js"
```

Finally, run:

```
  npm start
```

## Notes
* Remember to delete this readme, and add the readme for your project

* I added the main dependencies for the API, but feel free to add any dependencies, just use npm install "name_dependency"

* if you have any doubt or need some help, just make contact...

## Author
[chicofariasneto](https://github.com/chicofariasneto)
