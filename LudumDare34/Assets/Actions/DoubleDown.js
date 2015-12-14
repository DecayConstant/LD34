#pragma strict

public class DoubleDown extends Action {
	var gameover_script : GameOver;

	public var use_count=0;

	function Awake(){
		gameover_script = GetComponent(GameOver);
	}

	public function action(actor : Entity, target:Entity){
		use_count++;

		var battleMessage:String;

		if(use_count >=2 ) {
			gameover_script.GameOver("WHY DID YOU DO THAT THING AGAIN?  YOU LOSE!");
		} else {
			battleMessage = "DON'T EVER DO THAT AGAIN!!!\n";
		}

		dialogue_box.text = colorizeBattletext(actor, battleMessage)+dialogue_box.text;
    };

    public function DoubleDown(){
    	action_name= "Stupid Maneuver";
    };

};