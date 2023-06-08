//index.server.controller.js-Jingya Huang 301221651 June 7, 2023
exports.render = function (req, res) {
    res.render('index', {
        title: 'Hello World'
    })
};