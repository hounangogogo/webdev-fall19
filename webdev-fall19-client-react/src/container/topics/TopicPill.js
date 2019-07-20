import React from 'react';


export default class TopicPill extends React.Component {

    render() {
        return(
            <div>
                <h3>Topic Pills</h3>
                <p>Length of the Topic {this.props.lesson.topics.length}</p>

                <ul>
                    {this.props.lesson.topics.map(
                        (topic, i) => {
                            return(
                                <li key={i}>{topic.title}</li>
                            )
                        }
                    )}
                </ul>
            </div>
        )
    }
}
