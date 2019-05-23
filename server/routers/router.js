// Add routes to the server
exports.addRoutes = app => {
    app.use('/auth', AuthRouter)
};