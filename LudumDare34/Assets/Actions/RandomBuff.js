#pragma strict

public var soundEffect : AudioClip;

var onEnemyAnimation : GameObject;
var onPlayerAnimation : GameObject;

public class RandomBuff extends Action {

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
		var buff :String;

		if(debuff_num == 0){
			buff = 'Ice';
			actor.ice = 1;
		} else if(debuff_num == 1){
			buff = 'Fire';
			actor.fire = 1;
		} else if(debuff_num == 2){
			buff = 'Earth';
			actor.earth = 1;
		} else if(debuff_num == 3){
			buff = 'Lightning';
			actor.lightning = 1;
		} 

        Debug.Log("You foucus your hocus pocus and feel the majecteic powers of "+buff+" surround you.");
        StartCoroutine(waitAwhile());
    };

    public function RandomBuff(){
    	
    };

};