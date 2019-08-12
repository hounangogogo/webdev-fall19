import {Injectable} from '@angular/core';


@Injectable()
export class  SectionServiceClient {


  enroll = (section) =>
    fetch('http://localhost:3000/api/section/' + section._id + '/enroll', {
      method: 'put',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(section)

    })

  findAllSections = () =>
    fetch('http://localhost:3000/api/section')
      .then(response => response.json())


  findSectionForCourse = (courseId) =>
    fetch('http://localhost:3000/api/course/' + courseId + '/section')
      .then(response => response.json())

  createSection = (section) =>
    fetch('http://localhost:3000/api/section', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(section)
    })
      .then(response => response.json())
}
