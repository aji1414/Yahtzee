import React, {Component} from "react";
import "./Rules.styles.scss";
import {handleUpper, handleXOfKind, handleFullHouse, handleStraight, handleChance} from "./Rules.js";

class Rules extends Component{
    state={
        totalScore: 0
    }

    newScore = (score) => {
        this.setState({totalScore: this.state.totalScore + score,}, () => {
            this.props.resetRolls();
        })
    }

    upper = (diceArray, diceNumber) => {
        let score = handleUpper(diceArray, diceNumber);
        this.newScore(score);
    };

    xOfKind = (diceArray, kindType) => {
        let score = handleXOfKind(diceArray, kindType);
        this.newScore(score);
    };

    fullHouse = (diceArray) => {
        let score = handleFullHouse(diceArray);
        this.newScore(score);
    }

    straight = (diceArray, straightType) => {
        let score = handleStraight(diceArray, straightType);
        this.newScore(score);
    }

    chance = (diceArray) => {
        let score = handleChance(diceArray);
        this.newScore(score);
    }

    render(){
        const {dice} = this.props;

        return(
            <div className="rules d-flex flex-column ">
            <div className="upper-rules">
                <h1 className="title-rules">Upper</h1>
                <table>
                    <tbody>
                        <tr onClick={() => this.upper(dice, 1)}><td>Ones</td><td>1pt per 1</td></tr>
                        <tr onClick={() => this.upper(dice, 2)}><td>Two's</td><td>2pts per 2</td></tr>
                        <tr onClick={() => this.upper(dice, 3)}><td>Three's</td><td>3pts per 3</td></tr>
                        <tr onClick={() => this.upper(dice, 4)}><td>Four's</td><td>4pts per 4</td></tr>
                        <tr onClick={() => this.upper(dice, 5)}><td>Five's</td><td>5pts per 5</td></tr>
                        <tr onClick={() => this.upper(dice, 6)}><td>Six's</td><td>6pts per 6</td></tr>
                    </tbody>
                </table>
            </div>

            <div className="lower-rules">
                <h1 className="title-rules">Lower</h1>
                <table>
                    <tbody>
                        <tr onClick={() => this.xOfKind(dice, 3)}><td>3 of kind</td><td>Sum 3 equivalent dice </td></tr>
                        <tr onClick={() => this.xOfKind(dice, 4)}><td>4 of kind</td><td>Sum 4 equivalent dice</td></tr>
                        <tr onClick={() => this.fullHouse(dice)}><td>Full House</td><td>25pts for full house</td></tr>
                        <tr onClick={() => this.straight(dice, 4)}><td>Small Straight</td><td>30pts for small straight</td></tr>
                        <tr onClick={() => this.straight(dice, 5)}><td>Large Straight</td><td>40pts for large straight</td></tr>
                        <tr onClick={() => this.xOfKind(dice, 5)}><td>Yahtzee</td><td>50pts for yahtzee</td></tr>
                        <tr onClick={() => this.chance(dice)}><td>Chance</td><td>Sum all dice</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 className="total-score">TOTAL SCORE IS: {this.state.totalScore} </h3>
        </div>
        )
    }

};

export default Rules;