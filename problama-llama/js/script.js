var sceneNum = 0
var audio = document.getElementById('audio');

var musicStart = 'assets/sfx/music_start.mp3';
var musicTrek = 'assets/sfx/music_trek.mp3';
var musicEnd = 'assets/sfx/endMusic_triumphant.mp3';

// setup to play sounds

let NOTES = ["E6", "D6", "C6", "B5", "A5", "G5", "F5", "E5", "D5", "C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4", "B3", "A3", "G3", "F3"];
let FREQ = [1318.51, 1174.66, 1046.5, 987.767, 880, 783.991, 698.456, 659.255, 587.33, 523.251, 493.883, 436.04, 392.44, 349.228, 329.628, 293.665, 261.626, 246.942, 220, 195.998, 174.614];


var context = null;
var oscillator = null;
function getOrCreateContext() {
    if (!context) {
        context = new AudioContext();
        oscillator = context.createOscillator();
        oscillator.connect(context.destination);
    }
    return context; 
}

var isStarted = false;
function playSound(frequency, type) {
    getOrCreateContext();
    oscillator.frequency.setTargetAtTime(frequency, context.currentTime, 0);
    if (!isStarted) {
    oscillator.start(0);
    isStarted = true;
    } else {
    context.resume();
    }
}

function stopSound() {
    context.suspend();
}

function playRelaxing() {
    var audio = document.getElementById('audio');
    var sample = new Audio('assets/sfx/endMusic_relaxing_short.mp3');
    /*
    audio.volume = 0.1;
    var sine1 = T("sin", {freq:440, mul:0.5});
    var sine2 = T("sin", {freq:660, mul:0.5});
    
    T("perc", {r:500}, sine1, sine2).on("ended", function() {
      this.pause();
    }).bang().play();
    T("perc", {r:500}, sine1, sine2).on("ended", function() {
        this.pause();
      }).bang().play();
  
*/
    
    audio.volume = .1;

    document.getElementById("audio").pause();
    sample.play();
    document.getElementById("audio").load();
    document.getElementById("audio").play();

    updateMusic('endMusic_relaxing.mp3');
    musicEnd = 'assets/sfx/endMusic_relaxing.mp3';

}

function playEasygoing() {
    var audio = document.getElementById('audio');
    var sample = new Audio('assets/sfx/endMusic_easygoing_short.mp3');

    audio.volume = .1;

    document.getElementById("audio").pause();
    sample.play();
    document.getElementById("audio").load();
    document.getElementById("audio").play();

    updateMusic('endMusic_easygoing.mp3');
    musicEnd = 'assets/sfx/endMusic_easygoing.mp3';

}

function playInspiring() {
    var audio = document.getElementById('audio');
    var sample = new Audio('assets/sfx/endMusic_triumphant_short.mp3');

    audio.volume = .1;

    document.getElementById("audio").pause();
    sample.play();
    document.getElementById("audio").load();
    document.getElementById("audio").play();

    updateMusic('endMusic_inspiring.mp3');
    musicEnd = 'assets/sfx/endMusic_triumphant.mp3';

}


// persisting variables
var llama;
var end_songLyrics;

// start game by popping up intro scene

function nextScene() {

    sceneNum++;

    var audio = document.getElementById('audio');
    audio.volume = .5;


    if (sceneNum == 1) {
        // scene 2 - game Intro - ask about llama
        document.getElementById("scene_splash").style.visibility = "hidden";
        document.getElementById("scene_gameIntro").style.visibility = "visible";
        document.getElementById("grid-container-intro").style.visibility = "visible";
        changeMusic(musicTrek);
    } else if (sceneNum == 2) {
        // scene 2 - game Head Out - confirm llama info
        document.getElementById("scene_gameIntro").style.visibility = "hidden";
        document.getElementById("scene_gameIntro_headOut").style.visibility = "visible";
        document.getElementById("grid-container-intro").style.visibility = "hidden";
        document.getElementById("grid-container-intro-headOut").style.visibility = "visible";
    } else if (sceneNum == 3) {
        // scene 3 - game Found Llama - ask which tune to hum 
        document.getElementById("scene_gameIntro_headOut").style.visibility = "hidden";
        document.getElementById("scene_gameFoundLlama").style.visibility = "visible";
        document.getElementById("grid-container-intro-headOut").style.visibility = "hidden";
        document.getElementById("grid-container-foundLlama").style.visibility = "visible";
    } else if (sceneNum == 4) {
        // scene 3 - game Found Llama - hum tune so that llama follows
        var audio = document.getElementById('audio');
        audio.volume = 0.2;

        document.getElementById("scene_gameFoundLlama").style.visibility = "hidden";
        document.getElementById("scene_gameFoundLlama_follow").style.visibility = "visible";
        document.getElementById("grid-container-foundLlama").style.visibility = "hidden";
        document.getElementById("grid-container-foundLlama-follow").style.visibility = "visible";
    } else if (sceneNum == 5) {
        // scene 4 - game Bridge - ask to build connecting path
        document.getElementById("scene_gameFoundLlama_follow").style.visibility = "hidden";
        document.getElementById("scene_gameBridge").style.visibility = "visible";
        document.getElementById("grid-container-foundLlama-follow").style.visibility = "hidden";
        document.getElementById("grid-container-bridge").style.visibility = "visible";
    } else if (sceneNum == 6) {
        // scene 4 - game Bridge - confirmed enough connecting path length
        document.getElementById("scene_gameBridge").style.visibility = "hidden";
        document.getElementById("scene_gameBridge_done").style.visibility = "visible";
        document.getElementById("grid-container-bridge").style.visibility = "hidden";
        document.getElementById("grid-container-bridge-done").style.visibility = "visible";
    } else if (sceneNum == 7) {
        // scene 6 - game Ending
        document.getElementById("scene_gameBridge_done").style.visibility = "hidden";
        document.getElementById("scene_gameEnd").style.visibility = "visible";
        document.getElementById("grid-container-bridge-done").style.visibility = "hidden";
        document.getElementById("song").innerHTML = "♫♪ " + end_songLyrics + " ♪♫";

        changeMusic(musicEnd);
    } else {
        sceneNum = 0;
        document.getElementById("scene_gameEnd").style.visibility = "hidden";
        document.getElementById("scene_splash").style.visibility = "visible";
        document.getElementById("grid-container").style.visibility = "hidden";
        changeMusic(musicStart);
    }


}


