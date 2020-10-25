import React, {Component} from "react";
import "./Die.styles.scss";

class Die extends Component {

    render(){
        let {number, visible, diceClick, index} = this.props;
        let numberToString = {
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six"
        }
        let stringOfNumber = numberToString[number];

        return(
            <div className="die-outside">
                {visible 
                ? <i onClick={() => diceClick(index)}className={"die fas fa-dice-" + stringOfNumber + " visible mx-2"}></i>
                : <i onClick={() => diceClick(index)}className={"die fas fa-dice-" + stringOfNumber + " greyed-out mx-2"}></i>}
            </div>
        )
    }
}

export default Die;