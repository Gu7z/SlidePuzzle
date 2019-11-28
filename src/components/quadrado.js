import React from 'react';

function Quadrados(props) {
    
    const sq_Size = 500/props.qnt
    
    return (
    <div onClick = {()=>props.changeSquares(props.value)}  style={{
        width: `${sq_Size}px`,
        height: `${sq_Size}px`,
        backgroundColor: 'red',
        display: 'flex', 
        alignContent: 'center', 
        alignItems: 'center', 
        justifyContent: 'center',
        border: 'solid'
    }}>
        <div >
            {props.value}
        </div>
    </div>
);
}

export default Quadrados;
