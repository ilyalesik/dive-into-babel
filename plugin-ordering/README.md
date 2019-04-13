# Babel plugin ordering

The case shows that order of plugin is doesnt matter. 

Suppose we have some code:
```javascript
var a = 1;
```
There are two plugins: `pluginAtoB` and `pluginAtoC`. 
`pluginAtoB` transform the code to
```javascript
var b = 1;
```

`pluginAtoC` transform the code to
```javascript
var c = 1;
```

But what happens, if we set `pluginAtoB` and `pluginAtoC` both?
```javascript
{
    plugins: [pluginAtoB, pluginAtoC]
}
```

In this case oder of plugins at config doesnt matter, always will be
```javascript
var b = 1;
```

Why? Plugin `pluginAtoB` visit `Identifier` node, 
while `pluginAtoC` visit `VariableDeclarator` node.
`VariableDeclarator` node is upper at AST that `Identifier` node. 
Traverse algorithm firstly will find `VariableDeclarator` and change `a` to `c`. 
Then will find `Identifier` and change `c` to `b`.
