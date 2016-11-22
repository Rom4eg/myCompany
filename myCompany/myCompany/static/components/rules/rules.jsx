import React from 'react';
import ReactDom from 'react-dom';

class RulesListItem extends React.Component{

  constructor(props){
      super(props);
  }

  render(){
    return (
      <div>
        <div className="create_date">{this.props.data.create_date}</div>
        <div className="title">{this.props.data.title}</div>
        <div className="content">{this.props.data.content}</div>
        <div className="author">{this.props.data.author}</div>
        <div className="reviewed">{this.props.data.reviewed}</div>
      </div>)
  }
}

class RulesListContainer extends React.Component{

  constructor(props){
      super(props);
      this.state = {items:[]};
      $.ajax({
          url: '/api/rules/list/',

      }).then((resp)=>{
          this.setState({items: resp});
      });
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

ReactDom.render(<RulesListContainer />, document.getElementById("rules"));
