#pragma strict

public class Ice extends Action {

	public function action(actor : Entity, target:Entity){
        var damage = strength;
        if(target.ice == 1){
            damage = parseInt(damage*.5);
            target.takeDamage(damage);
            Debug.Log(target.name+' is strong against ice. You deal '+damage+' damage.');
        }else if(target.ice == -1){
            damage = parseInt(damage*1.5);
            target.takeDamage(damage);
            Debug.Log(target.name+' is weak against ice. You deal '+damage+' damage.');
        }else{
            target.takeDamage(damage);
            Debug.Log('You deal '+damage+' Ice damage.');
        }
    };

    public function Ice(){
    	strength=50;
    };

};