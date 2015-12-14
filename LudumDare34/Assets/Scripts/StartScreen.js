#pragma strict

var startScreen : GameObject;
var gameControlScreen : GameObject;
var creditsScreenPanel : GameObject;

var timer_script : Timer;

var game_started : boolean = false;
var controls_screen : boolean = false;



function Awake() {
	timer_script = GetComponent(Timer);
	startScreen.SetActive(true);
	gameControlScreen.SetActive(false);
}

function Update () {
	if(!game_started) {
		if(!controls_screen && Input.GetButtonDown("ButtonA")) {
			startScreen.SetActive(false);
			game_started = true;
			timer_script.StartGame();
		}
		else if(controls_screen && (Input.GetButtonDown("ButtonA") || Input.GetButtonDown("ButtonB"))) {
			gameControlScreen.SetActive(false);
			controls_screen = false;
		}
		else if(Input.GetButtonDown("ButtonB")) {
			gameControlScreen.SetActive(true);
			controls_screen = true;
		}
	}
}

function startButton (){

	startScreen.SetActive(false);

}

function gameControls (){

	gameControlScreen.SetActive(true);
	controls_screen = true;
}

function turnOffGameControlScreen(){
	gameControlScreen.SetActive(false);


}

function creditsScreen (){

	creditsScreenPanel.SetActive(true);
}

function creditScreenOff (){
	creditsScreenPanel.SetActive(false);
	gameControlScreen.SetActive(false);

}