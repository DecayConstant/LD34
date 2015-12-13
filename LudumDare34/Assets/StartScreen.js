#pragma strict

var startScreen : GameObject;
var gameControlScreen : GameObject;
function Update () {

}

function startButton (){

	startScreen.SetActive(false);


}

function gameControls (){

	gameControlScreen.SetActive(true);

}

function turnOffGameControlScreen(){
	gameControlScreen.SetActive(false);


}