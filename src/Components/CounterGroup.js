import React, { Component } from 'react';
import Counter from "../Container/CounterContainer"

class CounterGroup extends Component {
    render() {
        let counterList = []
        for (let i = 0; i < this.props.amount; i++) {
            counterList.push(<Counter 
                index={i} 
                key={i}/>)
        }
        return (
            <div >
                {counterList}
            </div>
        );
    }
}
export default CounterGroup;