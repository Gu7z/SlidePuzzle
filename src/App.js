import React from 'react';
import './App.css';
import Quadrado from './components/quadrado'
import Drop from './components/drop'

export default class App extends React.Component{
    
    constructor(){
        super()
        this.state = {
            square_amt: 0,
            squares: [],
            counter: 0,
            line_amt: 0,
        }
    }

    getValue = (value) => {         
        this.setState({
            line_amt:value, 
            square_amt: (value * value) - 1, 
            squares: Array(value).fill().map(()=>Array(value).fill(null)),
            counter: 0
        }, ()=>{
            this.makeSquares()
        })
        
    }

    makeSquares = () => {  
        let grid = Array(this.state.line_amt).fill().map(()=>Array(this.state.line_amt).fill(null)) 
        for (let i = 0; i < this.state.line_amt; i++) {
            for (let j = 0; j < this.state.line_amt; j++) {
                this.state.counter += 1
                    grid[i][j] = 
                    <Quadrado 
                        x = {i}
                        y = {j}
                        changeSquares = {this.changeSquares} 
                        value = {this.state.counter} 
                        square_amt = {this.state.square_amt} 
                        qnt = {this.state.line_amt} 
                    />
  
            }            
        }
        this.setState({squares: grid})  
    }

    changeSquares = (x, y) => {

        let grid = this.state.squares
        let aux = grid[x][y]
        
        if(grid[x][y+1]){
            if(grid[x][y+1].props.value == 9){
                grid[x][y] = grid[x][y+1]
                grid[x][y+1] = aux
            }
        }

        this.setState({squares: []},()=>{
            this.setState({squares: grid})
        })
    }

    render(){
        const { squares } = this.state
        return(
            <div style = {{ alignContent: 'center' }} className="App">
                <Drop getValue = {this.getValue} />
                <div style={{
                    marginLeft: '25%',
                    display: 'flex', 
                    flexDirection: 'column', 
                    maxWidth: '500px', 
                    maxHeight: '500px', 
                    minHeight:'500px', 
                    minWidth: '500px',
                    flexWrap: 'wrap'
                }} >
                    {
                        squares.map(square => <div style={{ display: 'flex' }} > {square} </div> )
                    }
                </div>
            </div>
        )
    }
}