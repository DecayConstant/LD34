#pragma strict

public var accept_input : boolean = false;
public var current_input : String = "";
public var timer_script : Timer;

function Update () {
	if(current_input.Length == 4) {
			accept_input = false;
			//Call Action function here!
			Debug.Log(current_input);
			current_input = "";
			timer_script.currently_timing = false;
			timer_script.ready_timer = true;
	}
	if(accept_input) {
		if(Input.GetButtonDown("ButtonA")) {
			current_input += "a";
		}
		else if(Input.GetButtonDown("ButtonB")) {
			current_input += "b";
		}
	}
}

function AcceptInput() {
	accept_input = true;
}