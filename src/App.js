import { Component } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor() {
    super();
    this.notes = [];
  }

  saveNote(title, message) {
    this.notes.push({title, message});
    this.setState({
      notes: this.notes
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container"> 
            <div className="row">
              <div className="col-sm-2">
                <NoteForm saveNote={this.saveNote.bind(this)}/>
              </div>
              <div className="col-sm-10">
                <NoteList notes={this.notes}/>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
