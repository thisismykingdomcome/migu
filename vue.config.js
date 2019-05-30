module.exports = {
    devServer:{
        proxy:{
            '/api':{
                target:'http:39.97.33.178',
                changeOrigin:true
            }
        }
    },
    configurWebpack:{
        resolve:{
            alias:{
                '@':path.resolve(__dirname,'./src'),
                "@common":path.resolve(__dirname,'./src/common'),
                "@api":path.resolve(__dirname,'./src/api'),
                "@components":path.resolve(__dirname,'./src/components'),
                "@utils":path.resolve(__dirname,'./src/utils'),

            }
        }
    }
}