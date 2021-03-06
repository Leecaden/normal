module.exports = function(app) {

    var path = require('path'); 
    var routes = require('./index')
    var merchanxRouter = require('./api/merchanxRouter')
    var maintenanceRouter = require('./api/maintenanceRouter')
    var fitbitRouter = require('./api/fitbitRouter')
    var weatherRouter = require('./api/weatherRouter')
    var eventCalendarRouter = require("./api/eventCalendarRouter")
    var announcementRouter = require("./api/announcementRouter")
    var userRouter = require('./api/userRouter')

    console.log('checkhceck')
    //app.use('/api/', routes);
    app.use('/api/merchanx', merchanxRouter);
    app.use('/api/maintenance', maintenanceRouter);
    app.use('/api/fitbit', fitbitRouter);
    app.use('/api/weather', weatherRouter);
    app.use('/api/event-calendar', eventCalendarRouter);
    app.use('/api/announcement/', announcementRouter);

    app.use('/api/user', userRouter);

    // Send all other requests to the Angular app
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../../dist/index.html'));
    });
}


function webErrorHandler(err, req, res, next) {
    //console.log("web error handler");
    res.redirect('/login');
}

function requestErrorHandler(err, req, res, next) {
    //console.log("request error handler");
    res.redirect('/login');
}

