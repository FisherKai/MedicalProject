const { override, fixBabelImports, addLessLoader, addWebpackModuleRule } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: true,
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            localIdentName: '[local]--[hash:base64:5]'
        }
    }),
    /**
     * 禁用esModule 防止引用图片出现 src="[object Module]" 的问题
     */
    addWebpackModuleRule({
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    esModule: false
                }
            }
        ]
    })
);