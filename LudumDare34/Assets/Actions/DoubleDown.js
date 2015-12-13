#pragma strict

public class DoubleDown extends Action {
	var gameover_script : GameOver;


	public var use_count=0;


	function Awake(){
		gameover_script = GetComponent(GameOver);
	}

	public function action(actor : Entity, target:Entity){
		use_count++;
		if(use_count >=2 ){
			Debug.Log('YOU DORK!');
			Debug.Log('YOU LOSE!');
			gameover_script.GameOver("DON'T EVER DO THAT AGAIN!!!");
		}else{
			Debug.Log("DON'T EVER DO THAT AGAIN!!!");
		}
    };

    public function DoubleDown(){
    	action_name= "Stupid Maneuver";
    };

};