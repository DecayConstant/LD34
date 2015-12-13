#pragma strict

public var soundEffect : AudioClip;

//var onPlayerAnimation : GameObject;

public class HealthPotion extends Action {

	function waitAwhile (){
		
		GetComponent.<AudioSource>().PlayOneShot(soundEffect, 0.5f);
		yield WaitForSeconds (1.0);
        onPlayerAnimation.SetActive(false);
	}

	public function action(actor : Entity, target:Entity){


		prepareAnimation(actor);

		var battleMessage:String;

	    if(actor.health_potions > 0){
	        actor.health_potions--;
	    	battleMessage = "You swig a health potion.\n";

	    	//Make sure we don't put their health over their max_health.
	        if(actor.health + strength > actor.max_health){
	        	actor.health = actor.max_health;
	        } else {
	        	actor.health = actor.health + strength;
	        }

	    }else{
	        battleMessage = "You'd like to swig a health potion, but you are out!\n";
	    }

     	dialogue_box.text = battleMessage + dialogue_box.text;

		StartCoroutine(waitAwhile());

    };

    public function HealthPotion(){
    	strength=150;
    	action_name="Health Potion";
    };

};