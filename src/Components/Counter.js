import React, { Component } from 'react';
class Counter extends Component {
    constructor(props) {
        super(props);
        this.inputValue = React.createRef();
      }
      increment=()=>{
      console.log(this.props.index)

        this.props.propsObj.onIncrement(this.props.index);
      }
      decrement=()=>{
        this.props.propsObj.onDecrement(this.props.index);
      }
      onDecrement
      multiplied=()=>{
        const multipler = this.inputValue.current.value;
        this.props.propsObj.onMultiplied(this.props.index,multipler);
      }
      Divided=()=>{
        const divider = this.inputValue.current.value;
        this.props.propsObj.onDivided(this.props.index,divider);
      }
    render() {
        const { state} = this.props.propsObj;
        return (
            <div >
                Clicked: {state[this.props.index]} times
        {' '}
                <button onClick={this.increment}>
                    +
          </button>
                <button onClick={this.decrement}>
                    -
          </button>
                <button onClick={this.multiplied}>
                    *
          </button>
                <button onClick={this.Divided}>
                    /
          </button>
                <input type="text" ref={this.inputValue} defaultValue={1} />
            </div>
        );
    }
}
export default Counter;