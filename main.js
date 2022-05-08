import Game from "./Game/Game.js";

function init(){
    var canvas = document.getElementById('gameCanvas');
    canvas.width = 1600;
    canvas.height = 800;
    
    //Global variables:
    
    var game_difficult = 0; //Game difficult 0 - for normal, 1 - for hard
    var bscore_normal = 0;  //Best score for normal difficult
    var bscore_hard = 0;    //Best score for hard difficult
    var play_sound = 0;     //Sound = 0 - off, sound = 1 - on
    var key = {};
    const mouse = {
        x: canvas.width/2,
        y: canvas.height/2,
        click: false
    }
    
    const audio = new Audio('sounds/soundtrack.mp3');   //Game soundtrack
    audio.loop = true;

    //Functions called on click:
    function startGame(){
        document.getElementById("start").hidden = true;
        document.getElementById("game").hidden = false;
        document.getElementById("game-over").hidden = true;
        var game = new Game(game_difficult, canvas, mouse, key, gameOver);
        game.run();
    }
    
    function printInstruction(){
        document.getElementById("start").hidden = true;
        document.getElementById("instruction").hidden = false;
    }
    
    function back(){
        document.getElementById("start").hidden = false;
        document.getElementById("game").hidden = true;
        document.getElementById("game-over").hidden = true;
        document.getElementById("instruction").hidden = true;
    }
    
    function gameOver(score){
        if(game_difficult == 0){
            if(bscore_normal < score){
                bscore_normal = score;
                document.getElementById("best_score").innerHTML = bscore_normal;
            }
        }
        else{
            if(bscore_hard < score){
                bscore_hard = score;
                document.getElementById("best_score").innerHTML = bscore_hard;
            }
        }
        document.getElementById("game").hidden = true;
        document.getElementById("game-over").hidden = false;
        document.getElementById("your_score").innerHTML = score;
    }
    
    function changeDifficult(){
        if(game_difficult == 0) {
            game_difficult = 1;
            document.getElementById("difficult").innerHTML = "hard&#128293;";
            document.getElementById('difficult').style.color='#fec6ad';
            document.getElementById("best_score").innerHTML = bscore_hard;
        }
        else {
            game_difficult = 0;
            document.getElementById("difficult").innerHTML = "normal";
            document.getElementById('difficult').style.color='#fffdac';
            document.getElementById("best_score").innerHTML = bscore_normal;
        }
    }
    
    function playSound(){
        if(play_sound == 0){
            play_sound = 1;
            document.getElementById("sound_button").src="imgs/volume.png";
            audio.play();
        }
        else if(play_sound == 1){
            play_sound = 0;
            document.getElementById("sound_button").src="imgs/mute.png";
            audio.pause();
        }
    }

    document.getElementById("sound_button").onclick = playSound;
    document.getElementById("instruction_button").onclick = printInstruction;
    document.getElementById("difficult_button").onclick = changeDifficult;
    document.getElementById("start_button").onclick = startGame;
    document.getElementById("restart_button").onclick = startGame;
    document.getElementById("back1_button").onclick = back;
    document.getElementById("back2_button").onclick = back;
    
    canvas.addEventListener('mousemove', function(event) {
        mouse.x = event.pageX - canvas.offsetLeft;
        mouse.y = event.pageY - canvas.offsetTop;
    });

    canvas.addEventListener('click', e => {
        mouse.click = true;
    });
    
    window.onkeydown = function(event){
        key[event.keyCode] = true;
    };
    
    window.onkeyup = function(event){
        key[event.keyCode] = false;
    };
}

window.onload = function(){
    init();
}