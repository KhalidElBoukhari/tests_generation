var fs = require("fs");
var yaml = require("js-yaml");

/*var object = new Object([{"name": "test",
                        "type": "void"}]);*/
var object = new Object([{"name": "test",
                        "type": "String"}, {"name": "test2",
                        "type": "void"}]);

fs.writeFile("YamlFile.yml", yaml.dump(object), function(err){
    if(err) throw err;
    console.log("Created");
});
/*fs.appendFile("YamlFile.yml", yaml.dump(object2), function(err){
    if(err) throw err;
    console.log("Created");
});*/
/*
fs.appendFile("newFile.txt", "\nappended to the file", function(err){
    if(err) throw err; 
    console.log("Saved");
})

fs.readFile("newFile.txt", "utf8", function(err, data){
    if(err) throw err;
    console.log("file read");
    console.log("-"+data[20]+"-");
    console.log(data[20] === '\n');
});

try {
    const config = yaml.safeLoad(fs.readFileSync('test2.yml', 'utf8'));
    console.log(typeof(config));   
    const indentedJson = JSON.stringify(config, null, 4);
    console.log(indentedJson);
} catch (e) {   
    console.log(e);
}*/
/*var object = new Object({"name": "test",
                        "type": "void"}); 
console.log(yaml.dump(object, {
  flowLevel: 3,
  styles: {
    '!!int'  : 'hexadecimal',
    '!!null' : 'camelcase'
  }
}));*/


//yaml.safeDump(fs.readFileSync('test1.yml', 'utf8'), )