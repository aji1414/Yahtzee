export const handleUpper = (diceArray, diceNumber) => {
    let total = 0;

    for (var i = 0; i < diceArray.length; i++){
        if(diceArray[i][0] === diceNumber){
            total += diceNumber;
        }
    }
    
    return total;
};

export const handleXOfKind = (diceArray, kindType) => {
    let counter = {};
    let winner = 0;
    
    diceArray.forEach(element => {
        let currentDiceNo = element[0];
        if (counter[currentDiceNo]){
            counter[currentDiceNo] ++;
            if(counter[currentDiceNo] === kindType){
                winner = currentDiceNo;
            }
        }
        else{counter[currentDiceNo] = 1;}
    });
    
    if (winner !== 0){
        return winner * kindType;
    }
    return 0;
};

export const handleFullHouse = (diceArray) => {
    let counter = {};
    let winner = true;
    diceArray.forEach(element => {
        let currentDiceNo = element[0];
        if(counter[currentDiceNo]){winner = false;}
        else{counter[currentDiceNo] = 1;}
    })
    if(winner === true) return 25;
}

export const handleStraight = (diceArray, straightType) => {
    diceArray.sort();
    let streak = 1;

    for(var i = 1; i < diceArray.length; i++){
        if(diceArray[i][0] === diceArray[i - 1][0] + 1){
            streak ++;
            if(streak === straightType){
                if(straightType === 4) return 30;
                else if(straightType === 5) return 40;
            }
        }
        else{streak = 0}
    }
    return 0;
}

export const handleChance = (diceArray) => {
    let total = 0;
    diceArray.forEach(element => {
        total += element[0];
    })
    return total;
}