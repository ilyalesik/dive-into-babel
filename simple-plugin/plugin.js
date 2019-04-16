const { declare } = require("@babel/helper-plugin-utils");

module.exports = declare(api => {
    api.assertVersion(7);

    return {
        name: "simple-plugin",

        visitor: {
            BinaryExpression(path) {
                console.log("Visiting: " + path.node.operator);
            }
        }
    };
});