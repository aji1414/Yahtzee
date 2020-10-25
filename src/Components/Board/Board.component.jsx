import React, {Component} from "react";
import "./Board.styles.scss";

import Dice from "../Dice/Dice.component";
import Rules from "../Rules/Rules.component";

class Board extends Component{

    state={
        dice:[[1, true],[2, true],[3, true],[4, true],[5, true]],
        rollsLeft: 2,
        totalScore:0
    }

    diceClick = (diceNo) => {
        this.setState({
            dice: this.state.dice.map((stateDice, index) =>{                       
                if (index === diceNo) return [stateDice[0], !stateDice[1]];
                else return stateDice;
            })
        });
    }

    rollDice = () =>{
        // alert user if no more rolls left
        if(this.state.rollsLeft === 0) return alert("No Rolls Left, pick a scoring!")

        // define empty array for new dice numbers and push random numbers in
        let newDiceNumbers = [];
        for (var i = 0; i < 5; i++) {newDiceNumbers.push(this.randomNumber())};
        
        this.setState({
            rollsLeft: this.state.rollsLeft - 1,
            dice: this.state.dice.map((stateDice, index) =>{
                // if dice isn't greyed out, assign it the new random number
                if(stateDice[1] === true) return [newDiceNumbers[index], true];
                // if dice is greyed out, return original numbers
                else return stateDice;
            })
        })
        
    }

    randomNumber = () => {
        return Math.floor(Math.random() * 6) + 1;
    }

    render(){
        return(
            <div className="board p-0 d-flex flex-column col-10 col-sm-4">
                <Dice 
                diceClick={this.diceClick}
                rollDice={this.rollDice} 
                dice={this.state.dice} 
                rollsLeft={this.state.rollsLeft}/>
                <Rules totalScore={this.state.totalScore}/>
            </div>
        )
    }
}

export default Board;