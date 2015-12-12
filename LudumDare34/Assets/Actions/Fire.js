#pragma strict

public class Fire extends Action {

	public function action(actor : Entity, target:Entity){
        var damage = strength;
        if(target.fire == 1){
            damage = parseInt(damage*.5);
            target.takeDamage(damage);
            Debug.Log(target.name+' is strong against fire. You deal '+damage+' damage.');
        }else if(target.fire == -1){
            damage = parseInt(damage*1.5);
            target.takeDamage(damage);
            Debug.Log(target.name+' is weak against fire. You deal '+damage+' damage.');
        }else{
            target.takeDamage(damage);
            Debug.Log('You deal '+damage+' Fire damage.');
        }
    };

    public function Fire(){
    	strength=50;
    };

};