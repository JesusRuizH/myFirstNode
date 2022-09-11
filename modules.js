//console.log(__filename);
/*
setInterval(() =>{
    console.log("Hello");
}, 100)*/

const names = require('./names');
const sayHi = require('./module');
const newRequire = require('./alternativeRequire');

require('./mind-granade');

//console.log(newRequire);

//sayHi(newRequire.singlePerson.name)
//sayHi(names.john)
//sayHi(names.peter)

//console.log(names);