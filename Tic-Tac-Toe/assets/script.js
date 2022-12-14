function $dataBank() {
    $it = document.getElementsByClassName("b");
    $it2 = document.getElementsByClassName("b2");
    $it3 = document.getElementsByClassName("b3");
    $first_player = document.getElementById('f_player');
    $second_player = document.getElementById('s_player');
    $i_warn = document.getElementsByClassName("input-warning");
    $turn = document.getElementById("turns");
    $home_B = document.getElementById("menu_board");
    $home = document.getElementById("menu");
    $form = document.getElementById("form");
    $regBTN = document.getElementById("submit");
    $PLAYERS = [document.getElementById('player1'), document.getElementById('player2')];
    $n = [document.getElementById('score1'), document.getElementById('score2')];
    $Chns = document.getElementById("chances");
    $n_scores = [0, 0];
    $c = 1;
    $final_ScoresBoard = document.getElementById('scores-board');
    $final_Scores = document.getElementById('scores');

    $player1 = {
        "name" : $first_player.value, "playKey" : "X"
    };
    $player2 = {
        "name" : $second_player.value, "playKey" : "O"
    };

    $n[0].innerHTML = "Score: <br> " + $n_scores[0];
    $n[1].innerHTML = "Score: <br> " + $n_scores[1];

    $game = document.getElementById('canvas');
}

function mp() {
    $dataBank();
    
    $form.hidden = false;
    $form.style.display = "grid";
    $home.style.display = "none";
    $second_player.placeholder = "Your Name (O)";
    
    $p_key = $player2.playKey;

    for (i = 0; i < $it.length; i++) {
    $it[i].onclick = function () {Writein2(); check()}
    }

    $regBTN.onclick = function () {$submit_and_proceed2()}
}

function $submit_and_proceed2() {
    $dataBank();

    if (
        $first_player.value == "" 
    || 
    $second_player.value == "" || $first_player.value == "" 
    && 
    $second_player.value == ""
    ) {
        $i_warn[0].style.display = "inline-flex";
        $i_warn[1].style.display = "inline-flex";
    }

    else {
        $i_warn[0].style.display = "none";
        $i_warn[1].style.display = "none";
    $PLAYERS[0].innerHTML = $player1.name;
    $PLAYERS[1].innerHTML = $player2.name;

    $home_B.style.transform = "scale(0)";
    $game.style.display = "block"
    }
}

function bck() {
    $first_player.value = null;
    $second_player.value = null;
    $form.hidden = true;
    $first_player.hidden = false;
    $second_player.placeholder = "Player 2 (O)";
    $form.style.display = "none";
    $home.style.display = "grid";
}

function Writein2(evt) {
     if ($p_key == $player2.playKey) {
    $p_key = $player1.playKey;
    event.currentTarget.innerHTML = $p_key;
    event.currentTarget.style.pointerEvents = "none";
    $turn.innerHTML = $player2.name + ", your turn..."
}
else {
    $p_key = $player2.playKey;
    event.currentTarget.innerHTML = $p_key;
    event.currentTarget.style.pointerEvents = "none";
    $turn.innerHTML = $player1.name + ", your turn..."
}
}

function nxt() {
    $reset = setTimeout(function () {
    $c++; $Chns.innerHTML = $c + " / 50";

    if ($c == 51) {
        $c = "50";
        $Chns.innerHTML = $c + " / 50";
    }

    for (i = 0; i < $it.length; i++) { if (mp) {
        $it[i].className = "b b2 b3"; 
    $it[i].innerHTML = "&nbsp;"; $it[i].style.pointerEvents = ""; $it[i].style.animation = "";
    } }

	if ($turn.innerHTML == $player1.name + " Wins!") {
		$turn.innerHTML = $player2.name + ", your turn..."
	}

	else if ($turn.innerHTML == $player2.name + " Wins!") {
		$turn.innerHTML = $player1.name + ", your turn..."
	}
    }, 1500);

    if ($c == 50) {
    clearTimeout($reset);
    setTimeout(function () { 
    $c = 50;
    $Chns.innerHTML = $c + " / 50"; 
    for (i = 0; i < $it.length; i++) {
    $it[i].style.pointerEvents = "none"; $it[i].style.animation = "blink .4s infinite"}

    $turn.innerHTML = "&nbsp;";

    if ($n_scores[0] > $n_scores[1]) {
        $winner = $player1.name
    }

    else if ($n_scores[0] == $n_scores[1]) {
        $winner = "NOBODY... Haha"
    }

    else {
        $winner = $player2.name
    }

    $final_ScoresBoard.style.width = "100%";
    $final_Scores.style.textAlign = "center";
    $final_Scores.innerHTML = "<h2>Your Scores:</h2>" + $player1.name + " -  " + "<span>" + $n_scores[0] + "</span>" + "<hr />" +  $player2.name + " -  " + "<span>" + $n_scores[1] + "</span>" + "<h2>The Winner is " + $winner;
    }, 1600)
	}
}

