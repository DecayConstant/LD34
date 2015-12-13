#pragma strict
import UnityEngine.UI;

public class Action extends MonoBehaviour{

	var onEnemyAnimation: GameObject;
	var onPlayerAnimation: GameObject;

	public var strength : int;
	public var action_name: String;   //This is the name we display to the player. e.g. 'MegaloFrost.'
	public var generic_name: String; //This is a generic name we use inernally to match actions to buff/debuffs. e.g. 'ice'

	public var dialogue_box : Text;

	public var buffMultiplier : float = 1.5;
	public var debuffMultiplier :float = 0.6;

	public function action(actor : Entity, target:Entity){};

	public function Action(){
		strength = 1;
	};

	function prepareAnimation(target:Entity){
		if (target.playerType == 2){
			if(onEnemyAnimation){
            	onEnemyAnimation.SetActive(true);
            }
            Debug.Log("target is enemy");
        } else if (target.playerType == 1) {
        	if(onPlayerAnimation){
            	onPlayerAnimation.SetActive(true);
            }
            Debug.Log("target is player");
        } else if (target.playerType == 0) {
            Debug.Log("is zero");
        }
	};

	function calculateDamage (actor:Entity, target:Entity, actorBuff:int, targetBuff: int) : int{
    	var damage = strength+actor.attack-target.defense;

    	if(actorBuff == 1){
        	damage = parseInt(damage * buffMultiplier);
        } else if(actorBuff == -1){
        	damage = parseInt(damage * debuffMultiplier);
        }

        if(targetBuff == 1){
        	damage = parseInt(damage * debuffMultiplier);
        } else if(targetBuff == -1){
        	damage = parseInt(damage * buffMultiplier);
        }

        //If the target has guards saved up, apply it to this attack, and reduce guard counter.
    	if(target.guarded > 0) {
    		damage = parseInt(damage * .33);
    		target.guarded--;
    	}

        return damage;
    };

    function getEffectiveness(actorBuff : int, targetBuff : int) : String{

    	var effectiveness = actorBuff - targetBuff;
    	var message:String;

        if(effectiveness == -2){
        //.36
        	message = "It was MEGA SAD.";
        } else if(effectiveness == -1){
        	// .60  
        	//Actor Week or Target Strong
        	message = "It was KINDA BAD.";
        } else if(effectiveness == 0){
			if(actorBuff == 0 && targetBuff == 0){
				//In this case they were both neutral.
				message = "";
			} else {
				//In this case either they were both strong or both weak.
				message = "It was MEH.";
			}
        } else if(effectiveness == 1){
        	//1.5
        	//Actor Strong OR Target Weak.
        	message = "It was PRETTY GOOD.";
        } else if(effectiveness == 2){
        	//2.25
        	message = "It was SUPER EFFECTIVE.";
        }

        return message;
    }

    function getBattleMessage(damage:int,actor:Entity):String {
    	var message = actor.entity_name+" attacks with "+action_name+' for ' +damage+" DAMAGE. ";
    	return message;
    }
};

