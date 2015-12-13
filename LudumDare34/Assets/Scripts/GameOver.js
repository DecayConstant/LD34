#pragma strict
import UnityEngine.UI;

var gameover : boolean = false;
public var gameover_panel : GameObject;
public var gameover_text : Text;
public var restart_text : Text;
public var restart_timer : float = 3.0;

function GameOver(str : String) {
	gameover = true;
	gameover_panel.SetActive(true);
	gameover_text.text = str;
}

function Update() {
	if(gameover) {
		restart_timer -= Time.deltaTime;
		if(restart_timer <= 0) {
			restart_text.color = Color(1,1,1,1);
			if(Input.GetButtonDown("ButtonA") || Input.GetButtonDown("ButtonB")) {
				Application.LoadLevel(Application.loadedLevel);
			}
		}
	}
}