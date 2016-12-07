import React from 'react';
import ReactDom from 'react-dom';
import moment from "moment";

export class EventItem extends React.Component{

  constructor(props){
      super(props);
      this.state = {"item": {}}
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

  render(){
    return (
      <div className="wrapper detail-item small-12 medium-10 medium-offset-1 large-8 large-offset-2 columns">
        <div className="title">
            {this.state.item.title}
        </div>
        <div className="create_date">{this.format_datetime(this.state.item.create_date)}</div>
        <div className="content">
          <div className="event-content" dangerouslySetInnerHTML={{"__html":this.state.item.content}}></div>
          <div className="start_date">
              {gettext("Started")} - {this.format_datetime(this.state.item.start_date)}
          </div>
          <div className="end_date">
              {gettext("Ended")} - {this.format_datetime(this.state.item.end_date)}
          </div>
        </div>
        <div className="footer row">
          <div className="author small-6 small-offset-6 columns text-right">{this.state.item.author}</div>
        </div>
      </div>
    )
  }
}