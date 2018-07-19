export const increment = (index)=>{return  { type: 'INCREMENT',index }};
export const decrement = (index)=>{return { type: 'DECREMENT',index }};
export const multiplied = (index,multipler)=>{return { type: 'MULTIPLIED',index,multipler }};
export const divided = (index,multipler)=>{return { type: 'DIVIDED',index,multipler }};

