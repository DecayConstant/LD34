#pragma strict

public var soundEffect : AudioClip;

var onEnemyAnimation : GameObject;
var onPlayerAnimation : GameObject;

public class RandomDebuff extends Action {

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
        	}else if (target.playerType == 1) {
        		onPlayerAnimation.SetActive(true);
        		Debug.Log("target is player");
        	}else if (target.playerType == 0){
        		        		Debug.Log("is zero");

        	}

		var debuff_num = Random.Range(0,3);
		var weakness :String;

		if(debuff_num == 0){
			weakness = 'Ice';
			target.ice = -1;
		} else if(debuff_num == 1){
			weakness = 'Fire';
			target.fire = -1;
		} else if(debuff_num == 2){
			weakness = 'Earth';
			target.earth = -1;
		} else if(debuff_num == 3){
			weakness = 'Lightning';
			target.lightning = -1;
		} 

        Debug.Log("You pull some voodoo hocus pocus and make"+target.entity_name+" weak to "+weakness+" attacks.");
        StartCoroutine(waitAwhile());

    };


    public function RandomDebuff(){
    	
    };

};