/*
var escapedHtml = HTMLUtils.escape('<p id="connecting_path">'+ c_path + '</p>');
console.log(escapedHtml);
document.getElementById("code_content").innerHTML = escapedHtml;
*/

function checkCPathLen() {
    var c_path = document.getElementById("player_input_cpath").value;
    if (c_path.length < 80 && c_path.length > 65) {
        "You're almost there! Just add another sentence so that the string exceeds 80 characters—";
    } else if (c_path.length < 80) {
        "Type a string that exceeds 80 characters in length— you're currently at " + c_path.length + " characters. You can do it!"
    } else {
        //console.log(c_path);
        //console.log(String(c_path));

        end_songLyrics = String(c_path);      
        //console.log(end_songLyrics);

        nextScene();
    }
}


function updateName() {
    var name = document.getElementById("name").value;
    var nameAdj = document.getElementById("nameAdj").value;
    document.getElementById("name_input").innerHTML = name;
    document.getElementById("nameAdj_input").innerHTML = nameAdj;
    document.getElementById("name_input_2").innerHTML = name;
    document.getElementById("nameAdj_input_2").innerHTML = nameAdj;
    llama = nameAdj + " " + name;
    console.log(llama);
}

function setName() {
    var name = document.getElementById("name").value;
    var nameAdj = document.getElementById("nameAdj").value;
    llama = nameAdj + " " + name;

    document.getElementById("llama").innerHTML = String(llama);
    document.getElementById("llama_2").innerHTML = String(llama);
    document.getElementById("llama_3").innerHTML = String(llama);
    document.getElementById("llama_4").innerHTML = String(llama);

    console.log("setName " + llama);

    nextScene();
}

function setMusic() {
    //llama = nameAdj + " " + name;

    var audio = document.getElementById('audio');
    audio.volume = 0.5;

    //document.getElementById("llama").innerHTML = String(llama);
    //document.getElementById("llama_2").innerHTML = String(llama);
    //document.getElementById("llama_3").innerHTML = String(llama);

    console.log("setName " + llama);

    nextScene();
}

function updateMusic(music) {
    document.getElementById("music_input").innerHTML = music;
}


function updateCPath() {
    var c_path = document.getElementById("player_input_cpath").value;
    document.getElementById("connecting_path").innerHTML = c_path;
    document.getElementById("cpath_input").innerHTML = c_path;
  }

function changeMusic(music) {     
    document.getElementById("audio").pause();
    document.getElementById("audio").setAttribute('src', music);
    document.getElementById("audio").load();
    document.getElementById("audio").play();
}

var HTMLUtils = new function() {
    var rules = [
        { expression: /&/g, replacement: '&amp;'  }, // keep this rule at first position
        { expression: /</g, replacement: '&lt;'   },
        { expression: />/g, replacement: '&gt;'   },
        { expression: /"/g, replacement: '&quot;' },
        { expression: /'/g, replacement: '&#039;' } // or  &#39;  or  &#0039;
                                                    // &apos;  is not supported by IE8
                                                    // &apos;  is not defined in HTML 4
    ];
    this.escape = function(html) {
        var result = html;
        for (var i = 0; i < rules.length; ++i) {
            var rule = rules[i];
            result = result.replace(rule.expression, rule.replacement);
        }
        return result;
    }
};