# pragma strict

public var soundEffect: AudioClip;

var onEnemyAnimation: GameObject;
var onPlayerAnimation: GameObject;

public class Earth extends Action {

    function waitAwhile() {

        GetComponent.<AudioSource>().PlayOneShot(soundEffect, 0.5 f);
        yield WaitForSeconds(1.0);
        onEnemyAnimation.SetActive(false);
        onPlayerAnimation.SetActive(false);
    }

    public function action(actor: Entity, target: Entity) {
        if (target.playerType == 2){
            onEnemyAnimation.SetActive(true);
            Debug.Log("target is enemy");
        } else if (target.playerType == 1) {
            onPlayerAnimation.SetActive(true);
            Debug.Log("target is player");
        } else if (target.playerType == 0) {
            Debug.Log("is zero");
        }

        var damage = calculateDamage(actor, target, actor.earth, target.earth);
        target.takeDamage(damage);

        var effectivenessDesc = getEffectiveness(actor.earth, target.earth);

        var battleMessage = getBattleMessage(damage, actor);
        battleMessage = battleMessage + effectivenessDesc;

        Debug.Log(battleMessage);
        dialogue_box.text = battleMessage + '\n' + dialogue_box.text;

        StartCoroutine(waitAwhile());

    };

    public function Earth() {
        generic_name = 'earth';
        action_name = "Quakeball 9000";
        strength = 50;
    };

};