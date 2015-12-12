#pragma strict

public class Guard extends Action {

	public function action(actor : Entity, target:Entity){

         Debug.Log("You put up your dukes and gaurd against thenext attack.");
         actor.guarded = 1;
    };

    public function Guard(){
    };

};