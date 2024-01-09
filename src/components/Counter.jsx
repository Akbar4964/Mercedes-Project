import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { storeType } from '../const';

function Counter() {
    // const {count,color} = useSelector(state=>state)
    const count = useSelector(state=> state.counters.count);
    const color = useSelector(state=> state.counters2);
    const dispatch = useDispatch();
    // console.log(count,color);
    console.log(count,color);

    return (
        <div>
            <h2>{count}</h2>
            <button type='button' onClick={() => dispatch({type:storeType.INCREMENT})}>Inc</button>
            <button type='button' onClick={() => dispatch({type:storeType.DICREMENT})}>Dic</button>
        </div>
    )
}

export default Counter
