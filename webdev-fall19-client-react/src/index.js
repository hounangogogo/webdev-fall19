import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


import LessonTab from './LessonTab';
import TopicPills from './TopicPills';
import CourseList from './container/CourseList';


// This function is convert ModuleListItem to stateless function
const ModuleListItemStateless = ({title}) => {
    return (
        <li className="list-group-item">
            {title}(stateless)
            <span className="pull-right">
                <i style={{"marginRight": "5px"}}
                   className="fa fa-trash">
                </i>
                <i className="fa fa-pencil">
                </i>
            </span>
        </li>
    )
}


// Module List Item Component is the list content for ModuleList
class ModuleListItem extends React.Component {
    render() {
        return (
            <li className="list-group-item">
                {this.props.title}
                <span className="pull-right">
                    <i style={{"marginRight": "5px"}}
                       className="fa fa-trash">
                    </i>
                    <i className="fa fa-pencil">
                    </i>
                </span>
            </li>
        )
    }
}

// Module List Component
class ModuleList extends React.Component {
    constructor() {
        super();
        this.state = {
            title:"",
            modules:[
                {title: 'Module 1'},
                {title: 'Module 2'},
                {title: 'Module 3'}
                ]
        }
        this.titleChanged = this.titleChanged.bind(this);
    }

    // Track the title changed
    titleChanged(event) {
        this.setState({title: event.target.value});
    }

    // Create New Modules
    createModule = () => {
        var module = {title: this.state.title};
        this.state.modules.push(module);
        this.setState({"modules": this.state.modules});
    }



    // Define an alternative function
    renderModuleList() {
        let modules = this.state.modules.map((module , i) =>
            <ModuleListItemStateless
                key={i}
                title={module.title}/>
        )
        return modules
    }

    render() {
        return (
            <div>
                <h1>Module List</h1>
                <h2>{this.state.title}</h2>
                <input className="form-control"
                       placeholder="title"
                       onChange={this.titleChanged}/>

                       <button className="btn btn-primary btn-block"
                               onClick= {this.createModule}>
                           Add Module
                       </button>

                <ul className="list-group">
                    {this.renderModuleList()}
                </ul>
            </div>
        )
    }
}



// CourseCard is under the WhiteBoard
class CourseCard extends React.Component {
    render() {
        return (
            <div className="card" style={{"width": "18rem"}}>
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>
                     <div className="card-body">
                         <h5 className="card-title">Card title</h5>
                         <p className="card-text">card text</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                     </div>
            </div>
        )
    }
}


const Page1 = () =>
    <h2>Page 1</h2>

const Page2 = () => {
    return(
        <h2>Page 2</h2>
    )
};

const PageParam = ({match}) => {
    return(
        <h2>PageParam {
            match.params.something
        }
        </h2>
    )
};


class WhiteBoard extends React.Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <h1>WhiteBoard</h1>
                    <CourseList/>

{/*                    <TopicPills/>
                    <LessonTab/>
                    <ModuleList/>
                    <div className="card-deck">
                        <CourseCard/>
                        <CourseCard/>
                        <CourseCard/>
                    </div>*/}
                </div>
            </Router>

        )
    }
}


class App extends React.Component {
    render() {
        return(
            <Router>
                <div className="container-fluid">
                    <Link to="/whiteboard">WhiteBoard</Link> |
                    <Link to="/page1">Page 1</Link> |
                    <Link to="/page2">Page 2</Link> |
                    <Route path='/whiteboard' component={WhiteBoard}/>
                    <Route path='/page1' component={Page1}/>
                    <Route path='/page2' component={Page2}/>
                    <Route path='/pageParam/:something' component={PageParam}/>
                </div>
            </Router>
        );
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
