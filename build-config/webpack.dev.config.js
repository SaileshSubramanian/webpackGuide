module.exports={
    mode:"development",
    devServer:{
        port:3000,
        hot: true,
        contentBase:'./dist'
    },
    devtool:"inline-source-map"
}