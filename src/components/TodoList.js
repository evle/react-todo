import React, { Component } from 'react';
import './TodoList.css'
import FlipMove from 'react-flip-move';

export default class TodoList extends Component { 

    constructor(props){
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }

    delete(key){
        this.props.delete(key);
    }
    
    createTasks(item){
        return <li onClick={() => this.delete(item.key)} 
                            key={item.key}>{item.text}</li>
    }

    render(){
        const todoEntries = this.props.entries;

        // Pass each item to createTasks for generating <li> 
        const listItems = todoEntries.map(this.createTasks);
    
        return(
            <ul className="todo-list">
            <FlipMove duration={250} easing="ease-out">
                {listItems}
            </FlipMove>
            </ul>
        )
    }
}
