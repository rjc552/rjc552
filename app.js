
let x = "pg1";
function change_text(){
    
   if (x== "pg1"){ 
    x = "pg2"
    document.getElementById("p").innerHTML = 
    "'We have become irrevocably involved with, and responsible for, each other.' Luhan discusses how emerging media forms, particlarly the television, has connected society in a way it had not been before. He states that 'the living room has become a voting booth' because individuals now have political engagement due to new access to information. <br> Today, this concept is more relevent than ever. Social Media and Smartphones have made it so we all have 'access' to each other in a way we had never had before.  Social Media can be seen as an extension of the 'villages' that humankind used to live in. In a village, everyone knows about everyone else, and there is sometimes a 'filtering' process: what values does the village have? Who do we outcast? Cancel culture and the conglomeration of political opinions online can reflect the operations of villages, instead being 'global villages' ";
    document.getElementById("p").style.color = "red";
    }
   else {
    x = "pg1"
    document.getElementById("p").innerHTML = "All <br> media <br> are <br>extensions<br>of <br>some <br>human <br>faculty— <br>psychic <br>or physical."
    document.getElementById("p").style.color = "white";
    
}
}

