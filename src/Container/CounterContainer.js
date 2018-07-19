import { connect } from 'react-redux'
import Counter from "../Components/Counter";
import {increment,decrement,multiplied,divided} from '../Actions'



const mapStateToProps = (state, ownProps) => {
    return {
        value: state[ownProps.index]
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onIncrement:(index) => dispatch(increment(index)),
        onDecrement:(index) => dispatch(decrement(index)),
        onMultiplied:(index,multipler) =>dispatch(multiplied(index,multipler)),
        onDivided:(index,multipler) =>dispatch(divided(index,multipler))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)