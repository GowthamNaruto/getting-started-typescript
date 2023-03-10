"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
// Basic API fetch from Jsonplaceholder
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    var ID = todo.id;
    var title = todo.title;
    var finished = todo.completed;
    console.log("\n    The Todo with ID : ".concat(ID, "\n    Has a title of   : ").concat(title, "\n    Is it finished?  : ").concat(finished, "\n  "));
    console.log(response.data);
});
