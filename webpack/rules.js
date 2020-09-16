const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const paths = require('./paths');

module.exports = [
    {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: {
            loader: 'vue-loader'
        },
    },
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
        },
    },
    {
        test: /\.s[ac]ss$/i,
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    hmr: true,
                    reloadAll: true
                },
            },
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true,
                },
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true,
                },
            },
            {
                loader: 'sass-resources-loader',
                options: {
                    resources: [paths.varsCssPath]
                },
            },
        ]
    },
    // {
    //     test: /\.(png|jpg|gif|svg)$/,
    //     use: [
    //         {
    //             loader: 'url-loader',
    //             options: {
    //                 name: '[name].[ext]',
    //                 limit: 100000,
    //                 outputPath: (url, resourcePath, context) => {
    //                     const relativePath = resourcePath.replace(paths.staticPath, '');
    //                     return `${relativePath}`;
    //                 },
    //             },
    //         },
    //     ],
    // },
    {
        test: /\.(woff2|ttf|woff|eot)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: paths.fontsFolder
                },
            },
        ],
    },
    {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: paths.imagesFolder
                },
            },
        ],
    },
    // {
    //     test: /\.(png|jpg|gif|svg)$/,
    //     use: [
    //         {
    //             loader: 'file-loader',
    //             options: {
    //                 // publicPath: paths.staticPath,
    //             publicPath: (url, resourcePath, context) => {
    //                 // `resourcePath` is original absolute path to asset
    //                 // `context` is directory where stored asset (`rootContext`) or `context` option
        
    //                 // To get relative path you can use
    //                 const relativePath = path.relative(context, resourcePath);
        
    //                 if (/my-custom-image\.png/.test(resourcePath)) {
    //                     return `other_public_path/${url}`;
    //                 }
        
    //                 if (/images/.test(context)) {
    //                     return `image_output_path/${url}`;
    //                 }
        
    //                 return `${relativePath}${url}`;
    //             },
    //                 name: '[name].[ext]',
    //                 outputPath: paths.imagesFolder
    //             },
    //         },
    //     ],
    // },
];
