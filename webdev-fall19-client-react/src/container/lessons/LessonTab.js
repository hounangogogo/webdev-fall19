import React from 'react';
import TopicPill from '../topics/TopicPill';

export default class LessonTab extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedLessonIndex: 0
        }
    }


    selectLesson = (index) => {
        this.setState({
            selectedLessonIndex: index
        })
    }

    render() {
        return (
            <div>
                <h3>
                    Lesson Tabs {this.props.module.lessons.length}
                </h3>
                <ul>
                    {this.props.module.lessons.map(
                        (lesson, i) => {
                            return (
                                <li onClick={() => this.selectLesson(i)}
                                    key={i}>{lesson.title}</li>
                            )
                        }
                    )}
                </ul>
                {this.state.selectedLessonIndex}
                <TopicPill lesson = {this.props.module.lessons[this.state.selectedLessonIndex]}/>
            </div>
        )
    }
}