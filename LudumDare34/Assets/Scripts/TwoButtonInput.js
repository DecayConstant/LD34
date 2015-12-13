#pragma strict
import UnityEngine.UI;

public var accept_input : boolean = false;
public var current_input : String = "";
public var battle_timer : float = 2.0;
public var hero_turn : boolean = true;
public var enemy_turn : boolean = false;
public var timer_script : Timer;
public var battleactions_script : BattleActions;
public var hero : Hero;
public var enemy : Enemy;
public var hero_hp_slider : Slider;
public var enemy_hp_slider : Slider;

public var input_slot1 : Text;
public var input_slot2 : Text;
public var input_slot3 : Text;
public var input_slot4 : Text;

function Awake() {
	timer_script = GetComponent(Timer);
	battleactions_script = GetComponent(BattleActions);
	hero=GetComponent(Hero);
	enemy=GetComponent(Enemy);
}


function Update () {

	if(current_input.Length == 4) {
		accept_input = false;
		timer_script.currently_timing = false;

		battle_timer -= Time.deltaTime;

		if(hero_turn) {
			battleactions_script.HeroAction(MapInputString(current_input));
			hero.UpdateStatus();
			enemy.UpdateStatus();
			hero_hp_slider.value = Mathf.Round((parseFloat(hero.health) / parseFloat(hero.max_health)) * 100);
			enemy_hp_slider.value = Mathf.Round((parseFloat(enemy.health) / parseFloat(enemy.max_health)) * 100);
			hero_turn = false;
			enemy_turn = true;
		}

		if(enemy_turn && battle_timer <= 0) {
			battle_timer = 2.0;
			battleactions_script.EnemyAction();
			enemy.UpdateStatus();
			hero.UpdateStatus();
			hero_hp_slider.value = Mathf.Round((parseFloat(hero.health) / parseFloat(hero.max_health)) * 100);
			enemy_hp_slider.value = Mathf.Round((parseFloat(enemy.health) / parseFloat(enemy.max_health)) * 100);
			enemy_turn = false;
		}

		if(!hero_turn && !enemy_turn && battle_timer <= 0) {
			//Clear out the round's input
			input_slot1.text = "";
			input_slot2.text = "";
			input_slot3.text = "";
			input_slot4.text = "";
			current_input = "";
			hero_turn = true;
			battle_timer = 2.0;
			timer_script.ready_timer = true;
		}
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