import React, { Component } from 'react';
import Counter from "./Counter"

class CounterGroup extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        let counterList = []
        for(let i=0;i<this.props.amount;i++){
            console.log(this.props.amount)
            counterList.push(<Counter propsObj = {this.props.propsObj} index={i}/>)
        }
        return (
            <div >
                {counterList}
            </div>
        );
    }
}
export default CounterGroup;