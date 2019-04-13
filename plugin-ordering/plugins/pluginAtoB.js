const { declare } = require("@babel/helper-plugin-utils");

module.exports = declare(api => {
    api.assertVersion(7);

    return {
        name: "plugin1",

        visitor: {
            Identifier(path) {
                path.node.name = "b";
            }
        }
    };
});
