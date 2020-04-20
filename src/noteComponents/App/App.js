import React from 'react';
import './App.css';
import {Form} from '../Form/Form'
import {List} from '../Lists/List'

class App extends React.Component {
  constructor(props){
    super(props)

    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const notes = url.searchParams.get("notes");


    // const notesToConvert = [
    //   {
    //     text: 'Hi! This project uses React.js',
    //     color: 'note1',
    //   },
    //   {
    //     text: 'Use the + button to add a note :)',
    //     color: 'note2',
    //   },
    //   {
    //     text: 'I am looking for a front-end junior position.',
    //     color: 'note3',
    //   }, 
    //   {
    //     text: 'Here is my email: yasmin.gt@gmail.com and my phone number: 0446574626',
    //     color: 'note4',
    //   },
    //   {
    //     text: 'Looking forward to hearing from you :D',
    //     color: 'note',
    //   } 
    // ] 

    // const string = JSON.stringify(notesToConvert);

    // console.log('string', string);
    console.log('notes', notes);
    const obj = JSON.parse(notes)
    console.log('obj', obj);


    this.state= {notesArr: obj || [], form: false}
  }

  onNoteClose(noteId) {
    // const newNotes = this.state.notesArr.filter(function (note) {
    //   if(note !== eachNote) {
    //     return true
    //   }
    // })

    const newNotes = [...this.state.notesArr];
    newNotes.splice(noteId, 1);

    this.setState({notesArr : newNotes})
  }
  
  
  infoHasBeenSent (textValue) {
    if(textValue.length ===  0) {
      return
    }
    const colors = ['note', 'note1', 'note2','note3','note4'];
    const c = colors[Math.floor(Math.random() * colors.length)];
    const newNotes = [...this.state.notesArr, 
      {
        text: textValue,
        color: c
      }]

    this.setState({
      notesArr: newNotes,
      
    })
  }

  toggleForm() {
    // this.state.form ? this.setState ({form : false}) : this.setState ({form : true})
    this.setState ({form : !this.state.form})
  }

  rotation() {
    if (this.state.form) {
      return "Exit"
    } {
      return "Open"
    }
  }

  render(){
    return (
      <div className="App">
        <h1 className= "title">My Notes</h1>
        {this.state.notesArr.length ===0 && <h2 className="subtitle">Click On The Plus Button</h2>}
        
        <List lists={this.state.notesArr} closeButton={this.onNoteClose.bind(this)} />
        {this.state.form && <Form onClicked = {this.infoHasBeenSent.bind(this)} exitTextArea = {this.toggleForm.bind(this)}/> }
        
        <a onClick={this.toggleForm.bind(this)}   href="#" className={"btn btn" + this.rotation()}  >+</a>
      </div>
    );
  }
}

export default App;
