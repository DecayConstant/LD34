#pragma strict
import UnityEngine.UI;

var gameover_script : GameOver;

private var timer : float = 10;
public var timer_string : UI.Text;

function Update () {
	
	if(timer <= 0) {
		gameover_script.GameOver();
	}
	else {
		timer -= Time.deltaTime;
		timer_string.text = timer.ToString("#.0") + "s";
	}
}