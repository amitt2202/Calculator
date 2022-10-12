import React, { Component } from 'react';
import CounterButton from './CounterButton';
import './Counter.css'
class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
    render() {
        return (
            <div className="counter">
                <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton changeBy={5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton changeBy={10} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton changeBy={20} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <span className="counterResult">{this.state.counter}</span>
                <div >
                <button class="resetButton" onClick={this.reset}>Reset</button>
                </div>
            </div>
        );
    };

    reset(){
        this.setState(
             {counter: 0}
             
        );
    }

    increment(changeBy){
        console.log(`increment method called from parent Counter class - ${changeBy}`);
        this.setState(
           (prevstate) => {
           return {counter: prevstate.counter + changeBy}
       }
       )
    }

    decrement(changeBy){
        console.log(`decrement method called from parent Counter class - ${changeBy}`);
        this.setState(
           (prevstate) => {
           return {counter: prevstate.counter - changeBy}
       }
       )
    }
    
}


export default Counter