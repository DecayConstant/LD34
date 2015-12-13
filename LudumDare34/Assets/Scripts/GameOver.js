#pragma strict
import UnityEngine.UI;

var gameover : boolean = false;
public var gameover_panel : GameObject;
public var gameover_text : Text;

// TODO pass custom message
function GameOver(str : String) {
	gameover = true;
	gameover_panel.SetActive(true);
	gameover_text.text = str;
}

function Update() {
	if(gameover && (Input.GetButtonDown("ButtonA") || Input.GetButtonDown("ButtonB"))) {
		Application.LoadLevel(Application.loadedLevel);
	}
}