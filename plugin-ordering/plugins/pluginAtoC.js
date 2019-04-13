const { declare } = require("@babel/helper-plugin-utils");

module.exports = declare(api => {
    api.assertVersion(7);

    return {
        name: "plugin2",

        visitor: {
            VariableDeclarator(path) {
                path.node.id.name = "c";
            }
        }
    };
});
