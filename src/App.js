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
        this.setState({squares: grid}, ()=>{
            this.randomSquares()
        })
        
    }

    randomSquares = () =>{
        const grid = this.state.squares
        let random = 0
        let randoms = []
        while(randoms.length < this.state.square_amt ){
            random = Math.floor(Math.random() * (this.state.square_amt - 0)) + 0
            randoms = [...randoms.filter(number => number !== random), random ]
        }
        
        randoms.map(numbers => {
            console.log(numbers)
        })

        //for(){
        //    grid i x y = grid random xy
        //}

        grid.map(
            squares => {
                squares.map(
                    square => {
                        console.log(square.props.value)
                    }
                )
            }
        )

        this.setState({squares: grid})
    }

    changeSquares = (x, y) => {

        let grid = this.state.squares

        if(grid[x][y+1] && grid[x][y+1].props.value === 9){
            let atual = grid[x][y].props
            let seguinte = grid[x][y+1].props

            grid[x][y] = <Quadrado
                x = {atual.x}
                y = {atual.y}
                changeSquares = {this.changeSquares} 
                value = {seguinte.value} 
                square_amt = {this.state.square_amt} 
                qnt = {this.state.line_amt} 
            />

            grid[x][y+1] = <Quadrado
                x = {seguinte.x}
                y = {seguinte.y}
                changeSquares = {this.changeSquares} 
                value = {atual.value} 
                square_amt = {this.state.square_amt} 
                qnt = {this.state.line_amt} 
            />
        }else if(grid[x][y-1] && grid[x][y-1].props.value === 9){
            let atual = grid[x][y].props
            let anterior = grid[x][y-1].props

            grid[x][y] = <Quadrado
                x = {atual.x}
                y = {atual.y}
                changeSquares = {this.changeSquares} 
                value = {anterior.value} 
                square_amt = {this.state.square_amt} 
                qnt = {this.state.line_amt} 
            />

            grid[x][y-1] = <Quadrado
                x = {anterior.x}
                y = {anterior.y}
                changeSquares = {this.changeSquares} 
                value = {atual.value} 
                square_amt = {this.state.square_amt} 
                qnt = {this.state.line_amt} 
            />
        }else if(grid[x+1] && grid[x+1][y].props.value === 9){
            let atual = grid[x][y].props
            let baixo = grid[x+1][y].props

            grid[x][y] = <Quadrado
                x = {atual.x}
                y = {atual.y}
                changeSquares = {this.changeSquares} 
                value = {baixo.value} 
                square_amt = {this.state.square_amt} 
                qnt = {this.state.line_amt} 
            />

            grid[x+1][y] = <Quadrado
                x = {baixo.x}
                y = {baixo.y}
                changeSquares = {this.changeSquares} 
                value = {atual.value} 
                square_amt = {this.state.square_amt} 
                qnt = {this.state.line_amt} 
            />
        }else if(grid[x-1] && grid[x-1][y].props.value === 9){
            let atual = grid[x][y].props
            let baixo = grid[x-1][y].props

            grid[x][y] = <Quadrado
                x = {atual.x}
                y = {atual.y}
                changeSquares = {this.changeSquares} 
                value = {baixo.value} 
                square_amt = {this.state.square_amt} 
                qnt = {this.state.line_amt} 
            />

            grid[x-1][y] = <Quadrado
                x = {baixo.x}
                y = {baixo.y}
                changeSquares = {this.changeSquares} 
                value = {atual.value} 
                square_amt = {this.state.square_amt} 
                qnt = {this.state.line_amt} 
            />
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