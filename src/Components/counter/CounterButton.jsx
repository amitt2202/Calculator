
import React, { Component } from 'react';
import PropType from 'prop-types'
import './Counter.css'

export default class CounterButton extends Component {
    constructor() {
        super();
       
    }

    render() {
        return (
            <div className="counter">
                <button onClick={() =>this.props.incrementMethod(this.props.changeBy)}>+{this.props.changeBy}</button>
                <button onClick={() =>this.props.decrementMethod(this.props.changeBy)}>-{this.props.changeBy}</button>
            </div>
        );
    };

   

}

CounterButton.defaultProps = {
    changeBy: 1
}


CounterButton.propType = {
    changeBy: PropType.number
}

