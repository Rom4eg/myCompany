
import React from 'react';
import ReactDom from 'react-dom';

class DashboardItem extends React.Component{

    constructor(props){
        super(props);
    }

    componentWillMount(){
    }

    render(){
        console.log(this.props)
        return (
            <div>
            </div>
        );
    }
}

class Dashboard extends React.Component{

    constructor(props){
        super(props);
        $.ajax({
            url: '/dashboard/',

        }).then((resp)=>{
            this.setState(resp);
        });
    }

    render(){
        return (
            <div className="small-12 medium-10 medium-offset-1 large-8 large-offset-2 columns">
                <DashboardItem data={this.state} />
            </div>
        );
    }
}

ReactDom.render(<Dashboard />, document.getElementById("home"));
