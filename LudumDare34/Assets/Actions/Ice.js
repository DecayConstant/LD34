#pragma strict
import UnityEngine.UI;

public class Ice extends Action {

    public function action(actor: Entity, target: Entity) {

		prepareAnimation(target);	

        var damage = calculateDamage(actor, target, actor.ice, target.ice);
        target.takeDamage(damage);

        var effectivenessDesc = getEffectiveness(actor.ice, target.ice);

        var battleMessage = getBattleMessage(damage, actor);
        battleMessage = battleMessage + effectivenessDesc;

        Debug.Log(battleMessage);
        dialogue_box.text = colorizeBattletext(actor, battleMessage) + '\n' + dialogue_box.text;

        StartCoroutine(waitAwhile());


    };

    public function Ice() {
        generic_name = 'ice';
        action_name = "MegaloFrost";
        strength = 50;
    };

};