#pragma strict
import UnityEngine.UI;

var gameover_script : GameOver;
var input_script : TwoButtonInput;

public var timer : float = 10;
public var ready_timer : boolean = false;
public var currently_timing : boolean = false;
public var timer_string : UI.Text;
public var timer_slider : Slider;
public var input_string : UI.Text;
public var input_timer : float = 3;

function Update () {

	if(ready_timer) {
		if(input_timer >= 0) {
			input_timer -= Time.deltaTime;
			input_string.text = input_timer.ToString("#.0");
		}
		else {
			input_timer = 3;
			input_string.text = "Input Combo!";
			ready_timer = false;
			currently_timing = true;
			input_script.AcceptInput();
		}
	}
	if(currently_timing) {
		if(timer <= 0) {
			gameover_script.GameOver("Game Over!\nPress any button to continue.");
		}
		else {
			timer -= Time.deltaTime;
			timer_string.text = timer.ToString("#.0") + "s";
			if(timer <= 10) {
				timer_slider.value = timer * 10;
			}
			else {
				timer_slider.value = 100;
			}
		}
	}
}

function ReadyForInput() {
	ready_timer = true;
}

function StartGame() {
	ready_timer = true;
}