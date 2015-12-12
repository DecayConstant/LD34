#pragma strict
import UnityEngine.UI;

var gameover : boolean = false;
public var gameover_panel : GameObject;

function GameOver() {
	gameover = true;
	gameover_panel.SetActive(true);
}

function Update() {
	if(gameover && (Input.GetButtonDown("ButtonA") || Input.GetButtonDown("ButtonB"))) {
		Application.LoadLevel(Application.loadedLevel);
	}
}