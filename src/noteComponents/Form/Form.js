import React from 'react';
import './Form.css';

export class Form extends React.Component {
  constructor(props){
    super(props)
    //onClicked
    //exitTextArea : function
    this.state = {comments: ""}

  }

  onClickEvent(event) {
    const textValue = this.state.comments
    this.props.onClicked(textValue)
    console.log(textValue,"textValue")
    event.preventDefault()
    this.setState({comments: ""})
  }

  onTextAreaChange (event) {
    this.setState ({comments: event.target.value })
  }

  

  render(){
    console.log(this.state.comments)
    return (
      <>
        <div className ="backgroundWhite" onClick = {this.props.exitTextArea.bind(this)}>
        </div>
        <div className ="backgroundNote">

          <form onSubmit={this.onClickEvent.bind(this)} className="backgroundNote__container">
          <textarea value={this.state.comments} placeholder="Write your note here!" onChange={this.onTextAreaChange.bind(this)} maxLength = "200" className="backgroundNote__textarea" ></textarea>
            <div><button className="backgroundNote__button" >Send</button></div>
          </form>
          
        </div>
      </>
      
        
        
     
      

    );
  }
}