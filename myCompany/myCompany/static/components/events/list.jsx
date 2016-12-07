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

  duration(start, end){
    let diff = moment(end).diff(moment(start));
    return moment(diff).format("D [day(s)]");
  }

  render(){
    return (
      <div className="wrapper list-item">
        <div className="title small-12 columns">
            <Link to={"/events/" + this.props.data.id+"/"}>{this.props.data.title}</Link>
        </div>
        <div className="subtitle small-12 columns">
          <div className="create_date">{moment(this.props.data.create_date).format("YYYY.MM.DD")}</div>
          <div className="author">{this.props.data.author}</div>
        </div>
        <div className="content small-12 columns">
          <div className="event-content" dangerouslySetInnerHTML={{"__html":this.props.data.content_preview}}></div>
          <div className="period">
            <div className="start_date">
                {moment(this.props.data.start_date).format("YYYY.MM.DD")}
            </div>
            <div className="duration">
              {this.duration(this.props.data.start_date, this.props.data.end_date)}
            </div>
            <div className="end_date">
                {moment(this.props.data.end_date).format("YYYY.MM.DD")}
            </div>
          </div>
        </div>
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
        {this.props.children}
      </div>)
  }
}

// ReactDom.render(<EventsListContainer />, document.getElementById("events"));
