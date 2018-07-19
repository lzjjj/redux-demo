import React, { Component } from 'react';
class Counter extends Component {
    constructor(props) {
        super(props);
        this.inputValue = React.createRef();
    }
    multiplied = () => {
        const multipler = this.inputValue.current.value;
        this.props.onMultiplied(this.props.index, multipler);
    }
    Divided = () => {
        const divider = this.inputValue.current.value;
        this.props.onDivided(this.props.index, divider);
    }
    render() {
        console.log(this.props.value)
        const { value,onIncrement,onDecrement, index } = this.props;
        return (
            <div >
                Clicked: {value} times
        {' '}
                <button onClick={
                    ()=>setTimeout(() => {
                        onIncrement(index)
                    }, 1000)
                    }>
                    +
          </button>
                <button onClick={()=>onDecrement(index)}>
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