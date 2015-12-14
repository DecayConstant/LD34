#pragma strict

public var soundEffect: AudioClip;

public class Fire extends Action {

    function waitAwhile() {

        GetComponent.<AudioSource>().PlayOneShot(soundEffect, 0.5f);
        yield WaitForSeconds(1.0);
        onEnemyAnimation.SetActive(false);
        onPlayerAnimation.SetActive(false);
    }

    public function action(actor: Entity, target: Entity) {
        prepareAnimation(target);

        var damage = calculateDamage(actor, target, actor.fire, target.fire);
        target.takeDamage(damage);

        var effectivenessDesc = getEffectiveness(actor.fire, target.fire);
        var battleMessage = getBattleMessage(damage, actor);
        battleMessage = battleMessage + effectivenessDesc;

        Debug.Log(battleMessage);
        dialogue_box.text = colorizeBattletext(actor, battleMessage) + '\n' + dialogue_box.text;

        StartCoroutine(waitAwhile());
    };


    public function Fire() {
        generic_name = 'fire';
        action_name = "MegaFlare";
        strength = 50;
    };

};