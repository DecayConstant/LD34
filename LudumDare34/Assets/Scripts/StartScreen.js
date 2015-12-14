#pragma strict

var startScreen : GameObject;
var gameControlScreen : GameObject;
var creditsScreenPanel : GameObject;

var timer_script : Timer;

var game_started : boolean = false;

//screen 0 - game screen
//screen 1 - start screen
//screen 2 - controls screen
//screen 3 - credits screen
var current_screen : int = 1;

function Awake() {
	timer_script = GetComponent(Timer);
	startScreen.SetActive(true);
	gameControlScreen.SetActive(false);
	creditsScreenPanel.SetActive(false);
}

function Update () {
	if(!game_started) {
		if(current_screen == 1 && Input.GetButtonDown("ButtonA")) {
			startScreen.SetActive(false);
			gameControlScreen.SetActive(false);
			creditsScreenPanel.SetActive(false);
			current_screen = 0;
			game_started = true;
			timer_script.StartGame();
		}
		else if(current_screen == 1 && Input.GetButtonDown("ButtonB")) {
			startScreen.SetActive(false);
			gameControlScreen.SetActive(true);
			creditsScreenPanel.SetActive(false);
			current_screen = 2;
		}
		else if(current_screen == 2 && Input.GetButtonDown("ButtonA")) {
			startScreen.SetActive(true);
			gameControlScreen.SetActive(false);
			creditsScreenPanel.SetActive(false);
			current_screen = 1;
		}
		else if(current_screen == 2 && Input.GetButtonDown("ButtonB")) {
			startScreen.SetActive(false);
			gameControlScreen.SetActive(false);
			creditsScreenPanel.SetActive(true);
			current_screen = 3;
		}
		else if(current_screen == 3 && (Input.GetButtonDown("ButtonA") || Input.GetButtonDown("ButtonB"))) {
			startScreen.SetActive(true);
			gameControlScreen.SetActive(false);
			creditsScreenPanel.SetActive(false);
			current_screen = 1;
		}
	}
}

function startButton (){
	startScreen.SetActive(false);
	gameControlScreen.SetActive(false);
	creditsScreenPanel.SetActive(false);
	current_screen = 0;
}

function gameControls (){
	startScreen.SetActive(false);
	gameControlScreen.SetActive(true);
	creditsScreenPanel.SetActive(false);
	current_screen = 2;
}

function turnOffGameControlScreen(){
	startScreen.SetActive(true);
	gameControlScreen.SetActive(false);
	creditsScreenPanel.SetActive(false);
	current_screen = 1;
}

function creditsScreen (){
	startScreen.SetActive(false);
	gameControlScreen.SetActive(false);
	creditsScreenPanel.SetActive(true);
	current_screen = 3;
}

function creditScreenOff (){
	startScreen.SetActive(true);
	gameControlScreen.SetActive(false);
	creditsScreenPanel.SetActive(false);
	current_screen = 1;
}