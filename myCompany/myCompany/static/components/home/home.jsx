
import React from 'react';
import ReactDom from 'react-dom';

class HomeComponent extends React.Component{
    render(){
        return <h1>Hello</h1>;
    }
}

ReactDom.render(<HomeComponent />, document.getElementById("home"));
