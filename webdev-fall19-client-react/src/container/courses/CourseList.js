import React from 'react';
import CourseRow from './CourseRow';
import CourseService from '../../services/CourseService';



class CourseList extends React.Component{
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {courses: []};
    }
    componentDidMount() {
        this.courseService.findAllCourses()
            .then(courses => {
                this.setState({courses: courses});
            });
    }

    // bind to input field
    formChange=(event) => {
        console.log(event.target.value);
        this.setState({newCourse:{
            title:event.target.value
            }})
    }



    // bind to delete button
    deleteCourse = (courseId) => {
        this.courseService.deleteCourse(courseId)
            .then(() => this.courseService.findAllCourses())
            .then(courses => {this.setState({courses: courses})})
    };

    // bind to create course button
    crateCourse =() => {
        this.courseService.createCourse(this.state.newCourse)
            .then((course)=>
                    this.courseService.findAllCourses())
            .then(courses=>{
                this.setState({courses:courses})
            })
    }


    render() {
        return (
            <div>
                <h2>Course List</h2>

                <table className="table">
                    <thead>
                        <tr><th>Title</th></tr>
                        <tr>
                            <th><input onChange={this.formChange} className="form-control"/></th>
                            <th><button onClick={this.crateCourse} className="btn btn-success">Add Course</button></th>
                        </tr>
                    </thead>

                    <tbody>
                    {this.state.courses.map((course, index)=>
                        <CourseRow deleteCourse={this.deleteCourse}
                                   key={index}
                                   course={course}/>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CourseList;
