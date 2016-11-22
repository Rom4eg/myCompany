
import React from 'react';
import ReactDom from 'react-dom';

class DashboardItem extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
      return (
        <div>
          <div className="date">{this.props.data.date}</div>
          <div className="title">{this.props.data.title}</div>
          <div className="content">{this.props.data.content}</div>
        </div>)
    }
}

class Dashboard extends React.Component{

    constructor(props){
        super(props);
        this.state = {items:[]};
        $.ajax({
            url: '/api/dashboard/list/',

        }).then((resp)=>{
            this.setState({items: resp});
        });
    }

    render(){
        return (
            <div className="small-12 medium-10 medium-offset-1 large-8 large-offset-2 columns">
              {this.state.items.map((el, i)=>{
                return <DashboardItem data={el} key={i}/>
              })}
            </div>
        );
    }
}

ReactDom.render(<Dashboard />, document.getElementById("dashboard"));
