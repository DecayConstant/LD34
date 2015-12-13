#pragma strict

public class Guard extends Action {

	public function action(actor : Entity, target:Entity){

         Debug.Log("You put up your dukes and gaurd against the next attack.");
         actor.guarded = 1;
    };

    public function Guard(){
    	action_name="Guard";
    };

};