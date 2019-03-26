import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    chars: [],
    length: 0
  };

  getTextLen = (event) => {
    const length = event.target.value.length;
    const chars = event.target.value.split('');
    this.setState({chars:chars, length: length});
  };

  deleteCharHandler = (index) => {
    const chars = [...this.state.chars];
    chars.splice(index,1);
    this.setState({chars: chars});
  }
  
  render() {
    let charCompo = null;
    if(this.state.length > 0){
      charCompo = (
        <div>
          {this.state.chars.map((ch, index) => {
            return <CharComponent character={ch} click={(event) => this.deleteCharHandler(event)} />
          })}
          
        </div>
        
      );
    }
  
    return (
      <div className="App">
        <input onChange={(event) => this.getTextLen(event)} type="text" value={this.state.chars.join('')}/>
        <p>{this.state.length}</p>
        <Validation length={this.state.length}/>
        {charCompo}
      </div>
    );
  }
}

export default App;
