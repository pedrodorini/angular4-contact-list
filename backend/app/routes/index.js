const app_routes = require('./app_routes')

module.exports = (app, pool) => {
    app_routes(app, pool)
}
