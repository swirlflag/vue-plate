const path = require('path');
const fs = require('fs') ;
const webpack = require('webpack');
const packageJson = fs.readFileSync('./package.json') ;
// const dependencies = JSON.parse(packageJson).dependencies || 0 ;
// const devDependencies = JSON.parse(packageJson).devDependencies || 0 ;

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src/')
            }
        },
        plugins : [ 
            new webpack.DefinePlugin ({ 
                'process.env': { 
                    // PACKAGE_dependencies : ' "'+ dependencies + '"' ,
                    // PACKAGE_devDependencies : ' "'+ devDependencies + '"'        ,             
                } 
            }) 
        ] 
    },
};

