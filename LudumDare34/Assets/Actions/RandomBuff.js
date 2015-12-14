#pragma strict

public var soundEffect : AudioClip;

public class RandomBuff extends Action {

	function waitAwhile (){
		
		GetComponent.<AudioSource>().PlayOneShot(soundEffect, 0.5f);
		yield WaitForSeconds (1.0);
		onEnemyAnimation.SetActive(false);
        onPlayerAnimation.SetActive(false);
	}

	public function action(actor : Entity, target:Entity){

		prepareAnimation(actor);

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

		var battleMessage:String;
        battleMessage = actor.entity_name+" foucuses their hocus pocus and feels the majestic powers of "+buff+" surround them.\n";
        dialogue_box.text = colorizeBattletext(actor, battleMessage)+dialogue_box.text;
        StartCoroutine(waitAwhile());

    };

    public function RandomBuff(){
    	action_name= "Random Buff";
    };

};