import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {
  courses = [];
  sections = [];
  selectedCourse = {
    id : -1
  }
  section = {}


  constructor(private sectionService: SectionServiceClient,
              private courseService: CourseServiceClient) { }


  addSection = (section) => {

    section.courseId = this.selectedCourse.id;
    this.sectionService
      .createSection(section)
      .then(() => {
        return this.sectionService
          .findSectionForCourse(section.courseId);
      })
      .then(sections => this.sections = sections);

  }

  selectCourse(course) {
    this.selectedCourse = course;
    this.sectionService
      .findSectionForCourse(course.id)
      .then(sections => this.sections = sections);

  }




  ngOnInit() {
    this.courseService
      .findAllCourses()
      .then(courses => this.courses = courses);
  }

}
