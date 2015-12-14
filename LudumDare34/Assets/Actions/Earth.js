#pragma strict

public class Earth extends Action {

    public function action(actor: Entity, target: Entity) {

        prepareAnimation(target);

        var damage = calculateDamage(actor, target, actor.earth, target.earth);
        target.takeDamage(damage);

        var effectivenessDesc = getEffectiveness(actor.earth, target.earth);

        var battleMessage = getBattleMessage(damage, actor);
        battleMessage = battleMessage + effectivenessDesc;

        Debug.Log(battleMessage);
        dialogue_box.text = colorizeBattletext(actor, battleMessage) + '\n' + dialogue_box.text;

        StartCoroutine(waitAwhile());

    };

    public function Earth() {
        generic_name = 'earth';
        action_name = "Quakeball 9000";
        strength = 50;
    };

};