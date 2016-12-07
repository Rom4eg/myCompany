import React from 'react';
import ReactDom from 'react-dom';
import moment from "moment";

class Comment extends React.Component{

  render(){
    return (
      <div className="comment column">
        <div className="header">
          <div className="name">{this.props.data.author}</div>
        </div>
        <div className="content">
          <div className="avatar">
            <img src=""/>
          </div>
          <div className="content">
            {this.props.data.comment}
          </div>
        </div>
        <div className="footer">
          <div className="comment_date">
            {moment(this.props.data.create_date).format("YYYY.MM.DD HH:mm:ss")}
          </div>
        </div>
      </div>
    )
  }
}

export class EventItem extends React.Component{

  constructor(props){
      super(props);
      this.state = {"item": {comments:[]}}
  }

  componentDidMount(){
    $.ajax({
        url: "/api/events/"+this.props.params.id+"/",
    }).then((resp)=>{
        this.setState({
          item: resp
        });
    });
  }

  format_datetime(datetime_string){
      return moment(datetime_string).format("DD.MM.YYYY HH:mm:ss");
  }

  duration(start, end){
    let diff = moment(end).diff(moment(start));
    return moment(diff).format("DD [day(s) ]");
  }

  render(){
    return (
      <div className="small-12 medium-10 medium-offset-1 large-8 large-offset-2 columns">
        <div className="wrapper detail-item row">
          <div className="title small-12 columns">
              {this.state.item.title}
          </div>
          <div className="subtitle small-12 columns">
            <div className="create_date">{moment(this.state.item.create_date).format("YYYY.MM.DD")}</div>
            <div className="author">{this.state.item.author}</div>
          </div>
          <div className="content small-12 columns">
            <div className="event-content" dangerouslySetInnerHTML={{"__html":this.state.item.content}}></div>
            <div className="period">
              <div className="start_date">
                  {moment(this.state.item.start_date).format("YYYY.MM.DD")}
              </div>
              <div className="duration">
                {this.duration(this.state.item.start_date, this.state.item.end_date)}
              </div>
              <div className="end_date">
                  {moment(this.state.item.end_date).format("YYYY.MM.DD")}
              </div>
            </div>
          </div>
        </div>
        <div className="comments row">
          <div className="small-12">
              {this.state.item.comments.map((comment, i)=>{
                return <Comment data={comment} key={i}/>
              })}
          </div>
        </div>
      </div>
    )
  }
}