function check() {
    $Tt = $it[0].innerHTML.length + $it[1].innerHTML.length + $it[2].innerHTML.length + $it[3].innerHTML.length + $it[4].innerHTML.length + $it[5].innerHTML.length + $it[6].innerHTML.length + $it[7].innerHTML.length + $it[8].innerHTML.length;


    function confirm_check() {
        
    if ($it[0].innerHTML + $it[1].innerHTML + $it[2].innerHTML === "XXX" || $it[0].innerHTML + $it[1].innerHTML + $it[2].innerHTML === "OOO") {
        setTimeout(function () {
            $T = [$it[0], $it[1], $it[2]];
            for (i = 0; i < 3; i++) {
        $T[i].style.animation = 'blink .4s infinite';
        }
        if ($player1.playKey == $it[0].innerHTML) {
            $turn.innerHTML = $player1.name + " Wins!";
            $n_scores[0]++;
            $n[0].innerHTML = "Score: <br> " + $n_scores[0];
        }
        else {
            $turn.innerHTML = $player2.name + " Wins!";
            $n_scores[1]++;
            $n[1].innerHTML = "Score: <br> " + $n_scores[1];
        }
        
        for (i = 0; i < $it2.length; i++) { $it2[i].style.pointerEvents = "none";}
        }, 300);
        
        nxt();
        
        clearTimeout($dr_impulse);
        }
        
        else if ($it[0].innerHTML + $it[3].innerHTML + $it[6].innerHTML === "XXX" || $it[0].innerHTML + $it[3].innerHTML + $it[6].innerHTML === "OOO") {
        setTimeout(function () {
            $T = [$it[0], $it[3], $it[6]];
            for (i = 0; i < 3; i++) {
        $T[i].style.animation = 'blink .4s infinite';
        }
        if ($player1.playKey == $it[0].innerHTML) {
            $turn.innerHTML = $player1.name + " Wins!";
            $n_scores[0]++;
            $n[0].innerHTML = "Score: <br> " + $n_scores[0];
        }
        else {
            $turn.innerHTML = $player2.name + " Wins!";
            $n_scores[1]++;
            $n[1].innerHTML = "Score: <br> " + $n_scores[1];
        }
        
        for (i = 0; i < $it2.length; i++) { $it2[i].style.pointerEvents = "none";}
        }, 300);
        
        nxt();
        
        clearTimeout($dr_impulse);
        }
        
        else if ($it[2].innerHTML + $it[5].innerHTML + $it[8].innerHTML === "XXX" || $it[2].innerHTML + $it[5].innerHTML + $it[8].innerHTML === "OOO") {
        setTimeout(function () {
            $T = [$it[2], $it[5], $it[8]];
            for (i = 0; i < 3; i++) {
        $T[i].style.animation = 'blink .4s infinite';
        }
        if ($player1.playKey == $it[2].innerHTML) {
            $turn.innerHTML = $player1.name + " Wins!";
            $n_scores[0]++;
            $n[0].innerHTML = "Score: <br> " + $n_scores[0];
        }
        else {
            $turn.innerHTML = $player2.name + " Wins!";
            $n_scores[1]++;
            $n[1].innerHTML = "Score: <br> " + $n_scores[1];
        }
        
        for (i = 0; i < $it2.length; i++) { $it2[i].style.pointerEvents = "none";}
        }, 300);
        
        nxt();
        
        clearTimeout($dr_impulse);
        }
        
        else if ($it[6].innerHTML + $it[7].innerHTML + $it[8].innerHTML === "XXX" || $it[6].innerHTML + $it[7].innerHTML + $it[8].innerHTML === "OOO") {
        setTimeout(function () {
            $T = [$it[6], $it[7], $it[8]];
            for (i = 0; i < 3; i++) {
        $T[i].style.animation = 'blink .4s infinite';
        }
        if ($player1.playKey == $it[6].innerHTML) {
            $turn.innerHTML = $player1.name + " Wins!";
            $n_scores[0]++;
            $n[0].innerHTML = "Score: <br> " + $n_scores[0];
        }
        else {
            $turn.innerHTML = $player2.name + " Wins!";
            $n_scores[1]++;
            $n[1].innerHTML = "Score: <br> " + $n_scores[1];
        }
        
        for (i = 0; i < $it2.length; i++) { $it2[i].style.pointerEvents = "none";}
        }, 300);
        
        nxt();
        
        clearTimeout($dr_impulse);
        }
        
        else if ($it[0].innerHTML + $it[4].innerHTML + $it[8].innerHTML === "XXX" || $it[0].innerHTML + $it[4].innerHTML + $it[8].innerHTML === "OOO") {
        setTimeout(function () {
            $T = [$it[0], $it[4], $it[8]];
            for (i = 0; i < 3; i++) {
        $T[i].style.animation = 'blink .4s infinite';
        }
        if ($player1.playKey == $it[0].innerHTML) {
            $turn.innerHTML = $player1.name + " Wins!";
            $n_scores[0]++;
            $n[0].innerHTML = "Score: <br> " + $n_scores[0];
        }
        else {
            $turn.innerHTML = $player2.name + " Wins!";
            $n_scores[1]++;
            $n[1].innerHTML = "Score: <br> " + $n_scores[1];
        }
        
        for (i = 0; i < $it2.length; i++) { $it2[i].style.pointerEvents = "none";}
        }, 300);
        
        nxt();
        
        clearTimeout($dr_impulse);
        }
        
        else if ($it[2].innerHTML + $it[4].innerHTML + $it[6].innerHTML === "XXX" || $it[2].innerHTML + $it[4].innerHTML + $it[6].innerHTML === "OOO") {
        setTimeout(function () {
            $T = [$it[2], $it[4], $it[6]];
            for (i = 0; i < 3; i++) {
        $T[i].style.animation = 'blink .4s infinite';
        }
        if ($player1.playKey == $it[2].innerHTML) {
            $turn.innerHTML = $player1.name + " Wins!";
            $n_scores[0]++;
            $n[0].innerHTML = "Score: <br> " + $n_scores[0];
        }
        else {
            $turn.innerHTML = $player2.name + " Wins!";
            $n_scores[1]++;
            $n[1].innerHTML = "Score: <br> " + $n_scores[1];
        }
        
        for (i = 0; i < $it2.length; i++) { $it2[i].style.pointerEvents = "none";}
        }, 300);
        
        nxt();
        
        clearTimeout($dr_impulse);
        }
        
        else if ($it[1].innerHTML + $it[4].innerHTML + $it[7].innerHTML === "XXX" || $it[1].innerHTML + $it[4].innerHTML + $it[7].innerHTML === "OOO") {
        setTimeout(function () {
            $T = [$it[1], $it[4], $it[7]];
            for (i = 0; i < 3; i++) {
        $T[i].style.animation = 'blink .4s infinite';
        }
        if ($player1.playKey == $it[4].innerHTML) {
            $turn.innerHTML = $player1.name + " Wins!";
            $n_scores[0]++;
            $n[0].innerHTML = "Score: <br> " + $n_scores[0];
        }
        else {
            $turn.innerHTML = $player2.name + " Wins!";
            $n_scores[1]++;
            $n[1].innerHTML = "Score: <br> " + $n_scores[1];
        }
        
        for (i = 0; i < $it2.length; i++) { $it2[i].style.pointerEvents = "none";}
        }, 300);
        
        nxt();
        
        clearTimeout($dr_impulse);
        }
        
        else if ($it[3].innerHTML + $it[4].innerHTML + $it[5].innerHTML === "XXX" || $it[3].innerHTML + $it[4].innerHTML + $it[5].innerHTML === "OOO") {
        setTimeout(function () {
            $T = [$it[3], $it[4], $it[5]];
            for (i = 0; i < 3; i++) {
        $T[i].style.animation = 'blink .4s infinite';
        }
        if ($player1.playKey == $it[3].innerHTML) {
            $turn.innerHTML = $player1.name + " Wins!";
            $n_scores[0]++;
            $n[0].innerHTML = "Score: <br> " + $n_scores[0];
        }
        else {
            $turn.innerHTML = $player2.name + " Wins!";
            $n_scores[1]++;
            $n[1].innerHTML = "Score: <br> " + $n_scores[1];
        }
        
        for (i = 0; i < $it2.length; i++) { $it2[i].style.pointerEvents = "none";}
        }, 300);
        
        nxt();
        
        clearTimeout($dr_impulse); 
        }

        else if ($Tt == 9) {
            nxt()
        }
    }

    if ($Tt > 1) {
        confirm_check();
    }
}