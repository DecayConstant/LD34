#pragma strict

public class HealthPotion extends Action {

	public function action(actor : Entity, target:Entity){

          if(actor.health_potions > 0){
                actor.health_potions--;
                Debug.Log("You swig a health potion.");

                if(actor.health + strength > actor.max_health){
                	actor.health = actor.max_health;
                } else {
                	actor.health = actor.health + strength;
                }

            }else{
                Debug.Log("You'd like to swig a health potion, but you are out!");
            }
    };

    public function HealthPotion(){
    	strength=150;
    };

};