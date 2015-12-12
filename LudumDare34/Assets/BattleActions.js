#pragma strict


public var hero : Hero;
public var enemy : Enemy;

public var BattleActions : Action[];

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

public var fuck:String;
//public class BattleActions extends MonoBehaviour {

//public var actions : BattleActions = new Array();

function Awake(){
	BattleActions = new Action[16];

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
	//var hero : Hero;
	//var enemy : Enemy;

	hero.entity_name='Paul';
	enemy.entity_name='Bart';
	enemy.kungfu=-1;



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


//    BattleActions[1] = new Action(50, function(actor : Entity, target:Entity){
//    	var damage = 50;
//        if(target.karate == -1){
//            damage = parseInt(damage*.5);
//            target.takeDamage(damage);
//            Debug.Log(target.name+' is strong against your karate. You deal '+damage+' damage.');
//        }else if(target.karate == 1){
//            damage = parseInt(damage*1.5);
//            target.takeDamage(damage);
//            Debug.Log(target.name+' is weak against your karate. You deal '+damage+' damage.');
//        }else{
//            target.takeDamage(damage);
//            Debug.Log('You deal '+damage+' damage.');
//        }
//    });
//
    Debug.Log(BattleActions[0]);
    Debug.Log(BattleActions[0].strength);
    BattleActions[0].action(hero,enemy);
    //BattleActions[0].action2();
}




//    recon:{},
//    random_buff:{},
//    random_debuff:{},
//    super_charge:{},


//};