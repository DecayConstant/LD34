#pragma strict

public class Guard extends Action {

	public function action(actor : Entity, target:Entity){
        actor.guarded++;

        var battleMessage:String;
     	battleMessage = "You put up your dukes and gaurd against the next attack.\n";
     	dialogue_box.text = battleMessage + dialogue_box.text;
    };

    public function Guard(){
    	action_name="Guard";
    };

};