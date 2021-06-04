module.exports = {
    devServer: {
        host: 'localhost',
        port: 8089,
        proxy: {
            '/department': {
                target: 'http://172.16.0.185:9025/tscp-enterprise',
                changeOrigin: true
            },
        }
    }
}