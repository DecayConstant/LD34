#pragma strict

/*
This attack requires multiple turns of charging to execute, and does 25% of the target's remaining
health as the damage.  Can only be done once per battle.
*/

public var soundEffect : AudioClip;
public var soundEffectTwo : AudioClip;

var onEnemyAnimation : GameObject;

public class SuperCharge extends Action {
	public var charge_count : int = 0;
	public var executed : boolean = false;

	function waitAwhile (){
		
		GetComponent.<AudioSource>().PlayOneShot(soundEffect, 0.5f);
		yield WaitForSeconds (1.0);
		onEnemyAnimation.SetActive(false);
	}

	public function action(actor : Entity, target:Entity){
		charge_count++;
		var battleMessage : String;

		if(executed){
			battleMessage = "You can't even bring yourself to try that again.\n";
		}else{
			if(charge_count <=2 ){
				GetComponent.<AudioSource>().PlayOneShot(soundEffectTwo, 0.5f);

			}else{
				executed = true;

				var damage = parseInt(target.health * .25);
				target.takeDamage(damage);

				battleMessage = "HOLY COWSOX!!  KABLOOMERS!  WOW!\n";
				battleMessage += actor.entity_name + " does "+damage+" damage to "+target.entity_name+'.\n';
				onEnemyAnimation.SetActive(true);
				StartCoroutine(waitAwhile());
			}
		}

		dialogue_box.text = battleMessage+dialogue_box.text;
    };

    public function SuperCharge(){
    	action_name= "Super Charge";
    };

};