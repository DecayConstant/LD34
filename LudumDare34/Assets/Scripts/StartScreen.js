﻿#pragma strict
import UnityEngine.UI;

var startScreen : GameObject;
var gameControlScreen : GameObject;
var creditsScreenPanel : GameObject;
var battleActions : BattleActions;

public var difficulty_text : Text;

var timer_script : Timer;

var game_started : boolean = false;

static var game_difficulty : int = 1;

//screen 0 - game screen
//screen 1 - start screen
//screen 2 - controls screen
//screen 3 - credits screen
var current_screen : int = 1;

function Awake() {
	timer_script = GetComponent(Timer);
	battleActions = GetComponent(BattleActions);
	startScreen.SetActive(true);
	gameControlScreen.SetActive(false);
	creditsScreenPanel.SetActive(false);
}

function Start() {
	if(DifficultySettings.game_difficulty == 1) {
		difficulty_text.text = "Easy Mode";
	}
	if(DifficultySettings.game_difficulty == 2) {
		difficulty_text.text = "Hard Mode";
	}
}

function Update () {
	if(!game_started) {
		if(current_screen == 1 && Input.GetButtonDown("ButtonA")) {
			startBattle();
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
			//Change difficulty instead
			changeDifficulty();
			//startScreen.SetActive(false);
			//gameControlScreen.SetActive(false);
			//creditsScreenPanel.SetActive(true);
			//current_screen = 3;
		}
		//else if(current_screen == 3 && (Input.GetButtonDown("ButtonA") || Input.GetButtonDown("ButtonB"))) {
		//	startScreen.SetActive(true);
		//	gameControlScreen.SetActive(false);
		//	creditsScreenPanel.SetActive(false);
		//	current_screen = 1;
		//}
	}
}

function startBattle (){
	startScreen.SetActive(false);
	gameControlScreen.SetActive(false);
	creditsScreenPanel.SetActive(false);
	current_screen = 0;

	battleActions.setupEnemy();
	battleActions.setupHero();

	game_started = true;
	timer_script.StartGame();
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
	//startScreen.SetActive(true);
	//gameControlScreen.SetActive(false);
	//creditsScreenPanel.SetActive(false);
	//current_screen = 1;
	Application.LoadLevel(Application.loadedLevel);
}

function changeDifficulty() {
	
	if(DifficultySettings.game_difficulty == 2) {
		difficulty_text.text = "Easy Mode";
		DifficultySettings.setEasyMode();
	}
	else if(DifficultySettings.game_difficulty == 1) {
		difficulty_text.text = "Hard Mode";
		DifficultySettings.setHardMode();
	}
}