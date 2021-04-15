
var spooky = new Audio('music.mp3');


$(document).ready(function(){

    var gameState = "begin"; 

    $(function(){
        $('#answerA','#answerB').hover(function(){
            $(this).css('background-color', '#ffd476');
        })
    });
    $('#answerA').click(function(){
        if(gameState === "begin"){ //question: ready to play? answer: yes
            alert("Great!");
            spooky.play();
            gameState = "room1";
            updateScreen();
        }else if(gameState === "room1"){//question: scared of dark? answer: yes
            gameState = "roomDark";
            updateScreen();
        }else if(gameState === "roomDark"){ //question: You cannot see.. Is someone is the room? ans: yes
            gameState = "bedGhost";
            updateScreen();
        }
        else if(gameState === "bedGhost"){ //question: friend arrived ans: who is that?
            gameState = "badend1";
            updateScreen();
        }
        else if(gameState === "outside"){ //question: Then someone is outside... where are they? ans: out the window
            gameState = "window";
            updateScreen();
        }
        else if(gameState === "spiderQ"){ //question: are you afraid of spiders? ans: yes
            gameState = "spiders";
            updateScreen();
        }
        else if(gameState === "spiders"){ //question: Yikes! What will you do? ans: stay still
            gameState = "goodend2";
            updateScreen();
        }
        else if(gameState === "window"){ //question: ... Do you see that? ans: I see it!
            gameState = "bedGhost";
            updateScreen();
        }
        else if(gameState === "door"){ //question: ... Do you see that? ans: What is that?!
            gameState = "badend1";
            updateScreen();
        }


        });

    $('#answerB').click(function(){
        if(gameState === "begin"){ //question: ready to play? answer: no
            alert("You must play. ");
        }
        else if(gameState === "room1"){
            gameState = "spiderQ"; //question: afraid of dark? ans: no
            updateScreen();
        }
        else if(gameState === "roomDark"){
            gameState = "outside"; //question: is someone in the room? ans: no
            updateScreen();
        }
        else if(gameState === "spiderQ"){
            gameState = "boring"; //question: are you afraid of spiders? ans: no
            updateScreen();
        }
        else if(gameState === "bedGhost"){
            gameState = "goodend1"; //question: friedn arrived ans: stay quiet
            updateScreen();
        }
        else if(gameState === "outside"){ //question: Then someone is outside... where are they? ans: behind the door
            gameState = "door";
            updateScreen();
        }
        else if(gameState === "spiders"){ //question: Yikes! What will you do? ans: Smack the spiders
            gameState = "badend2";
            updateScreen();
        }
        else if(gameState === "window"){ //question: Do you see that ans: It's not real..
            gameState = "goodend1";
            updateScreen();
        }
        else if(gameState === "door"){ //question: Do you see that ans: It's not real..
            gameState = "goodend1";
            updateScreen();
        }
        else if(gameState === "goodend1"){ //question: Do you see that ans: It's not real..
            gameState = "begin";
            updateScreen();
        }
        else if(gameState === "goodend2"){ //question: Do you see that ans: It's not real..
            gameState = "begin";
            updateScreen();
        }
        else if(gameState === "boring"){ //question: Do you see that ans: It's not real..
            gameState = "begin";
            updateScreen();
        }
        else if(gameState === "badend1"){ //question: Do you see that ans: It's not real..
            gameState = "begin";
            updateScreen();
        }
        else if(gameState === "badend2"){ //question: Do you see that ans: It's not real..
            gameState = "begin";
            updateScreen();
        }
    }); 
    //13 gamestates
    //3 gamestates complete: begin, room1, roomDark, 
    //10 gamestates left: bedGhost, badend1, goodend1, spiderQ, boring, spiders,goodend2, badend2, window, door

    function updateScreen(){
        if(gameState === "begin"){
            $('#background').css('background-image','url(Room.png)');
            $('#question').text("Ready to play?")
            $('#answerA').show();
            $('#answerA').text("Yes");
            $('#answerB').text("No");
        }
         if(gameState === "room1"){
            // $('#question').text(); <- this was removed and replaced by the shuffle letters function for all the following 
            $('#question').shuffleLetters({
                "text": "Are you afraid of the dark?"
            });
            
            $('#answerA').text("Yes");
            $('#answerB').text("No");
            
        }else if(gameState === "roomDark"){
            $('#background').css('background-image','url(Dark.png)'); //jQuery
            $('#question').shuffleLetters({
                "text": "It's hard to see... is someone in the room?"
            });
            $('#answerA').text("Yes");
            $('#answerB').text("No");
        }
        else if(gameState === "outside"){
            $('#background').css('background-image','url(Dark.png)'); //image incomplete
            $('#question').shuffleLetters({
                "text": "Then someone is outside...where?"
            });
            $('#answerA').text("Out the window");
            $('#answerB').text("Behind the door");
        }
        else if(gameState === "bedGhost"){
            $('#background').css('background-image','url(BedGhost.png)'); //Bed Ghost
            $('#question').shuffleLetters({
                "text": "A friend has arrived...."
            });
            $('#answerA').text("'Who are you?!'");
            $('#answerB').text("Stay quiet..");
        }
        //TO BE COMPLETED
        else if(gameState === "badend1"){
            $('#background').css('background-image','url(Badend1.png)'); //Ghost up close
            $('#question').shuffleLetters({
                "text": "It heard you....Goodbye..."
            });
            $("#answerA").hide();
            $("#answerB").text("Restart");
        }
        else if(gameState === "goodend1"){
            $('#background').css('background-image','url(Dark.png)'); //image incomplete
            $('#question').shuffleLetters({
                "text": "It's gone....looks you live another day..."
            });
            $("#answerA").hide();
            $("#answerB").text("Restart");
        }
        else if(gameState === "spiderQ"){
            $('#background').css('background-image','url(Room.png)'); //image incomplete
            $('#question').shuffleLetters({
                "text": "Are you afraid of spiders?"
            });
            $('#answerA').text("Yes");
            $('#answerB').text("No");
        }
        else if(gameState === "spiders"){
            $('#background').css('background-image','url(spiders.png)'); //Spiders!
            $('#question').shuffleLetters({
                "text": "Yikes, that's too bad for you."
            });
            $('#answerA').text("Stay still");
            $('#answerB').text("Smack the spiders!");
        }
        else if(gameState === "boring"){
            $('#background').css('background-image','url(Room.png)'); //image incomplete
            $('#question').shuffleLetters({
                "text": "Not afraid of anything? How boring..."
            });
            $("#answerA").hide();
            $("#answerB").text("Restart");
        }
        else if(gameState === "window"){
            $('#background').css('background-image','url(WindowGhost.png)'); //Window Ghost!
            $('#question').shuffleLetters({
                "text": "Do you see that in the window?"
            });
            $('#answerA').text("I see it!");
            $('#answerB').text("It's not real...");
        }
        else if(gameState === "door"){
            $('#background').css('background-image','url(DoorGhost.png)'); //Door Ghost
            $('#question').shuffleLetters({
                "text": "Do you see that in the doorway?"
            });
            $('#answerA').text("'What is that?!'");
            $('#answerB').text("It's not real...");
        }
        else if(gameState === "goodend2"){
            $('#background').css('background-image','url(Room.png)'); //image incomplete
            $('#question').shuffleLetters({
                "text": "The spiders scuttle away. Safe!"
            });
            $("#answerA").hide();
            $("#answerB").text("Restart");
        }
        else if(gameState === "badend2"){
            $('#background').css('background-image','url(badend2.png)'); //Giant spiders!
            $('#question').shuffleLetters({
                "text": "The spiders grow bigger...it's over..."
            });
            $("#answerA").hide();
            $("#answerB").text("Restart");
         }; 
    }
})(jQuery);