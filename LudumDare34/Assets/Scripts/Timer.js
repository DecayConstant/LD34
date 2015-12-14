#pragma strict
import UnityEngine.UI;

var gameover_script : GameOver;
var input_script : TwoButtonInput;

public var timer_start : float = 15.0;
public var timer : float;
public var input_timer_start : float = 3.0;
public var input_timer : float;
public var ready_timer : boolean = false;
public var currently_timing : boolean = false;
public var game_running : boolean = true;
public var timer_string : UI.Text;
public var timer_slider : Slider;
public var input_string : UI.Text;


function Awake() {
	timer = timer_start;
	input_timer = input_timer_start;
	timer_string.text = timer.ToString("#.0") + "s";
}

function Update () {

	if(game_running) {
		if(ready_timer) {
			if(input_timer >= 0.0) {
				input_timer -= Time.deltaTime;
				input_string.text = input_timer.ToString("#.0");
			}
			else {
				input_timer = input_timer_start;
				input_string.text = "Input Combo!";
				ready_timer = false;
				currently_timing = true;
				input_script.AcceptInput();
			}
		}
		if(currently_timing) {
			if(timer <= 0.0) {
				gameover_script.GameOver("Game Over!\nYou ran out of time.  :(");
			}
			else {
				timer -= Time.deltaTime;
				timer_string.text = timer.ToString("#.0") + "s";
				if(timer > timer_start) {
					timer_slider.value = 100;
				}
				else {
					timer_slider.value = Mathf.Round((timer / timer_start) * 100);
				}
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

function AddTime(amount : float) {
	timer += amount;
	timer_string.text = timer.ToString("#.0") + "s";
	if(timer > timer_start) {
		timer_slider.value = 100;
	}
	else {
		timer_slider.value = Mathf.Round((timer / timer_start) * 100);
	}
}