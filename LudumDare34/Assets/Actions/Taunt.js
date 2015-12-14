#pragma strict

public var soundEffect : AudioClip;

public class Taunt extends Action {
	function waitAwhile (){
		
		GetComponent.<AudioSource>().PlayOneShot(soundEffect, 0.5f);
		yield WaitForSeconds (1.0);
        onPlayerAnimation.SetActive(false);
	}

	public function action(actor : Entity, target:Entity){

		prepareAnimation(target);

    	var battleMessage:String;

     	battleMessage = "You make fun of " + target.entity_name + '.\n';
     	dialogue_box.text = battleMessage + dialogue_box.text;

        target.taunt_count = target.taunt_count + 1;

        if (target.taunt_count >= 10) {
            //Do they win?
        }

        StartCoroutine(waitAwhile());
    }

    public function Taunt(){
    	action_name="Taunt";
    };

}