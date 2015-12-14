#pragma strict
import UnityEngine.UI;

public class HealthPotion extends Action {

	public var potion_panel : GameObject;
	public var potion_text : Text;

	public function action(actor : Entity, target:Entity){

		potion_panel.SetActive(true);

		prepareAnimation(actor);

		var battleMessage:String;

	    if(actor.health_potions > 0){
	        actor.health_potions--;
	    	battleMessage = "You swig a health potion.\n";

	    	//Make sure we don't put their health over their max_health.
	        if(actor.health + strength > actor.max_health){
	        	actor.health = actor.max_health;
	        } else {
	        	actor.health = actor.health + strength;
	        }

	    }else{
	        battleMessage = "You'd like to swig a health potion, but you are out!\n";
	    }

	    potion_text.text = "x" + actor.health_potions.ToString();
     	dialogue_box.text = colorizeBattletext(actor, battleMessage) + dialogue_box.text;

		StartCoroutine(waitAwhile());

    };

    public function HealthPotion(){
    	
    };

    function Start(){
    	strength=200;
    	action_name="Health Potion";
    }

};