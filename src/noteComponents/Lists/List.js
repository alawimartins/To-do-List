import React from 'react';
import {Note} from '../Note/Note'
import './index.css'

export class List extends React.Component {
  constructor(props){
    super(props)

    //lists : array
    //closeButton : function

  }

  deleteNote(noteId) {
    this.props.closeButton(noteId)
  }

  render(){
    return (
        <div>
            <div className = "notesContainer">{this.props.lists.map(function (eachNote, i){

                return <Note text={eachNote.text} color={eachNote.color} id={i} onDelete={this.deleteNote.bind(this)} />
            }.bind(this))}
            </div>
      </div>
    );
  }
}