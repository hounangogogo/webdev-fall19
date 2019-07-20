import React from 'react'
import LessonTab from "../lessons/LessonTab";

export default class ModuleList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedModuleIndex: 0
        }
    }

    selectModule = (index) => {
        console.log(index);
        this.setState({
            selectedModuleIndex: index
        });
    };

    render() {
        return (
            <div>
                <h3>ModuleList</h3>
                <ul>
                    {this.props.course.modules.map(
                        (module, i) => {
                            return (<li onClick={()=>this.selectModule(i)}
                                        key={i}>{module.title}</li>)
                        }
                    )}
                </ul>
            <LessonTab module={this.props.course.modules[this.state.selectedModuleIndex]}/>
            </div>
        )
    }
}