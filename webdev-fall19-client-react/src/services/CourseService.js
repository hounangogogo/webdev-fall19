let _singleton = Symbol();
class CourseService {

    COURSE_API_URL = 'http://localhost:8080/api/course';
    findAllCourses() {
        return fetch(this.COURSE_API_URL)
            .then(function(response){
                return response.json();
            });
    }

    createCourse(course) {
        return fetch(this.COURSE_API_URL, {
            method:'post',
            body:JSON.stringify(course),
            headers:{
                'content-type':'application/json'
            }
        })
            .then(function (response) {
                return response.json();
            })
    }

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new CourseService(_singleton);
        return this[_singleton]
    }
}


export default CourseService;
