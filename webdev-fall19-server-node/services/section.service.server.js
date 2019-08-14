module.exports = app => {
    const sectionModel = require('../models/section/section.model.server');


    app.put('/api/section/:sectionId/enroll', (req, res) => {
        const currentUser = req.session['currentUser'];
        console.log("----------");
        console.log(currentUser);
        console.log("----------");

        sectionModel
            .enroll(currentUser._id, req.body)
            .then(status => res.sendStatus(200))
    })


    app.get('/api/section', (req, res) =>
        sectionModel
            .findAllSections()
            .then(sections => res.send(sections))
    )

    app.get('/api/course/:courseId/section', (req, res) =>
        sectionModel
            .findAllSectionsForCourse(req.params['courseId'])
            .then(sections => res.send(sections))
    )



    app.post('/api/section', (req, res) =>
        sectionModel
            .createSection(req.body)
            .then(section => res.send(section)));
}
