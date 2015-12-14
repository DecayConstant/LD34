#pragma strict

public class Taunt extends Action {

	var gameover_script : GameOver;

	function Awake(){
		gameover_script = GetComponent(GameOver);
	}

	public function action(actor : Entity, target:Entity){

		prepareAnimation(actor);

    	var battleMessage:String;

     	battleMessage = "You make fun of " + target.entity_name + '.\n';
     	dialogue_box.text = colorizeBattletext(actor, battleMessage) + dialogue_box.text;

        target.taunt_count = target.taunt_count + 1;

        if (target.taunt_count >= 10) {
            gameover_script.WinGame("You successfully taunted your enemy into submission!\nCongratz!  :V");
        }

        StartCoroutine(waitAwhile());
    }

    public function Taunt(){
    	action_name="Taunt";
    };

}