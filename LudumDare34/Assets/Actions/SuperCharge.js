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
		if(executed){
			Debug.Log("You can't even bring yourself to try that again.");
		}else{
			if(charge_count <=2 ){
				GetComponent.<AudioSource>().PlayOneShot(soundEffectTwo, 0.5f);

			}else{
				executed = true;
				Debug.Log("HOLY COWSOX!!  KABLOOMERS!  WOW!");
				var damage = parseInt(target.health * .25);
				Debug.Log("You do "+damage+" damege to "+target.entity_name+'.');
				onEnemyAnimation.SetActive(true);
				StartCoroutine(waitAwhile());
			}
		}
    };

    public function SuperCharge(){
    };

};