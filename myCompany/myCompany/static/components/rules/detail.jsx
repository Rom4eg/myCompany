import React from 'react';
import ReactDom from 'react-dom';
import EmployeeShild from './../employees/employee_shild.jsx';

export class RuleItem extends React.Component{

  constructor(props){
    super(props);
    this.state = {item: {"reviewed":[]}};
  }

  componentDidMount(){
    $.ajax({
      url: "/api/rules/"+this.props.params.id+"/"
    }).done((resp)=>{
      this.setState({
        item: resp
      })
    })
  }

  render(){
    return (
      <div className="small-12 medium-10 medium-offset-1 large-8 large-offset-2 columns">
        <div className="wrapper detail-item">
          <div className="title small-12 column">
            {this.state.item.title}
          </div>
          <div className="subtitle small-12 column">
            <div className="create_date">{this.state.item.create_date}</div>
            <div className="author">{this.state.item.author}</div>
          </div>
          <div className="content small-12 column" dangerouslySetInnerHTML={{"__html":this.state.item.content}}></div>
        </div>
        <div className="reviwed small-12 column">
          <div className="rev_title">
            {gettext("Reviewed by: ")}
          </div>
          {this.state.item.reviewed.map((user, i)=>{
            return <EmployeeShild data={user} key={i}/>
          })}
        </div>
      </div>
    )
  }
}
