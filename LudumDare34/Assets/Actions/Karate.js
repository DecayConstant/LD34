#pragma strict

public var soundEffect : AudioClip;

var onEnemyAnimation : GameObject;
var onPlayerAnimation : GameObject;

public class Karate extends Action {

	function waitAwhile (){
		
		GetComponent.<AudioSource>().PlayOneShot(soundEffect, 0.5f);
		yield WaitForSeconds (1.0);
		onEnemyAnimation.SetActive(false);
        onPlayerAnimation.SetActive(false);
	}

	public function action(actor : Entity, target:Entity){
        var damage = calculateDamage(actor,target,actor.karate,target.karate);
        target.takeDamage(damage);
       
        if(target.playerType == 2){ 
    		onEnemyAnimation.SetActive(true);
    		Debug.Log("target is enemy");
    	} else if (target.playerType == 1) {
    		onPlayerAnimation.SetActive(true);
    		Debug.Log("target is player");
    	} else if (target.playerType == 0){
    		Debug.Log("is zero");
    	}

        var effectivenessDesc = getEffectiveness(actor.karate,target.karate);

        var battleMessage = getBattleMessage(damage,actor);
        battleMessage = battleMessage+effectivenessDesc;

        Debug.Log(battleMessage);
        dialogue_box.text = battleMessage+'\n' + dialogue_box.text;

        StartCoroutine(waitAwhile());

    };

    public function Karate(){
    	generic_name='karate';
    	action_name= "Karate";
    	strength=50;
    };

};