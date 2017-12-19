module.exports = {
  '/activity': {
    target: 'https://bbs-dev.jzb.com',
    changeOrigin: true,
    pathRewrite: {
      '^/activity': '/activity'
    }
  },
  '/onLogin': {
    target: 'http://localhost:8088/',
    changeOrigin: true,
    pathRewrite: {
      '^/onLogin': '/onLogin'
    }
  }
}