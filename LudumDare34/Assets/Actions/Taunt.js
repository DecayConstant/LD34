#pragma strict

public var soundEffect : AudioClip;

var onPlayerAnimation : GameObject;

public class Taunt extends Action {
	function waitAwhile (){
		
		GetComponent.<AudioSource>().PlayOneShot(soundEffect, 0.5f);
		yield WaitForSeconds (1.0);
        onPlayerAnimation.SetActive(false);
	}

	public function action(actor : Entity, target:Entity){

	 if (actor.playerType == 1) {
        		onPlayerAnimation.SetActive(true);
        		Debug.Log("target is player");
        	}else if (actor.playerType == 0){
        		        		Debug.Log("is zero");

        	}
     	Debug.Log("You make fun of " + target.name + '.');
        target.taunt_count = target.taunt_count + 1;

        if (target.taunt_count >= 10) {
            //Do they win?
        }
                StartCoroutine(waitAwhile());

    }

    public function Taunt(){

    };

}