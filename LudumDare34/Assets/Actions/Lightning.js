﻿#pragma strict

public var soundEffect : AudioClip;

var onEnemyAnimation : GameObject;
var onPlayerAnimation : GameObject;

public class Lightning extends Action {

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

        if(target.lightning == 1){
            damage = parseInt(damage*.5);
            target.takeDamage(damage);
            Debug.Log(target.name+' is strong against lightning. You deal '+damage+' damage.');
        }else if(target.lightning == -1){
            damage = parseInt(damage*1.5);
            target.takeDamage(damage);
            Debug.Log(target.name+' is weak against lightning. You deal '+damage+' damage.');
        }else{
            target.takeDamage(damage);
            Debug.Log('You deal '+damage+' Lightning damage.');
        }
        StartCoroutine(waitAwhile());
    };

    public function Lightning(){
    	strength=50;
    };

};