#pragma strict

public var accept_input : boolean = false;
public var current_input : String = "";
public var timer_script : Timer;

public var input_slot1 : Text;
public var input_slot2 : Text;
public var input_slot3 : Text;
public var input_slot4 : Text;

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
	if(current_input.Length == 1) {
		input_slot1.text = current_input[0].ToString();
	}
	if(current_input.Length == 2) {
		input_slot2.text = current_input[1].ToString();
	}
	if(current_input.Length == 3) {
		input_slot3.text = current_input[2].ToString();
	}
	if(current_input.Length == 4) {
		input_slot4.text = current_input[3].ToString();
	}
}

function AcceptInput() {
	accept_input = true;
}