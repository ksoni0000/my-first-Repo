//finding age in years

//const { message } = require("statuses");

//MY METHOD
/* function output(){
    let input=prompt('Enter your Birth Year:');
    let ageindays='You are '+((2021-input)*365)+' Days old';
    document.getElementById('flex-box-result').innerHTML=ageindays;
} */



// INSTRUCTORS METHOD   (much much better way)
function ageInDays(){
    let birthYear=prompt('Birth Year:');        //to take the input he used prompt same as me
    let ageInDayss=(2021-birthYear)*365;         //logic part  
    let h1=document.createElement('h1');          //this is a method used to create an element in the html but dynamically i.e. from a js document
                                                   //he created an var h1 and gave it the html element of h1(header1)
    let textAnswer=document.createTextNode('You are '+ageInDayss+' days old');   //now to create a text that is to be printed on the page this is how it is done dynamically 
    h1.setAttribute('id','ageInDays');                          ////////  STILL A DOUBT //setting attribute  means making some changes in it and giving it a new value
    h1.appendChild(textAnswer);                           //to combine the text to h1 we use apendchild and this is the syntax 
    document.getElementById('flex-box-result').appendChild(h1);   //this is same as above just variables have changed and the syntax is different use is same  
}                                                                  //in simple lang value on right of dot is appended into the value left of dot 


function reset(){
    document.getElementById('ageInDays').remove();
}



////project 2 starts from here

function generateCat() {
    let image=document.createElement('img');
    image.src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
    let div= document.getElementById('flex-cat-generator');                              //////DOUBT -why can we write this line as document.getElementById('flex-cat-generator').apendChild(image);
    div.appendChild(image);
}



/////project 3 starts here

function rpsGame(yourChoice){
    
    var humanChoice, botChoice;
    humanChoice=yourChoice.id;                          //now this is just the skeleton of what our js code would  be like , all the functions and variable and how we are going to use them
    botChoice=rpsToInt(randToRpsInt());                 //there will be a human choice and a bot choice human choice will be yourChoice.id and bot choice will be random                                                      
    var result=decideWinner(humanChoice,botChoice);     // there will be a  variable result the contains a function which takes in the argument of humanchoice and botchoice and will return whether bot won or human or it is a tie
    //                                                  //this will be in the form of array like[0,1] which means human lost bot won or [0.5, 0.5] means it is a tie 
     var message=finalMessage(result);                  //the final message will take in result and dsplay who won            
    rpsFrontEnd(humanChoice,botChoice,message);         //this is the front end part where it shows the human and bot choice and also displays the score . so this function will take in human and bot choice and also the message
}

function randToRpsInt(){                                //this is a function that will randomnly select a number from 0,1,2  
    return Math.floor(Math.random()*3);                 //so the idea is that the random num generated will be then appended with array[rock,paper,scissor]  and choose either of the three using the random index no generated
}

function rpsToInt(number){                              //this function will take a num as argument and return rock,paper,or scissors 
    return ['rock','paper','scissors'][number];
}

function decideWinner(humanChoice, botChoice){          //this function will take human and bot choice as argument and  returns a  arraylike [1,0] or [0,1] or [0.5,0.5]    
    var rpsDatabase={
        'rock': {'scissors':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0}
    };

    var yourScore=rpsDatabase[humanChoice][botChoice];
    var compScore=rpsDatabase[botChoice][humanChoice];
    
    return [yourScore,compScore]; 
}

function finalMessage([yourScore,compScore]){             //this function will take that array from the last function and printf the message of who won using if else
    if(yourScore===1){
        return {'message':'You Won','color':'green'}
    }
    else if(yourScore===0){
        return {'message':'You Lost','color':'red'}
    }
    else if(yourScore===0.5){
        return {'message':'Its a Tie','color':'yellow'}
    }
}

function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage)    //this is the trickiest function this will  take the human choice, bot choice and the message and....
{                                                // show the actual result on the webpage and also remove the previous images and only print the human and bot choice  image and the result 
    var imagesDataBase={                            //image sources of all three
        'rock':document.getElementById('rock').src,            
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }

    //removing all images

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
 
    //creating divs of the humanchoice image botChoice image and the message to be displayed
    var humanDiv=document.createElement('div');              
    var botDiv=document.createElement('div');
    var messageDiv=document.createElement('div');
 
    //this is the html part that we are dynamically doing it from js where only the human and bot image and the message will be displayed rest everything will be removed
    humanDiv.innerHTML="<img src='"+imagesDataBase[humanImageChoice]+"'height=150 width =150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";  
    messageDiv.innerHTML="<h1 style='color :"+finalMessage['color']+ ";font-size: 60px; padding : 30px;'>"+finalMessage['message']+"</h1>"
    botDiv.innerHTML="<img src='"+imagesDataBase[botImageChoice]+"'height=150 width =150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";  
  
    //and this appending
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);   
}