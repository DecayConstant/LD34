#pragma strict

public class Poison extends Action {

	public function action(actor : Entity, target:Entity){
          target.poisoned = 3;
          Debug.Log("You poison "+target.name+".");
    };

    public function Poison(){
    	strength=25;
    };

};