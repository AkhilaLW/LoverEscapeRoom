

//Runs at the Start Page, sets initial variables
function setStorage(){
 sessionStorage.setItem("hasKey",false);
 sessionStorage.setItem("trueCode","1594198936178");
 sessionStorage.setItem("guesses", 3);



 
 
}
//changes the front door text if the player has gotten the key
  
function openDoor(){
     let key = sessionStorage.getItem("hasKey");
     if (key == "true"){
      
      win = document.querySelector("main");
      win.innerHTML = "<p>Do you want to use your key?</p> <button class=\"button\" onclick=\"gotoWin()\">Use Key</button>";
     }
    
    
}

//only allows player access to the Reputation Room if they have not gotten the key
function gotTheKey(){

 let key = sessionStorage.getItem("hasKey");
 //alert("hasKey: " + key);

 if (key == "false"){
     

    window.location.href="reputation.html";
} else{
     alert("Go to the front door");
}
 
 
}

//takes player to the first room when they choose to play the game
function startGame(){
     window.location.href = "ts.html";
}


function gotoWin(){
     window.location.href = "Escape.html";
}


function goToRep(){
      gotTheKey();
     //window.location.href = "reputation.html";
    
    
     
     
     
     //gotKey();
     //alert("Key: "+ key);
          
     
}
function checkCode(){
     
     let trueCode=sessionStorage.getItem("trueCode");
     code = document.querySelector('#textboxid').value;
     let guessL = parseInt(sessionStorage.getItem("guesses"));
     //alert("guesses: " + guessL);
     
    if (code == trueCode) {
         sessionStorage.setItem('hasKey', true);
     //alert("key: " + sessionStorage.getItem("hasKey"));
         change = document.querySelector("main");
        // alert("key: " + sessionStorage.getItem("hasKey"));
         change.innerHTML = "<p> The vault opens and you grab some money in the bag and a key</p>";
   
        
         
      }
     else{
     
      
      guessL = (guessL) - 1;
      if (guessL > 0){
      sessionStorage.setItem("guesses", guessL);
      alert("guesses left: " + guessL);
      alert("Hint: Order that the original albums were released.");
      }
      else{
          window.location.href = "stuck.html";   
          }
      
          
     }
}
function playAgain(){
 window.location.href="start.html";
}

/*function wrongGuess(){
 let chances= sessionStorage.getItem("guesses");
 chances --;
 sessionStorage.setItem("guesses, chances");
 if (chances > 0){
  chanceMessage = document.querySelector("main");
  let message = "<p>You have " + chances + " guesses left.</p>";
  chanceMessage.innerHTML = message;
 }
 
 else{
  window.location.href= "stuck.html";
  
 }
}*/

function debug(){
     let keyTrue = sessionStorage.getItem("hasKey");
     alert("key: " + keyTrue);
     
     
}

