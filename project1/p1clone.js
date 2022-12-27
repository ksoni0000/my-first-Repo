const { functions } = require("lodash");

function rpsGame(yourChoice){
    var humanChoice,botChoice;
    humanChoice=yourChoice.id;
    botChoice=randIntToRps(randInt());
    var results= decideWinner(humanChoice,botChoice);
    var message= finalMessage(results);
    document.getElementById('flex-box-rps').appendChild(message);
//    rpsFrontEnd(humanChoice,botChoice,message);
}

function randInt(){
    return Math.floor(Math.random()*3);
}

function randIntToRps(number){
    ['rock','paper','scissors'][number];
}

function decideWinner(humanChoice,botChoice){
    var rpsDatabase={
        'rock':{'rock':0.5,'paper':0,'scissors':1},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'rock':0,'paper':1,'scissors':0.5}
    }

    var humanScore=rpsDatabase[humanChoice][botChoice];
    var botScore=rpsDatabase[botChoice][humanChoice];

    return [humanScore,botScore];
}

function finalMessage([humanScore,botScore]){
    if(humanScore===1){
        return {'message':'You Won','color':'green'}
    }
    else if(humanScore===0){
        return {'message':'You Lost','color':'red'}
    }
    else if(humanScore===0.5){
        return {'message':'Its a Tie','color':'yellow'}
    }
}


/*function rpsFrontEnd(humanChoice,botChoice,message){

}*/