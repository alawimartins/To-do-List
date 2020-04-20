import React from 'react';
import './index.css'


export class Note extends React.Component {
  constructor(props){
    super(props)

    //text : string
    //onDelete : function
    //id : number

  }



  render(){
    return (
        <div>
            <div className={"noteContainer noteContainer--" + this.props.color}>
                <p className="noteContainer__text">{this.props.text}</p>
                <div><p onClick = {this.props.onDelete.bind(this, this.props.id)} className="noteContainer__deletebtn">X</p></div>
                
            </div>
            
         
           
      </div>
    );
  }
}