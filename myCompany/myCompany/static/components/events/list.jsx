import React from 'react';
import ReactDom from 'react-dom';
import moment from "moment";
import {Link} from "react-router";

class EventsListItem extends React.Component{

  constructor(props){
      super(props);
  }

  format_datetime(datetime_string){
      return moment(datetime_string).format("DD.MM.YYYY HH:mm:ss");
  }

  render(){
    return (
      <div className="wrapper list-item">
        <div className="title">
            <Link to={`/events/${this.props.data.id}/`}>{this.props.data.title}</Link>
        </div>
        <div className="create_date">{this.format_datetime(this.props.data.create_date)}</div>
        <div className="content">
          <div className="event-content" dangerouslySetInnerHTML={{"__html":this.props.data.content_preview}}></div>
          <div className="start_date">
              {gettext("Started")} - {this.format_datetime(this.props.data.start_date)}
          </div>
          <div className="end_date">
              {gettext("Ended")} - {this.format_datetime(this.props.data.end_date)}
          </div>
        </div>
        <div className="footer row">
          <div className="author small-6 columns">{this.props.data.author}</div>
          <div className="more-btn text-right small-6 columns">
              <Link to={`/events/${this.props.data.id}/`}>{gettext("Read more")}</Link>
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export class EventsListContainer extends React.Component{

  constructor(props){
      super(props);
      this.state = {items:[]};

  }

  componentWillMount(){
    this.data_request = $.ajax({
      url: '/api/events/',

    }).done((resp)=>{
      this.setState({items: resp});
    });
  }

  componentWillUnmount(){
    if(this.data_request){
      this.data_request.abort();
      this.data_request = undefined;
    }
  }

  render(){
    return (
      <div className="small-12 medium-10 medium-offset-1 large-8 large-offset-2 columns">
        {this.state.items.map((el, i)=>{
          return <EventsListItem data={el} key={i}/>
        })}
      </div>)
  }
}

// ReactDom.render(<EventsListContainer />, document.getElementById("events"));
