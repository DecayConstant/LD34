#pragma strict
import UnityEngine.UI;

public var soundEffect : AudioClip;

var onEnemyAnimation : GameObject;
var onPlayerAnimation : GameObject;

public class Ice extends Action {

	function waitAwhile (){
		
		GetComponent.<AudioSource>().PlayOneShot(soundEffect, 0.5f);
		yield WaitForSeconds (1.0);
		onEnemyAnimation.SetActive(false);
        onPlayerAnimation.SetActive(false);
	}

	public function action(actor : Entity, target:Entity){
        var damage = strength;

   	        if(target.playerType == 2){ 
        		onEnemyAnimation.SetActive(true);
        		Debug.Log("target is enemy");
        	}else if (target.playerType == 1) {
        		onPlayerAnimation.SetActive(true);
        		Debug.Log("target is player");
        	}else if (target.playerType == 0){
        		        		Debug.Log("is zero");

        	}

        if(target.ice == 1){
            damage = parseInt(damage*.5);
            target.takeDamage(damage);
            Debug.Log(target.name+' is strong against ice. You deal '+damage+' damage.');
            dialogue_box.text = target.name+' is strong against ice. ' + actor.name + ' deal '+damage+' damage.\n' + dialogue_box.text;
        }else if(target.ice == -1){
            damage = parseInt(damage*1.5);
            target.takeDamage(damage);
            Debug.Log(target.name+' is weak against ice. You deal '+damage+' damage.');
            dialogue_box.text = target.name+' is weak against ice. ' + actor.name + ' deal '+damage+' damage.\n' + dialogue_box.text;
        }else{
            target.takeDamage(damage);
            Debug.Log(actor.name + ' deal '+damage+' Ice damage.');
            dialogue_box.text = actor.name +'  deal '+damage+' Ice damage.\n' + dialogue_box.text;
        }

        StartCoroutine(waitAwhile());


    };

    public function Ice(){
    	strength=50;
    };

};