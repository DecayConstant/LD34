#pragma strict

public var soundEffect : AudioClip;

var onEnemyAnimation : GameObject;
var onPlayerAnimation : GameObject;

public class Poison extends Action {

	function waitAwhile (){
		GetComponent.<AudioSource>().PlayOneShot(soundEffect, 0.5f);
		yield WaitForSeconds (1.0);
		onEnemyAnimation.SetActive(false);
        onPlayerAnimation.SetActive(false);
	}

	public function action(actor : Entity, target:Entity){

		if(target.playerType == 2){ 
    		onEnemyAnimation.SetActive(true);
    		Debug.Log("target is enemy");
    	} else if (target.playerType == 1) {
    		onPlayerAnimation.SetActive(true);
    		Debug.Log("target is player");
    	} else if (target.playerType == 0){
    		Debug.Log("is zero");
    	}

          target.poisoned = 3;
    
          var battleMessage:String = actor.entity_name+" poisons "+target.name+".\n";
          dialogue_box.text = battleMessage+dialogue_box.text;

          StartCoroutine(waitAwhile());


    };

    public function Poison(){
    	strength=25;
    	action_name= "Poison";
    };

};