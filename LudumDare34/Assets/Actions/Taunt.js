#pragma strict

public class Taunt extends Action {

	public function action(actor : Entity, target:Entity){

		prepareAnimation(actor);

    	var battleMessage:String;

     	battleMessage = "You make fun of " + target.entity_name + '.\n';
     	dialogue_box.text = colorizeBattletext(actor, battleMessage) + dialogue_box.text;

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