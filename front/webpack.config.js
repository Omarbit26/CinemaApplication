module.exports =  { 
    mode: "development",
    entry: {home:"./scripts/index.js", 
            form:"./scripts/form.js"
    },
    output: {
        path:__dirname+"/public",
        filename: '[name].bundle.js',
    },
};


