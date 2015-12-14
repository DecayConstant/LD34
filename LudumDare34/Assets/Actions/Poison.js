#pragma strict

public class Poison extends Action {

	public function action(actor : Entity, target:Entity){

		prepareAnimation(target);

        target.poisoned = 3;
    
        var battleMessage:String = actor.entity_name+" poisons "+target.entity_name+".\n";
        dialogue_box.text = colorizeBattletext(actor, battleMessage)+dialogue_box.text;

        StartCoroutine(waitAwhile());


    };

    public function Poison(){
    	strength=25;
    	action_name= "Poison";
    };

};