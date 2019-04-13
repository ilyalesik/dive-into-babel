const fs = require("fs");
const babelCore = require("@babel/core");

const pluginAtoB = require("./plugins/pluginAtoB");
const pluginAtoC = require("./plugins/pluginAtoC");

const inputFile = "./code.js";

fs.readFile(inputFile, "utf8", (err, code) => {
    if (err) throw err;

    function transform(message, plugins) {
        babelCore.transform(
            code,
            {
                plugins: plugins
            },
            function(err, result) {
                console.log(message, ": ", result.code);
            }
        );
    }

    transform("transform a to b", [pluginAtoB]);
    transform("transform a to c", [pluginAtoC]);

    transform("transform a to b, a to c", [pluginAtoB, pluginAtoC]);
    transform("transform a to c, a to b", [pluginAtoC, pluginAtoB]);
});
