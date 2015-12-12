#pragma strict

#pragma strict

public class RandomDebuff extends Action {

	public function action(actor : Entity, target:Entity){
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

    };

    public function RandomDebuff(){
    	
    };

};