import React from "react";
import "./Rules.styles.scss";

function Rules({totalScore}){
    return(
        <div className="rules d-flex flex-column ">
            <div className="upper-rules">
                <h1 className="title-rules">Upper</h1>
                <table>
                    <tr><td>Ones</td><td>1pt per 1</td></tr>
                    <tr><td>Two's</td><td>2pts per 2</td></tr>
                    <tr><td>Three's</td><td>3pts per 3</td></tr>
                    <tr><td>Four's</td><td>4pts per 4</td></tr>
                    <tr><td>Five's</td><td>5pts per 5</td></tr>
                    <tr><td>Six's</td><td>6pts per 6</td></tr>
                </table>
            </div>

            <div className="lower-rules">
                <h1 className="title-rules">Lower</h1>
                <table>
                    <tr><td>3 of kind</td><td>Sum 3 equivalent dice </td></tr>
                    <tr><td>4 of kind</td><td>Sum 4 equivalent dice</td></tr>
                    <tr><td>Full House</td><td>25pts for full house</td></tr>
                    <tr><td>Small Straight</td><td>30pts for small straight</td></tr>
                    <tr><td>Large Straight</td><td>40pts for small straight</td></tr>
                    <tr><td>Yahtzee</td><td>50pts for yahtzee</td></tr>
                    <tr><td>Chance</td><td>Sum all dice</td></tr>
                </table>
            </div>


    <h3 className="total-score">TOTAL SCORE IS: {totalScore}</h3>
        </div>
    )
};

export default Rules;