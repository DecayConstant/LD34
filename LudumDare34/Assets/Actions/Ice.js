﻿# pragma strict
import UnityEngine.UI;

public var soundEffect: AudioClip;

var onEnemyAnimation: GameObject;
var onPlayerAnimation: GameObject;

public class Ice extends Action {

    function waitAwhile() {

        GetComponent.<AudioSource>().PlayOneShot(soundEffect, 0.5 f);
        yield WaitForSeconds(1.0);
        onEnemyAnimation.SetActive(false);
        onPlayerAnimation.SetActive(false);
    }

    public function action(actor: Entity, target: Entity) {

        var damage = calculateDamage(actor, target, actor.ice, target.ice);
        target.takeDamage(damage);

        if (target.playerType == 2){
            onEnemyAnimation.SetActive(true);
            Debug.Log("target is enemy");
        } else if (target.playerType == 1) {
            onPlayerAnimation.SetActive(true);
            Debug.Log("target is player");
        } else if (target.playerType == 0) {
            Debug.Log("is zero");

        }
        var effectivenessDesc = getEffectiveness(actor.ice, target.ice);

        var battleMessage = getBattleMessage(damage, actor);
        battleMessage = battleMessage + effectivenessDesc;

        Debug.Log(battleMessage);
        dialogue_box.text = battleMessage + '\n' + dialogue_box.text;

        StartCoroutine(waitAwhile());


    };

    public function Ice() {
        generic_name = 'ice';
        action_name = "MegaloFrost";
        strength = 50;
    };

};