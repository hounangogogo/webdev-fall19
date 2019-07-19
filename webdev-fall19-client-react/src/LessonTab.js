import React from "react";

class LessonTabs extends React.Component{
    render() {
        return (
            <div>
                <h3>Lesson Tabs</h3>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                            </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                            </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div>

        )
    }
}



export default LessonTabs;
