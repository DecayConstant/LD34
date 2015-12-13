#pragma strict

public class Reequip extends Action {

	public function action(actor : Entity, target:Entity){
		var newAttack = Random.Range(75,150);
		var newDefense = Random.Range(75,150);

        Debug.Log("You pull some stuff out of your travel bag and try it on.");
        Debug.Log("Attack: "+actor.attack+" => "+newAttack);
        Debug.Log("Defense: "+actor.defense+" => "+newDefense);

        actor.attack = newAttack;
        actor.defense = newDefense;

    };

    public function Reequip(){
    	action_name= "Reequip";
    };

};