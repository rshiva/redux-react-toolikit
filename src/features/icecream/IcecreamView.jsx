import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'
export const IcecreamView = () => {
    const icecreamCount = useSelector((state) => state.icecream.numOfIcecream)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of icecream - {icecreamCount} </h2>
            <button onClick={() => dispatch(ordered()) }>Order icecream</button>
            <button onClick={() => dispatch(restocked(10))}>Restock icecream</button>
        </div>
    )
}
