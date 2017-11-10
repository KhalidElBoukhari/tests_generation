var annotations = require('annotations');
var yaml = require("js-yaml");
var fs = require("fs");

var result = annotations.getSync(process.argv[2]);
fs.writeFileSync(process.argv[3], yaml.dump(result));

