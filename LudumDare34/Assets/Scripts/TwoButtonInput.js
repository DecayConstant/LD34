#pragma strict
import UnityEngine.UI;

public var accept_input : boolean = false;
public var current_input : String = "";
public var battle_timer_start : float = 3.0;
public var battle_timer : float;
public var hero_turn : boolean = true;
public var enemy_turn : boolean = false;
public var timer_script : Timer;
public var gameover_script : GameOver;
public var battleactions_script : BattleActions;
public var hero : Hero;
public var enemy : Enemy;
public var hero_hp_slider : Slider;
public var enemy_hp_slider : Slider;

public var input_slots : Text[];
public var bonus_panels : Image[];

public var timer_bonus_total : float = 0.0;
public var timer_bonus_amount : float = 0.5;
public var timer_bonus_chance : float = 0.2;  //percent
public var timer_bonus_text : Text;
public var ready_timer_bonus : boolean = true;
private var possible_buttons = new Array('A', 'D');
private var new_input : boolean = false;

function Awake() {
	battle_timer = battle_timer_start;
	timer_script = GetComponent(Timer);
	gameover_script = GetComponent(GameOver);
	battleactions_script = GetComponent(BattleActions);
	hero=GetComponent(Hero);
	enemy=GetComponent(Enemy);
	timer_bonus_text.text = "";
	for(var k : int = 0; k < input_slots.Length; k++) {
		input_slots[k].text = "";
		bonus_panels[k].color = Color(0.6,0.6,0.6,0.6);
	}
}


function Update () {
	if(ready_timer_bonus) {
		ready_timer_bonus = false;
		for(var i : int = 0; i < input_slots.Length; i++) {
			if(Random.value < timer_bonus_chance) {
				input_slots[i].text = possible_buttons[Random.Range(0, possible_buttons.length)];
				input_slots[i].color = Color(0.5,0.5,0.5,0.5);
				bonus_panels[i].color = Color(0.2,0.9,0.2,0.7);
			}
		}
	}

	if(current_input.Length == 4) {
		accept_input = false;
		new_input = false;
		timer_script.currently_timing = false;

		battle_timer -= Time.deltaTime;

		if(hero_turn) {
			battleactions_script.HeroAction(MapInputString(current_input));
			hero.UpdateStatus();
			enemy.UpdateStatus();
			if(enemy.health <= 0) {
				timer_script.currently_timing = false;
				gameover_script.WinGame("You win the game!\n" + hero.entity_name + " defeated " + enemy.entity_name + " with " + timer_script.timer.ToString("#.0") + " seconds left!");
			}
			else if(hero.health <= 0) {
				timer_script.currently_timing = false;
				gameover_script.GameOver("The hero's legacy ends.\n" + hero.entity_name + " was defeated by " + enemy.entity_name + ".");
			}
			hero_hp_slider.value = Mathf.Round((parseFloat(hero.health) / parseFloat(hero.max_health)) * 100);
			enemy_hp_slider.value = Mathf.Round((parseFloat(enemy.health) / parseFloat(enemy.max_health)) * 100);
			hero_turn = false;
			enemy_turn = true;
		}

		if(enemy_turn && battle_timer <= 0) {
			battle_timer = battle_timer_start;
			battleactions_script.EnemyAction();
			enemy.UpdateStatus();
			hero.UpdateStatus();
			if(enemy.health <= 0) {
				timer_script.currently_timing = false;
				gameover_script.WinGame("You win the game!\n" + hero.entity_name + " defeated " + enemy.entity_name + " with " + timer_script.timer.ToString("#.0") + " seconds left!");
			}
			else if(hero.health <= 0) {
				timer_script.currently_timing = false;
				gameover_script.GameOver("The hero's legacy ends.\n" + hero.entity_name + " was defeated by " + enemy.entity_name + ".");
			}
			hero_hp_slider.value = Mathf.Round((parseFloat(hero.health) / parseFloat(hero.max_health)) * 100);
			enemy_hp_slider.value = Mathf.Round((parseFloat(enemy.health) / parseFloat(enemy.max_health)) * 100);
			enemy_turn = false;
		}

		if(!hero_turn && !enemy_turn && battle_timer <= 0) {
			//Clear out the round's input
			for(var j : int = 0; j < input_slots.Length; j++) {
				input_slots[j].text = "";
				bonus_panels[j].color = Color(0.6,0.6,0.6,0.6);
			}
			ready_timer_bonus = true;
			current_input = "";
			timer_bonus_text.text = "";
			timer_bonus_total = 0.0;
			hero_turn = true;
			battle_timer = battle_timer_start;
			timer_script.ready_timer = true;
		}
	}
	if(accept_input) {
		if(Input.GetButtonDown("ButtonA")) {
			current_input += "A";
			new_input = true;
		}
		else if(Input.GetButtonDown("ButtonB")) {
			current_input += "D";
			new_input = true;
		}
	}
	if(current_input.Length == 1 && new_input) {
		new_input = false;
		if(input_slots[0].text == current_input[0].ToString()) {
			timer_bonus_total += timer_bonus_amount;
			timer_bonus_text.text = timer_bonus_total.ToString("#.0") + "s";
			timer_script.AddTime(timer_bonus_amount);
		}
		else {
			bonus_panels[0].color = Color(0.6,0.6,0.6,0.6);
		}
		input_slots[0].text = current_input[0].ToString();
		input_slots[0].color = Color(0.15,0.15,0.15,1);
	}
	if(current_input.Length == 2 && new_input) {
		new_input = false;
		if(input_slots[1].text == current_input[1].ToString()) {
			timer_bonus_total += timer_bonus_amount;
			timer_bonus_text.text = timer_bonus_total.ToString("#.0") + "s";
			timer_script.AddTime(timer_bonus_amount);
		}
		else {
			bonus_panels[1].color = Color(0.6,0.6,0.6,0.6);
		}
		input_slots[1].text = current_input[1].ToString();
		input_slots[1].color = Color(0.15,0.15,0.15,1);
	}
	if(current_input.Length == 3 && new_input) {
		new_input = false;
		if(input_slots[2].text == current_input[2].ToString()) {
			timer_bonus_total += timer_bonus_amount;
			timer_bonus_text.text = timer_bonus_total.ToString("#.0") + "s";
			timer_script.AddTime(timer_bonus_amount);
		}
		else {
			bonus_panels[2].color = Color(0.6,0.6,0.6,0.6);
		}
		input_slots[2].text = current_input[2].ToString();
		input_slots[2].color = Color(0.15,0.15,0.15,1);
	}
	if(current_input.Length == 4 && new_input) {
		new_input = false;
		if(input_slots[3].text == current_input[3].ToString()) {
			timer_bonus_total += timer_bonus_amount;
			timer_bonus_text.text = timer_bonus_total.ToString("#.0") + "s";
			timer_script.AddTime(timer_bonus_amount);
		}
		else {
			bonus_panels[3].color = Color(0.6,0.6,0.6,0.6);
		}
		input_slots[3].text = current_input[3].ToString();
		input_slots[3].color = Color(0.15,0.15,0.15,1);
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