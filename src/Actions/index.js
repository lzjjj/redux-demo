import * as types from '../Constants/ActionTypes'
export const increment = (index)=>{return  { type: types.INCREMENT,index }};
export const decrement = (index)=>{return { type: types.DECREMENT,index }};
export const multiplied = (index,multipler)=>{return { type:types.MULTIPLE,index,multipler }};
export const divided = (index,multipler)=>{return { type: types.DIVIDED,index,multipler }};

