#pragma strict
import UnityEngine.UI;

public var hero : Hero;
public var enemy : Enemy;

public var hero_name_text : Text;
public var enemy_name_text : Text;

public var BattleActions : Action[];
public var EnemyActions : Action[];

public var Action_Textbars : Text[];
public var Action_Panels : Image[];

public var dialogue_box : Text;

public var kungfu : Kungfu; 
public var karate : Karate; 
public var taunt : Taunt;
public var ice : Ice;
public var fire : Fire;
public var earth : Earth;
public var lightning : Lightning;
public var guard : Guard;
public var healthPotion : HealthPotion;
public var reequip : Reequip;
public var poison : Poison;
public var doubleDown : DoubleDown;
public var superCharge : SuperCharge;
public var recon : Recon;
public var randomBuff : RandomBuff;
public var randomDebuff : RandomDebuff;

//Amount to randomize stats
public var variation_percent : float = 0.1f;

//public class BattleActions extends MonoBehaviour {

//public var actions : BattleActions = new Array();

function Awake(){
	BattleActions = new Action[16];
	EnemyActions = new Action[9];

	hero=GetComponent(Hero);
	enemy=GetComponent(Enemy);

	kungfu=GetComponent(Kungfu);
	karate=GetComponent(Karate);
	taunt=GetComponent(Taunt);
	ice=GetComponent(Ice);
	fire=GetComponent(Fire);
	earth=GetComponent(Earth);
	lightning=GetComponent(Lightning);
	guard = GetComponent(Guard);
	healthPotion = GetComponent(HealthPotion);
	reequip = GetComponent(Reequip);
	poison = GetComponent(Poison);
	doubleDown = GetComponent(DoubleDown);
	superCharge=GetComponent(SuperCharge);
	recon=GetComponent(Recon);
	randomBuff=GetComponent(RandomBuff);
	randomDebuff=GetComponent(RandomDebuff);

}
function Start(){

	var hero_names = ["Paul", "Eric", "Seth"];
	var enemy_names = ["Lord Plop", "Dread Whatsit", "Sven the Vile", "Bart"];

	//Randomize the hero and enemy
	hero.entity_name = hero_names[Random.Range(0, hero_names.Length)];
	hero_name_text.text = hero.entity_name;
	enemy.entity_name = enemy_names[Random.Range(0, enemy_names.Length)];
	enemy_name_text.text = enemy.entity_name;

	enemy.earth = Random.Range(-1, 2);
	enemy.ice = Random.Range(-1, 2);
	enemy.fire = Random.Range(-1, 2);
	enemy.lightning = Random.Range(-1, 2);
	enemy.karate = Random.Range(-1, 2);
	enemy.kungfu = Random.Range(-1, 2);
	enemy.max_health = Random.Range(Mathf.Round(enemy.max_health * (1 - variation_percent)),
									Mathf.Round(enemy.max_health * (1 + variation_percent)));
	enemy.health = enemy.max_health;
	enemy.attack = Random.Range(Mathf.Round(enemy.attack * (1 - variation_percent)),
								Mathf.Round(enemy.attack * (1 + variation_percent)));
	enemy.defense = Random.Range(Mathf.Round(enemy.defense * (1 - variation_percent)),
								 Mathf.Round(enemy.defense * (1 + variation_percent)));

	BattleActions[0] = kungfu;
	BattleActions[1] = karate;
	BattleActions[2] = taunt;
	BattleActions[3] = ice;
	BattleActions[4] = fire;
	BattleActions[5] = earth;
	BattleActions[6] = lightning;
	BattleActions[7] = guard;
	BattleActions[8] = healthPotion;
	BattleActions[9] = reequip;
	BattleActions[10] = poison;
	BattleActions[11] = doubleDown;
	BattleActions[12] = superCharge;
	BattleActions[13] = recon;
	BattleActions[14] = randomBuff;
	BattleActions[15] = randomDebuff;

	RandomizeArray(BattleActions);

	EnemyActions[0] = kungfu;
	EnemyActions[1] = karate;
	EnemyActions[2] = ice;
	EnemyActions[3] = fire;
	EnemyActions[4] = earth;
	EnemyActions[5] = lightning;
	EnemyActions[6] = poison;
	EnemyActions[7] = randomBuff;
	EnemyActions[8] = randomDebuff;
}

function HeroAction(slot : int) {
	//Apply poison damage
	if(hero.poisoned > 0) {
		hero.health -= poison.strength;
		hero.poisoned -= 1;
		dialogue_box.text = hero.entity_name + " took " + poison.strength + " poison damage.\n" + dialogue_box.text;
	}
	BattleActions[slot].action(hero, enemy);
	Action_Textbars[slot].text = BattleActions[slot].action_name;
	Action_Panels[slot].color = Color(0,1,0,1);
}

function EnemyAction() {
	//Apply poison damage
	if(enemy.poisoned > 0) {
		enemy.health -= poison.strength;
		enemy.poisoned -= 1;
		dialogue_box.text = enemy.entity_name + " took " + poison.strength + " poison damage.\n" + dialogue_box.text;
	}
	//For now, just do a random action to hero
	EnemyActions[Random.Range(0, EnemyActions.Length)].action(enemy,hero);
}

static function RandomizeArray(arr : Object[])
{
    for (var i = arr.Length - 1; i > 0; i--) {
        var r = Random.Range(0,i);
        var tmp = arr[i];
        arr[i] = arr[r];
        arr[r] = tmp;
    }
}