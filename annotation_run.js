var annotations = require('annotations');
var yaml = require("js-yaml");
var fs = require("fs");

annotations.get('test/data/testfile.js', function(err, result) {
  
});

// Synchronous version
//var result = annotations.getSync('test/data/annotations_functions.js');
//console.log(result);
/*for (var property in result) {
        if (result.hasOwnProperty(property)) {
            console.log(result[property]);
            console.log(property);
            
        }
}*/
//fs.writeFileSync("YamlFile.yml", yaml.dump(result));

try {
    const config = yaml.safeLoad(fs.readFileSync('YamlFile.yml', 'utf8'));
    //const indentedJson = JSON.stringify(config, null, 4);
    //console.log(config);
    for (var property in config) {
        console.log(property);//name of the function
        if (config.hasOwnProperty(property)) {
            for (var property2 in config[property]) {
            if (config[property].hasOwnProperty(property2)) {
                console.log(property2);            
                console.log(config[property][property2]);
            }
            //console.log(property);
            
        }
        console.log("End of function\n")
    }
}
} catch (e) {   
    console.log(e);
}