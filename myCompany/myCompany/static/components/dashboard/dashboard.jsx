
import React from 'react';
import ReactDom from 'react-dom';

class DashboardItem extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
      return (
        <div className="dashboard-item">
          <div className="title">
            <a href={this.props.data.url}>{this.props.data.title}</a>
          </div>
          <div className="subtitle">
            <div className="date">{this.props.data.date}</div>
            <div className="author">{this.props.data.author}</div>
          </div>
          <div className="content" dangerouslySetInnerHTML={{"__html":this.props.data.content}}></div>
        </div>
      )
    }
}

class Dashboard extends React.Component{

    constructor(props){
        super(props);
        this.state = {items:[]};
        $.ajax({
            url: '/api/dashboard/',

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
