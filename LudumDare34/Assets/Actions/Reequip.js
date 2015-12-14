#pragma strict

public class Reequip extends Action {

	public function action(actor : Entity, target:Entity){
		var newAttack = Random.Range(-20, 50) + actor.attack;
		var newDefense = Random.Range(-20, 50) + actor.defense;

		var battleMessage : String;

        battleMessage = "You pull some stuff out of your travel bag and try it on.\n";
        battleMessage += "Attack: "+actor.attack+" => "+newAttack+'\n';
        battleMessage += "Defense: "+actor.defense+" => "+newDefense+'\n';

        dialogue_box.text = colorizeBattletext(actor, battleMessage)+dialogue_box.text;

        actor.attack = newAttack;
        actor.defense = newDefense;

    };

    public function Reequip(){
    	action_name= "Reequip";
    };

};