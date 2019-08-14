const mongoose = require('mongoose');
const sectionSchema = require("./section.schema.server");
const sectionModel = mongoose.model('SectionModel', sectionSchema);

const userModel = require('../user/user.model.server');

enroll = (userId, section) =>
    userModel.findUserById(userId)
        .then(user => {
            user.sections.push(section);
            return user.save();
        })

findAllSections = () =>
    sectionModel.find();


findAllSectionsForCourse = courseId =>
    sectionModel.find({courseId: courseId})



createSection = (section) =>
    sectionModel.create(section);

module.exports = {
    //createSection: createSection
    enroll,
    findAllSections,
    createSection,
    findAllSectionsForCourse
}
