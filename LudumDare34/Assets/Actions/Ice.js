#pragma strict
import UnityEngine.UI;

public class Ice extends Action {

	public function action(actor : Entity, target:Entity){
        var damage = strength;
        if(target.ice == 1){
            damage = parseInt(damage*.5);
            target.takeDamage(damage);
            Debug.Log(target.name+' is strong against ice. You deal '+damage+' damage.');
            dialogue_box.text = target.name+' is strong against ice. You deal '+damage+' damage.\n' + dialogue_box.text;
        }else if(target.ice == -1){
            damage = parseInt(damage*1.5);
            target.takeDamage(damage);
            Debug.Log(target.name+' is weak against ice. You deal '+damage+' damage.');
            dialogue_box.text = target.name+' is weak against ice. You deal '+damage+' damage.\n' + dialogue_box.text;
        }else{
            target.takeDamage(damage);
            Debug.Log('You deal '+damage+' Ice damage.');
            dialogue_box.text = 'You deal '+damage+' Ice damage.\n' + dialogue_box.text;
        }
    };

    public function Ice(){
    	strength=50;
    };

};