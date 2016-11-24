import React from 'react';
import ReactDom from 'react-dom';

class EventsListItem extends React.Component{

  constructor(props){
      super(props);
  }

  render(){
    return (
      <div className="wrapper list-item">
        <div className="title">{this.props.data.title}</div>
        <div className="create_date">{this.props.data.create_date}</div>
        <div className="content">
          {this.props.data.content}
          <div className="start_date">{gettext("Started")} - {this.props.data.start_date}</div>
          <div className="end_date">{gettext("Ended")} - {this.props.data.end_date}</div>
        </div>
        <div className="footer row">
          <div className="author small-6 columns">{this.props.data.author}</div>
          <div className="more-btn text-right small-6 columns">{gettext("Read more")}</div>
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
