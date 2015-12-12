#pragma strict

/*
This attack requires multiple turns of charging to execute, and does 25% of the target's remaining
health as the damage.  Can only be done once per battle.
*/
public class SuperCharge extends Action {
	public var charge_count : int = 0;
	public var executed : boolean = false;

	public function action(actor : Entity, target:Entity){
		charge_count++;
		if(executed){
			Debug.Log("You can't even bring yourself to try that again.");
		}else{
			if(charge_count >=2 ){
				Debug.Log('YOU DORK!');
				Debug.Log('YOU LOSE!');
			}else{
				executed = true;
				Debug.Log("HOLY COWSOX!!  KABLOOMERS!  WOW!");
				var damage = parseInt(target.health * .25);
				Debug.Log("You do "+damage+" damege to "+target.entity_name+'.');
			}
		}
    };

    public function SuperCharge(){
    };

};