import React, {Component} from "react";
import "./Rules.styles.scss";
import {handleUpper, handleXOfKind, handleFullHouse, handleStraight, handleChance} from "./Rules.js";

class Rules extends Component{
    state={
        totalScore: 0,
        scoreVisible:[0,0,0,0,0,0,0,0,0,0,0,0,0],
        sectionScore: [false,false,false,false,false,false,false,false,false,false,false,false,false]
    }

    newScore = (score, rowCrossOff) => {
        this.setState({
            totalScore: this.state.totalScore + score,
            scoreVisible: this.state.scoreVisible.map((element, id) => {
                if (id === rowCrossOff) return "cross";
                else{return element};
            }),
            sectionScore: this.state.sectionScore.map((element, id) => {
                if (id === rowCrossOff) return score;
                else{return element};
            })}
            , () => {
            this.props.resetRolls("yes");
        })
        this.props.diceVisible();
    }

    upper = (diceArray, diceNumber, rowCrossOff) => {
        let score = handleUpper(diceArray, diceNumber);
        this.newScore(score, rowCrossOff);
    };

    xOfKind = (diceArray, kindType, rowCrossOff) => {
        let score = handleXOfKind(diceArray, kindType);
        this.newScore(score, rowCrossOff);
    };

    fullHouse = (diceArray, rowCrossOff) => {
        let score = handleFullHouse(diceArray);
        this.newScore(score, rowCrossOff);
    }

    straight = (diceArray, straightType, rowCrossOff) => {
        let score = handleStraight(diceArray, straightType);
        this.newScore(score, rowCrossOff);
    }

    chance = (diceArray, rowCrossOff) => {
        let score = handleChance(diceArray);
        this.newScore(score, rowCrossOff);
    }

    resetEntireGame = () => {
        this.setState({
            totalScore: 0,
            scoreVisible:[0,0,0,0,0,0,0,0,0,0,0,0,0],
            sectionScore: [false,false,false,false,false,false,false,false,false,false,false,false,false]
        });
        this.props.resetRolls();
        this.props.diceVisible();
    }

    render(){
        const {dice} = this.props;
        let gameEnd = false;
        if(!this.state.sectionScore.includes(false)) {gameEnd = true};

        return(
            <div className="rules d-flex flex-column ">
            <div className="upper-rules">
                <h1 className="title-rules">Upper</h1>
                <table>
                    <tbody>
        <tr className={this.state.scoreVisible[0]} onClick={() => this.upper(dice, 1,0)}><td>Ones</td><td>{this.state.sectionScore[0] !== false ? this.state.sectionScore[0] : "1pt per 1"}</td></tr>
                        <tr className={this.state.scoreVisible[1]} onClick={() => this.upper(dice, 2, 1)}><td>Two's</td><td>{this.state.sectionScore[1] !== false ? this.state.sectionScore[1] : "2pts per 2"}</td></tr>
                        <tr className={this.state.scoreVisible[2]} onClick={() => this.upper(dice, 3, 2)}><td>Three's</td><td>{this.state.sectionScore[2] !== false ? this.state.sectionScore[2] : "3pts per 3"}</td></tr>
                        <tr className={this.state.scoreVisible[3]} onClick={() => this.upper(dice, 4, 3)}><td>Four's</td><td>{this.state.sectionScore[3] !== false ? this.state.sectionScore[3] : "4pts per 4"}</td></tr>
                        <tr className={this.state.scoreVisible[4]} onClick={() => this.upper(dice, 5, 4)}><td>Five's</td><td>{this.state.sectionScore[4] !== false ? this.state.sectionScore[4] : "5pts per 5"}</td></tr>
                        <tr className={this.state.scoreVisible[5]} onClick={() => this.upper(dice, 6, 5)}><td>Sixes</td><td>{this.state.sectionScore[5] !== false ? this.state.sectionScore[5] : "6pts per 6"}</td></tr>
                    </tbody>
                </table>
            </div>

            <div className="lower-rules mb-3">
                <h1 className="title-rules">Lower</h1>
                <table className="mb-4">
                    <tbody>
                        <tr className={this.state.scoreVisible[6]} onClick={() => this.xOfKind(dice, 3, 6)}><td>3 of kind</td><td>{this.state.sectionScore[6] !== false ? this.state.sectionScore[6] : "Sum 3 equivalent dice"}</td></tr>
                        <tr className={this.state.scoreVisible[7]} onClick={() => this.xOfKind(dice, 4, 7)}><td>4 of kind</td><td>{this.state.sectionScore[7] !== false ? this.state.sectionScore[7] : "Sum 4 equivalent dice"}</td></tr>
                        <tr className={this.state.scoreVisible[8]} onClick={() => this.fullHouse(dice, 8)}><td>Full House</td><td>{this.state.sectionScore[8] !== false ? this.state.sectionScore[8] : "25pts for full house"}</td></tr>
                        <tr className={this.state.scoreVisible[9]} onClick={() => this.straight(dice, 4, 9)}><td>Small Straight</td><td>{this.state.sectionScore[9] !== false ? this.state.sectionScore[9] : "30pts for small straight"}</td></tr>
                        <tr className={this.state.scoreVisible[10]} onClick={() => this.straight(dice, 5, 10)}><td>Large Straight</td><td>{this.state.sectionScore[10] !== false ? this.state.sectionScore[10] : "40pts for large straight"}</td></tr>
                        <tr className={this.state.scoreVisible[11]} onClick={() => this.xOfKind(dice, 5, 11)}><td>Yahtzee</td><td>{this.state.sectionScore[11] !== false ? this.state.sectionScore[11] : "50pts for yahtzee"}</td></tr>
                        <tr className={this.state.scoreVisible[12]} onClick={() => this.chance(dice, 12)}><td>Chance</td><td>{this.state.sectionScore[12] !== false ? this.state.sectionScore[12] : "Sum all dice"}</td></tr>
                    </tbody>
                </table>
                {gameEnd === true
                    ? <div className="total-score"><h3 onClick={this.resetEntireGame}>YOU SCORED {this.state.totalScore}pts! PLAY AGAIN? </h3></div>
                    : <div className="total-score disabled"><h3>TOTAL SCORE IS: {this.state.totalScore} </h3></div>
                }
            </div>

            
            
        </div>
        )
    }

};

export default Rules;