#pragma strict

public class RandomDebuff extends Action {

	public function action(actor : Entity, target:Entity){
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

    };

    public function RandomDebuff(){
    	
    };

};