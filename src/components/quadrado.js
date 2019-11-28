import React, {  } from 'react';

function Quadrados(props) {


    
    const sq_Size = 500/props.qnt
    var last = false

    if(props.square_amt+1 == (props.x+1)*(props.y+1)){
        last = true
    }
    
    return (
    <div>

        {!last ? 
            (
                <div onClick = {()=>props.changeSquares(props.x, props.y)}  style={{
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
            )
            :
            (
                <div style={{
                    width: `${sq_Size}px`,
                    height: `${sq_Size}px`,
                    backgroundColor: 'white',
                    display: 'flex', 
                    alignContent: 'center', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: 'solid'
                }}>
                    
                </div>
            )
        }

    </div>
);
}

export default Quadrados;
