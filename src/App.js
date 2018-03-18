import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';

class App extends Component {  
  
  constructor(props){
    super(props);

    this.state = {
      items: []
    }

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e){
    e.preventDefault();
    if(this._inputElement.value !== ''){
      let newItem = {
        text: this._inputElement.value,
        key: Date.now()
      }
    this.setState((prevState) => {
      return { items: prevState.items.concat(newItem)}
    });

    this._inputElement.value = '';
    }
    console.log(this.state.items);
  }

  deleteItem(key){
    var filteredItems = this.state.items.filter(function (item) {
        return (item.key !== key);
      });
     
      this.setState({
        items: filteredItems
      });
}

  render() {
    // Render JSX
    return (
      <div className="todoList">

        <div className="header"></div>
        
        {/* Store the input to _inputElement */}
        <form onSubmit={this.addItem}>
          <input ref={(a) => this._inputElement = a} 
                  placeholder="enter task">
          </input>

          <TodoList entries={this.state.items}
                  delete={this.deleteItem}
                  className="todo-list"
          />

          <button className="btn" type="submit">+</button>
        </form>
      </div> 
    );
  }
}

export default App;
