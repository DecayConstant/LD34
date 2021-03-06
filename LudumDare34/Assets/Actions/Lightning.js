﻿#pragma strict

public class Lightning extends Action {

	public function action(actor : Entity, target:Entity){
        prepareAnimation(target);

        var damage = calculateDamage(actor,target,actor.lightning,target.lightning);
        target.takeDamage(damage);

        var effectivenessDesc = getEffectiveness(actor.lightning,target.lightning);

        var battleMessage = getBattleMessage(damage,actor);
        battleMessage = battleMessage+effectivenessDesc;

        Debug.Log(battleMessage);
        dialogue_box.text = colorizeBattletext(actor, battleMessage)+'\n' + dialogue_box.text;

        StartCoroutine(waitAwhile());

    };

    public function Lightning(){
    	generic_name='lightning';
    	action_name= "Zues Kisses";
    	strength=50;
    };

};