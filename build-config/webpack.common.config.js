const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const isDevMode=process.env.NODE_ENV ==="development";
module.exports = {
    entry: './src/js/index.js',
    output: {
        path:path.resolve(__dirname, '../dist'),
        filename: 'bundle.[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                   {
                       loader : MiniCssExtractPlugin.loader
                   },
                    
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(), new MiniCssExtractPlugin({
            filename:'bundle.[hash].css'
        }),
        new HtmlWebpackPlugin(
        {
           title: 'My App',
           template:'./src/index.html',
           'meta': {
               'viewport': 'width=device-width, initial-scale=1, user-scalable=no'
             }   
        }
      ),
      new CopyPlugin([
       { from:'./src/assets',      to:'assets'   }

      ]
      )
    ]

}