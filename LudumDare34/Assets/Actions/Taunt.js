#pragma strict


public class Taunt extends Action {
	public function action(actor : Entity, target:Entity){
     	Debug.Log("You make fun of " + target.name + '.');
        target.taunt_count = target.taunt_count + 1;

        if (target.taunt_count >= 10) {
            //Do they win?
        }
    }

    public function Taunt(){

    };

}