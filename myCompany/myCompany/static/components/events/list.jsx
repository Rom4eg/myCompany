import React from 'react';
import ReactDom from 'react-dom';
import moment from "moment";

class EventsListItem extends React.Component{

  constructor(props){
      super(props);
      this.state = {
          url_to_detail: "/events/"+props.data.id+"/",
      }
  }

  format_datetime(datetime_string){
      return moment(datetime_string).format("DD.MM.YYYY HH:mm:ss");
  }

  render(){
    return (
      <div className="wrapper list-item">
        <div className="title">
            <a href={this.state.url_to_detail}>{this.props.data.title}</a>
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
              <a href={this.state.url_to_detail}>{gettext("Read more")}</a>
          </div>
        </div>
      </div>
    )
  }
}

class EventsListContainer extends React.Component{

  constructor(props){
      super(props);
      this.state = {items:[]};
      $.ajax({
          url: '/api/events/list/',

      }).then((resp)=>{
          this.setState({items: resp});
      });
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

ReactDom.render(<EventsListContainer />, document.getElementById("events"));
