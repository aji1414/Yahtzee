import React from "react";
import "./Dice.styles.scss";

import Die from "../Die/Die.component";

function Dice({dice, rollsLeft, diceClick, rollDice}){
    return(
        <div className="dice">
            <a href="https://www.youtube.com/watch?v=AHDgpuEzopc&ab_channel=TripleSGames"><span className="instructions-video">How to play?</span></a>
            <h1 className="game-title">Yahtzee!</h1>

            <span className="roll-instructions">Click on die that you don't want to roll before clicking "roll dice"</span>

            <div className="dice-box d-flex justify-content-center px-3">
                {dice.map((die,index) => (
                    <Die 
                    key={index}
                    index={index} 
                    number={die[0]} 
                    visible={die[1]} 
                    diceClick={diceClick}/>
                ))}
            </div>

            <div className="game-buttons my-1 d-flex justify-content-around">
                <button onClick={() => rollDice()} className="roll-dice col-12">ROLL DICE: {rollsLeft} rolls left</button>
            </div>

        </div>
    )
};

export default Dice;