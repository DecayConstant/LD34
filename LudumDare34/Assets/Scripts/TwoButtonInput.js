#pragma strict

public var accept_input : boolean = false;
public var current_input : String = "";
public var timer_script : Timer;
public var battleactions_script : BattleActions;

public var input_slot1 : Text;
public var input_slot2 : Text;
public var input_slot3 : Text;
public var input_slot4 : Text;

function Awake() {
	timer_script = GetComponent(Timer);
	battleactions_script = GetComponent(BattleActions);
}


function Update () {
	if(current_input.Length == 4) {
			accept_input = false;

			battleactions_script.DoAction(MapInputString(current_input), true);
			Debug.Log(current_input);
			current_input = "";
			timer_script.currently_timing = false;
			timer_script.ready_timer = true;
	}
	if(accept_input) {
		if(Input.GetButtonDown("ButtonA")) {
			current_input += "A";
		}
		else if(Input.GetButtonDown("ButtonB")) {
			current_input += "D";
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

static function MapInputString (str : String) {
	if(str == "AAAA") {
		return 0;
	}
	else if(str == "AAAD") {
		return 1;
	}
	else if(str == "AADA") {
		return 2;
	}
	else if(str == "AADD") {
		return 3;
	}
	else if(str == "ADAA") {
		return 4;
	}
	else if(str == "ADAD") {
		return 5;
	}
	else if(str == "ADDA") {
		return 6;
	}
	else if(str == "ADDD") {
		return 7;
	}
	else if(str == "DAAA") {
		return 8;
	}
	else if(str == "DAAD") {
		return 9;
	}
	else if(str == "DADA") {
		return 10;
	}
	else if(str == "DADD") {
		return 11;
	}
	else if(str == "DDAA") {
		return 12;
	}
	else if(str == "DDAD") {
		return 13;
	}
	else if(str == "DDDA") {
		return 14;
	}
	else if(str == "DDDD") {
		return 15;
	}
}