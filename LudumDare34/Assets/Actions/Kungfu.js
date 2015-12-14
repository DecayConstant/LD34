#pragma strict

public class Kungfu extends Action {

	public function action(actor : Entity, target:Entity){
        var damage = calculateDamage(actor,target,actor.kungfu,target.kungfu);
        target.takeDamage(damage);

        prepareAnimation(target);

        var effectivenessDesc = getEffectiveness(actor.kungfu,target.kungfu);

        var battleMessage = getBattleMessage(damage,actor);
        battleMessage = battleMessage+effectivenessDesc;

        Debug.Log(battleMessage);

        dialogue_box.text = colorizeBattletext(actor, battleMessage)+'\n' + dialogue_box.text;

        StartCoroutine(waitAwhile());

    };

    public function Kungfu(){
    	generic_name='kungfu';
    	action_name="Kung Fu";
    	strength=50;
    };

};
