import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router';

class RulesListItem extends React.Component{

  constructor(props){
      super(props);
  }

  render(){
    return (
      <div className="wrapper list-item">
        <div className="title small-12 column">
          <Link to={"/rules/"+this.props.data.id+"/"}>{this.props.data.title}</Link>
        </div>
        <div className="subtitle small-12 column">
          <div className="create_date">{this.props.data.create_date}</div>
          <div className="author">{this.props.data.author}</div>
        </div>
        <div className="content small-12 column" dangerouslySetInnerHTML={{"__html":this.props.data.content_preview}}></div>
        {this.props.children}
      </div>
    )
  }
}

export class RulesListContainer extends React.Component{

  constructor(props){
      super(props);
      this.state = {items:[]};
  }

  componentDidMount(){
    this.requested_data = $.ajax({
        url: '/api/rules/',

    }).done((resp)=>{
        this.setState({items: resp});
    });
  }

  componentWillUnmount(){
    if(this.requested_data){
      this.requested_data.abort();
      this.requested_data = undefined;
    }
  }

  render(){
    return (
      <div className="small-12 medium-10 medium-offset-1 large-8 large-offset-2 columns">
        {this.state.items.map((el, i)=>{
          return <RulesListItem data={el} key={i}/>
        })}
      </div>)
  }
}
