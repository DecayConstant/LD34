#pragma strict

public class Earth extends Action {

	public function action(actor : Entity, target:Entity){
        var damage = strength;
        if(target.earth == 1){
            damage = parseInt(damage*.5);
            target.takeDamage(damage);
            Debug.Log(target.name+' is strong against earth. You deal '+damage+' damage.');
        }else if(target.earth == -1){
            damage = parseInt(damage*1.5);
            target.takeDamage(damage);
            Debug.Log(target.name+' is weak against earth. You deal '+damage+' damage.');
        }else{
            target.takeDamage(damage);
            Debug.Log('You deal '+damage+' Earth damage.');
        }
    };

    public function Earth(){
    	strength=50;
    };

};