import React from 'react';

const WidgetListComponent  = ({widgets, deleteWidget}) =>
    <div>
        <h1>WidgetListComponent! ({widgets.length})</h1>
        <ul className="list-group">
            {widgets.map((widget, index) =>
                <li className="list-group-item"
                    key={index}>
                    {widget.title}
                    <button onClick={deleteWidget}
                            className="btn btn-danger">Delete</button>
                </li>)}
        </ul>
    </div>



export default WidgetListComponent