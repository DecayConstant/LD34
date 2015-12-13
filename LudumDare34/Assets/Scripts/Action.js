#pragma strict
import UnityEngine.UI;

public class Action extends MonoBehaviour{
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

        return damage;
    };

    function getEffectiveness(actorBuff : int, targetBuff : int) : String{

    	var effiectiveness = actorBuff - targetBuff;
    	var message:String;

        if(effiectiveness == -2){
        //.36
        	message = "It was MEGA SAD.";
        } else if(effiectiveness == -1){
        	// .60  
        	//Actor Week or Target Strong
        	message = "It was KINDA BAD.";
        } else if(effiectiveness == 0){
			if(actorBuff == 0 && targetBuff == 0){
				//In this case they were both neutral.
				message = "";
			} else {
				//In this case either they were both strong or both weak.
				message = "It was MEH.";
			}
        } else if(effiectiveness == 1){
        	//1.5
        	//Actor Strong OR Target Week.
        	message = "It was PRETTY GOOD.";
        } else if(effiectiveness == 2){
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

