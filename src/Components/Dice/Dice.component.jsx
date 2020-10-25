import React from "react";
import "./Dice.styles.scss";

import Die from "../Die/Die.component";

function Dice({dice, rollsLeft, diceClick, rollDice}){
    return(
        <div className="dice">

            <h1 className="game-title pt-3">Yahtzee!</h1>

            <div className="dice-box d-flex justify-content-center">
                {dice.map((die,index) => (
                    <Die 
                    key={index}
                    index={index} 
                    number={die[0]} 
                    visible={die[1]} 
                    diceClick={diceClick}/>
                ))}
            </div>

            <div className="game-buttons mb-2">
                <div className="rolls-left">{rollsLeft} rolls left</div>
                <button onClick={() => rollDice()} className="roll-dice">ROLL DICE</button>
            </div>

        </div>
    )
};

export default Dice;