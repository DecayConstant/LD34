#pragma strict

public class Karate extends Action {

	public function action(actor : Entity, target:Entity){
        var damage = calculateDamage(actor,target,actor.karate,target.karate);
        target.takeDamage(damage);
       
        prepareAnimation(target);

        var effectivenessDesc = getEffectiveness(actor.karate,target.karate);

        var battleMessage = getBattleMessage(damage,actor);
        battleMessage = battleMessage+effectivenessDesc;

        Debug.Log(battleMessage);
        dialogue_box.text = colorizeBattletext(actor, battleMessage)+'\n' + dialogue_box.text;

        StartCoroutine(waitAwhile());

    };

    public function Karate(){
    	generic_name='karate';
    	action_name= "Karate";
    	strength=50;
    };

};