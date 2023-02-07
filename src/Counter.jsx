import React from "react";
import attack from "./images/attack.png";
import defend from "./images/defend.png"
class Counter extends React.Component{

    constructor(props){
        super(props);
        this.handleAttack = this.handleAttack.bind(this);
        this.handleDefence = this.handleDefence.bind(this);
        this.state = {
            count:0,
            lastPlay: '',
            status:''
        }
    }
    handleAttack(){
        this.setState((previousState) => {
            let newCount = previousState.count + Math.round(Math.random()* 10);
            if(newCount == 10){
                previousState.lastPlay = "Attack";
                previousState.status = "Winning"
            }else if(newCount == -10){
                previousState.lastPlay = "Attack";
                previousState.status = "Losing"
            }
            return{
                count : newCount,
                
            }
        })
    }

    handleDefence(){
        this.setState((previousState) => {
            let newCount = previousState.count - Math.round(Math.random()*10);
            if(newCount == -10){
                previousState.lastPlay = "Defence";
                previousState.status = "Losing"
            }else if(newCount == 10){
                previousState.lastPlay = "Defence";
                previousState.status = "Winning"
            }
            return{
                count : newCount,
            }
        })
    }

    handleRandom = () =>{
        let playMode = Math.round(Math.random());

        if(playMode == 0){
            this.handleAttack();
        }else{
            this.handleDefence();
        }
    }
    handleReset = () =>{
        this.setState((previousState) =>{
            return{
                count : 0,
            }
        })
    }
    render(){
        return(
            <div className="row text-white text-center">
                <h1>Game Score :  {this.state.count}</h1>
                <p>Every points you will received +10 points and every defence you will have -10points</p>
                <p>Last Play : {this.state.lastPlay} </p>
                <h3>Game Status : {this.state.status}</h3>
                <div className="col-6 col-md-3 offset-md-3">
                    <img style={{
                            width : "100%",
                            cursor: "pointer",
                            border : "1px solid green"
                        }} 
                        className="p-4 rounded"
                        src={attack} 
                        onClick={this.handleAttack} />
                </div>
                <div className="col-6 col-md-3">
                    <img style={{
                            width : "100%",
                            cursor: "pointer",
                            border : "1px solid red"
                        }} 
                        className="p-4 rouned"
                        src={defend}
                        onClick={this.handleDefence} />
                </div>
                <div className="col-12 col-md-4 offset-md-4">
                    <button className="btn btn-secondary w-100 mt-2"
                            onClick={this.handleRandom}>Random Play</button>
                    <br/>
                    <button className="btn btn-warning w-100 mt-2"
                    onClick={this.handleReset}>Reset</button>    
                </div>
                    
               
                {/* <button onClick={this.handleAttack} style={{width : 200}}>+1</button>
                <button onClick={this.handleDefence} style={{width : 200}}>-1</button> */}
            </div>
        )
    }
}

export default Counter;