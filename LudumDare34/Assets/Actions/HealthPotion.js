#pragma strict

public var soundEffect : AudioClip;

var onPlayerAnimation : GameObject;

public class HealthPotion extends Action {

	function waitAwhile (){
		
		GetComponent.<AudioSource>().PlayOneShot(soundEffect, 0.5f);
		yield WaitForSeconds (1.0);
        onPlayerAnimation.SetActive(false);
	}

	public function action(actor : Entity, target:Entity){

	 if(actor.playerType == 2){ 
        		Debug.Log("target is enemy");
        	}else if (target.playerType == 1) {
        		onPlayerAnimation.SetActive(true);
        		Debug.Log("target is player");
        	}else if (actor.playerType == 0){
        		        		Debug.Log("is zero");

        	}

          if(actor.health_potions > 0){
                actor.health_potions--;
                Debug.Log("You swig a health potion.");

                if(actor.health + strength > actor.max_health){
                	actor.health = actor.max_health;
                } else {
                	actor.health = actor.health + strength;
                }

            }else{
                Debug.Log("You'd like to swig a health potion, but you are out!");
            }
       StartCoroutine(waitAwhile());

    };

    public function HealthPotion(){
    	strength=150;
    };

};