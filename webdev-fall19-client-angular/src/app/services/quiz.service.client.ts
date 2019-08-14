import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {

  findAllQuizzes = () =>
    fetch('http://localhost:3000/api/quiz')
      .then(response => response.json())

  findQuizById = quizId =>
    fetch('http://localhost:3000/api/quiz/' + quizId)
      .then(response => response.json())

}
